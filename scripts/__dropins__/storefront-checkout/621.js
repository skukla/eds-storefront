export const id=621;export const ids=[621];export const modules={621:(r,e,t)=>{t.d(e,{D:()=>K,s:()=>G});var n=t(3834),a=t(556),o=()=>(0,a.FD)(n.E,{"data-testid":"order-summary-skeleton",className:"order-summary__skeleton",children:[(0,a.Y)(n.A,{variant:"heading",size:"medium"}),(0,a.Y)(n.A,{variant:"empty",size:"medium"}),(0,a.Y)(n.A,{size:"large",fullWidth:!0,lines:3})]}),i=t(5444),c=t(5292),u=t.n(c),s=t(9893),d=t.n(s),m=t(9383),l=t.n(m),p=t(8296),y=t.n(p),h=t(9088),g=t.n(h),v=t(2942),b={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.21.2"}};b.styleTagTransform=function(r,e){setTimeout((()=>{window.window._loadedStyles=window.window._loadedStyles??{};const{core:t,sdk:n}=function(r,e){const t=r?.match(/^\.dropin-(\w+)/)?.[1],n=e.getAttribute("data-sdk");return{core:t,sdk:n}}(r,e),a=t?`sdk/${t}`:e.getAttribute("data-dropin");!function(r,e){r.setAttribute("data-dropin",e),r.removeAttribute("data-sdk")}(e,a);const o=window._loadedStyles[a];o?function(r,e,t,n){const a=function(r,e){const t=r=>{const[e,t]=r.split("-"),[n,a,o]=e.split(".").map(Number),i=t?t.match(/(alpha|beta)(\d*)/):null;return{major:n,minor:a,patch:o,preType:i?i[1]:"",preNumber:i?parseInt(i[2],10):0}},n=t(r),a=t(e);if(n.major!==a.major)return n.major>a.major?r:e;if(n.minor!==a.minor)return n.minor>a.minor?r:e;if(n.patch!==a.patch)return n.patch>a.patch?r:e;if(n.preType&&a.preType)return n.preType===a.preType?n.preNumber>a.preNumber?r:e:"beta"===n.preType?e:r;return n.preType?e:r}(t,n.sdk);if(!n.core||n.core&&a===n.sdk){const e=n.style.textContent;n.style.textContent=`${e}\n/* --- MERGED --- */\n${r}`}else n.core&&a!==n.sdk&&(n.style.textContent=`/* --- UPGRADED --- */\n${r}`);e.remove()}(r,e,n,o):(function(r,e,t,n,a){e.textContent=r,window._loadedStyles[a]={sdk:n,core:t,style:e}}(r,e,t,n,a),function(r,e){const t=document.querySelector("head"),{lastDropinStyleInjected:n,lastSDKStyleInjected:a}=window._loadedStyles;e?(a?t.insertBefore(r,a.nextSibling):t.insertBefore(r,t.firstChild),window._loadedStyles.lastSDKStyleInjected=r):(n?t.insertBefore(r,n.nextSibling):a?t.insertBefore(r,a.nextSibling):t.insertBefore(r,t.firstChild),window._loadedStyles.lastDropinStyleInjected=r)}(e,t))}),0)},b.setAttributes=y(),b.insert=l().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=g();u()(v.A,b);v.A&&v.A.locals&&v.A.locals;var f=t(3214),_=t(8422),k=t(3213),w=t(5781),x=t(7562),O=t(710),Y=["className","summary","isLoading"];function j(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function S(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?j(Object(t),!0).forEach((function(e){D(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function D(r,e,t){var n;return(e="symbol"==typeof(n=function(r,e){if("object"!=typeof r||!r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(e,"string"))?n:String(n))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function T(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var N=r=>{var{className:e,summary:t,isLoading:n=!1}=r,o=T(r,Y),{total:c,subtotal:u,shipping:s,tax:d}=t;return(0,a.FD)(k.Z,S(S({},o),{},{className:(0,i.L)(["checkout-order-summary",["checkout-order-summary--loading",n],e]),children:[(0,a.Y)(f.D,{level:2,className:"checkout-order-summary__title",children:(0,a.Y)(_.EY,{id:"Checkout.OrderSummary.title"})}),(0,a.Y)(w.c,{variant:"primary"}),n&&(0,a.Y)(x.p,{className:"checkout-order-summary__spinner"}),(0,a.FD)("div",{"data-testid":"order-summary-subtotal",className:"checkout-order-summary__row",children:[(0,a.Y)("p",{children:(0,a.Y)(_.EY,{id:"Checkout.OrderSummary.subtotal"})}),(0,a.Y)(O.g,{amount:u.amount,currency:u.currency,className:(0,i.L)(["checkout-order-summary__price",e])})]}),u.isTaxIncl&&(0,a.Y)("div",{"data-testid":"order-summary-subtotal-incl-tax",className:"checkout-order-summary__row checkout-order-summary__row--muted",children:(0,a.Y)("p",{children:(0,a.Y)(_.EY,{id:"Checkout.OrderSummary.includingTaxes"})})}),null!=s&&(0,a.FD)("div",{"data-testid":"order-summary-shipping",className:"checkout-order-summary__row",children:[(0,a.Y)("p",{"data-testid":"order-summary-shipping-label",children:s.isEstimated?(0,a.Y)(_.EY,{id:"Checkout.OrderSummary.estimatedShipping"}):(0,a.Y)(_.EY,{id:"Checkout.OrderSummary.shipping"})}),0===s.amount?(0,a.Y)("p",{"data-testid":"estimated-shipping",className:"checkout-order-summary__price",children:(0,a.Y)(_.EY,{id:"Checkout.OrderSummary.freeShipping"})}):(0,a.Y)(O.g,{"data-testid":"estimated-shipping",amount:s.amount,currency:s.currency,className:(0,i.L)(["checkout-order-summary__price",e])})]}),null!=d&&!d.breakdown&&(0,a.FD)("div",{"data-testid":"order-summary-tax",className:"checkout-order-summary__row",children:[(0,a.Y)("p",{children:(0,a.Y)(_.EY,{id:"Checkout.OrderSummary.tax"})}),(0,a.Y)(O.g,{amount:d.amount,currency:d.currency,className:(0,i.L)(["checkout-order-summary__price",e])})]}),null!=d&&d.breakdown&&(0,a.FD)(a.FK,{children:[(0,a.Y)(w.c,{variant:"secondary"}),(0,a.Y)("div",{className:"checkout-order-summary__row checkout-order-summary__row--margin-bottom",children:(0,a.Y)("p",{children:(0,a.Y)(_.EY,{id:"Checkout.OrderSummary.taxBreakdown"})})}),d.breakdown.map((r=>(0,a.FD)("div",{"data-testid":"order-summary-tax-breakdown",className:"checkout-order-summary__row checkout-order-summary__row--muted",children:[(0,a.Y)("p",{children:r.label}),(0,a.Y)(O.g,{amount:r.amount.value,currency:r.amount.currency,className:(0,i.L)(["checkout-order-summary__price",e])})]},r.label))),(0,a.FD)("div",{"data-testid":"order-summary-tax-breakdown-total",className:"checkout-order-summary__row checkout-order-summary__row--strong checkout-order-summary__row--margin-top",children:[(0,a.Y)("p",{children:(0,a.Y)(_.EY,{id:"Checkout.OrderSummary.taxTotal"})}),(0,a.Y)(O.g,{amount:d.amount,currency:d.currency,className:(0,i.L)(["checkout-order-summary__price",e])})]}),(0,a.Y)(w.c,{variant:"secondary"})]}),(0,a.FD)("div",{"data-testid":"order-summary-total-incl-tax",className:"checkout-order-summary__row checkout-order-summary__row--emphasized",children:[(0,a.Y)("p",{children:(0,a.Y)(_.EY,{id:"Checkout.OrderSummary.total"})}),(0,a.Y)(O.g,{amount:c.inclTax.amount,currency:c.inclTax.currency,className:(0,i.L)(["checkout-order-summary__price",e])})]}),null!=c.exclTax&&(0,a.FD)("div",{"data-testid":"order-summary-total-excl-tax",className:"checkout-order-summary__row checkout-order-summary__row--muted",children:[(0,a.Y)("p",{children:(0,a.Y)(_.EY,{id:"Checkout.OrderSummary.totalExclTax"})}),(0,a.Y)(O.g,{amount:c.exclTax.amount,currency:c.exclTax.currency,className:(0,i.L)(["checkout-order-summary__price",e])})]})]}))},P=t(9345),E=t(984),C=t(1148),L=0;function A(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function F(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?A(Object(t),!0).forEach((function(e){z(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function z(r,e,t){var n;return(e="symbol"==typeof(n=function(r,e){if("object"!=typeof r||!r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(e,"string"))?n:String(n))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function I(){return I=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},I.apply(this,arguments)}var B=2,$={isLoading:!0};function G(){var{config:r}=(0,P.Pj)(),e=void 0===r,t=E.D.value.data;if(e||void 0===t)return $;var n=r.taxCartDisplay,a=n.shoppingCartDisplaySubtotal===B,o=null==t?void 0:t.shippingAddresses,i=!(null==o||!o.length),c=null==t?void 0:t.prices,u=null==c?void 0:c.grand_total,s=!!u,d=a?null==c?void 0:c.subtotal_including_tax:null==c?void 0:c.subtotal_excluding_tax,m=(null==c?void 0:c.applied_taxes)||[],l=!!m.length;if(!s)return{isLoading:!1};var p={total:{inclTax:{amount:u.value,currency:u.currency}},subtotal:{amount:d.value,currency:d.currency,isTaxIncl:a}};if(l){var y=m.reduce(((r,e)=>r+e.amount.value),L),h=m[0];p.tax={amount:y,currency:h.amount.currency},n.shoppingCartDisplayFullSummary&&(p.tax.breakdown=m)}if(!l&&n.shoppingCartDisplayZeroTax&&(p.tax={amount:L,currency:p.total.inclTax.currency}),n.shoppingCartDisplayGrandTotal){var g=p.tax?p.total.inclTax.amount-p.tax.amount:p.total.inclTax.amount;p.total.exclTax={amount:g,currency:p.total.inclTax.currency}}if(i){var v=o[0],b=null==v?void 0:v.selectedShippingMethod;return b?(p.shipping={amount:null==b?void 0:b.amount.value,currency:null==b?void 0:b.amount.currency,isEstimated:!1},{isLoading:!1,summary:p}):{isLoading:!1,summary:p}}return C.d.value?(p.shipping={amount:C.d.value.amount.value,currency:C.d.value.amount.currency,isEstimated:!0},p.total.inclTax.amount+=p.shipping.amount,p.total.exclTax&&(p.total.exclTax.amount+=p.shipping.amount),{isLoading:!1,summary:p}):{isLoading:!1,summary:p}}var K=r=>{var e=I({},(function(r){if(null==r)throw new TypeError("Cannot destructure "+r)}(r),r)),{isLoading:t,summary:n}=G();return(0,a.FD)("div",F(F({},e),{},{children:[!n&&(0,a.Y)(o,{}),n&&(0,a.Y)(N,{isLoading:t,summary:n})]}))}},1148:(r,e,t)=>{t.d(e,{d:()=>n});var n=(0,t(1875).vP)(void 0)},2942:(r,e,t)=>{t.d(e,{A:()=>c});var n=t(8645),a=t.n(n),o=t(278),i=t.n(o)()(a());i.push([r.id,".checkout-order-summary .dropin-card__content{\n  gap:var(--spacing-xsmall);\n}\n\n.checkout-order-summary__title{\n  color:var(--color-neutral-800);\n  font:var(--type-headline-2-default-font);\n  letter-spacing:var(--type-headline-2-default-letter-spacing);\n  margin:0;\n}\n\n.checkout-order-summary .dropin-divider--primary{\n  margin:0 0 var(--spacing-medium) 0 !important;\n}\n\n.checkout-order-summary .dropin-divider--secondary{\n  margin:var(--spacing-xsmall) 0 var(--spacing-xsmall) 0 !important;\n}\n\n.checkout-order-summary__breakdown{\n  margin:var(--spacing-big) 0 var(--spacing-medium) 0;\n}\n\n.checkout-order-summary__breakdown .dropin-divider:last-child{\n  margin-bottom:0;\n}\n\n.checkout-order-summary__row{\n  display:flex;\n  justify-content:space-between;\n  color:var(--color-neutral-800);\n  font:var(--type-body-1-default-font);\n  letter-spacing:var(--type-body-1-default-letter-spacing);\n}\n\n.checkout-order-summary__row--margin-top{\n  margin-top:var(--spacing-xsmall);\n}\n\n.checkout-order-summary__row--margin-bottom{\n  margin-bottom:var(--spacing-xsmall);\n}\n\n.checkout-order-summary__row .checkout-order-summary__price{\n  color:var(--color-neutral-800);\n  font:var(--type-body-1-default-font);\n  letter-spacing:var(--type-body-1-default-letter-spacing);\n}\n\n.checkout-order-summary__row p{\n  margin:0;\n}\n\n.checkout-order-summary__row--strong{\n  font:var(--type-body-1-strong-font);\n  letter-spacing:var(--type-body-1-strong-letter-spacing);\n}\n\n.checkout-order-summary__row--strong .checkout-order-summary__price{\n  color:var(--color-neutral-800);\n  font:var(--type-body-1-strong-font);\n  letter-spacing:var(--type-body-1-strong-letter-spacing);\n}\n\n.checkout-order-summary__row--emphasized{\n  font:var(--type-body-1-emphasized-font);\n  letter-spacing:var(--type-body-1-emphasized-letter-spacing);\n  margin-top:var(--spacing-small);\n}\n\n.checkout-order-summary__row--emphasized .checkout-order-summary__price{\n  color:var(--color-neutral-800);\n  font:var(--type-body-1-emphasized-font);\n  letter-spacing:var(--type-body-1-emphasized-letter-spacing);\n}\n\n.checkout-order-summary__row--muted{\n  color:var(--color-neutral-700);\n  font:var(--type-body-2-default-font);\n  letter-spacing:var(--type-body-2-default-letter-spacing);\n  margin-top:calc(-1 * var(--spacing-xxsmall));\n}\n\n.checkout-order-summary__row--muted .checkout-order-summary__price{\n  color:var(--color-neutral-700);\n  font:var(--type-body-2-default-font);\n  letter-spacing:var(--type-body-2-default-letter-spacing);\n}\n\n.checkout-order-summary--loading .checkout-order-summary__row{\n  opacity:0.4;\n  pointer-events:none;\n}\n\n.checkout-order-summary__spinner{\n  margin:0 auto;\n  position:absolute;\n  z-index:999;\n  left:0;\n  right:0;\n  top:50%;\n  bottom:0;\n}\n\n.order-summary__skeleton{\n  margin-top:var(--spacing-medium);\n}\n\n@media only screen and (min-width: 320px) and (max-width: 768px){\n  .checkout-order-summary{\n    border-top:var(--shape-border-width-2) solid var(--color-neutral-400);\n    border-bottom:var(--shape-border-width-2) solid var(--color-neutral-400);\n    border-radius:0;\n  }\n\n  .checkout-order-summary__title{\n    display:none;\n  }\n\n  .checkout-order-summary .dropin-divider{\n    display:none;\n  }\n\n  .checkout-order-summary__breakdown{\n    margin-top:0;\n  }\n}\n",""]);const c=i}};