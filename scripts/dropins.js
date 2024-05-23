/* eslint-disable import/no-unresolved */
// Drop-in Tools
import { events } from '@dropins/tools/event-bus.js';
import { setEndpoint } from '@dropins/tools/fetch-graphql.js';
import { initializers } from '@dropins/tools/initializer.js';

// Drop-ins
import * as cartApi from '@dropins/storefront-cart/api.js';
import * as authApi from '@dropins/package-auth-dropin/api.js';
import * as checkoutApi from '@dropins/storefront-checkout/api.js';

// Libs
import { getConfigValue } from './configs.js';

function getUserTokenCookie() {
  const cookieName = 'auth_dropin_user_token';
  return document.cookie.includes(cookieName)
    ? document.cookie.split(`${cookieName}=`)[1].split(';')[0]
    : '';
}

export default async function initializeDropins() {
  // Set Fetch Endpoint (Global)
  setEndpoint(await getConfigValue('commerce-core-endpoint'));

  // Initializers (Global)
  initializers.register(cartApi.initialize, {});
  initializers.register(checkoutApi.initialize, {});
  initializers.register(authApi.initialize, {});

  // Cache cartId in session storage
  events.on(
    'cart/data',
    (data) => {
      if (data?.id) {
        sessionStorage.setItem('DROPINS_CART_ID', data.id);
      } else {
        sessionStorage.removeItem('DROPINS_CART_ID');
      }
    },
    { eager: true },
  );

  // Update auth headers on "authenticated" event
  events.on(
    'authenticated',
    (isAuthenticated) => {
      if (isAuthenticated) {
        const updatedToken = getUserTokenCookie();

        checkoutApi.setFetchGraphQlHeader(
          'Authorization',
          `Bearer ${updatedToken}`,
        );
        authApi.setFetchGraphQlHeader(
          'Authorization',
          `Bearer ${updatedToken}`,
        );
        cartApi.setFetchGraphQlHeader(
          'Authorization',
          `Bearer ${updatedToken}`,
        );
      } else {
        checkoutApi.setFetchGraphQlHeader('Authorization', '');
        authApi.setFetchGraphQlHeader('Authorization', '');
        cartApi.setFetchGraphQlHeader('Authorization', '');
      }
    },
    { eager: true },
  );

  events.enableLogger(true);

  // Initial "authenticated" event emitted on page load
  const token = getUserTokenCookie();
  events.emit('authenticated', !!token);

  // Mount all registered drop-ins
  if (document.readyState === 'complete') {
    initializers.mount();
  } else {
    window.addEventListener('load', initializers.mount);
  }
}
