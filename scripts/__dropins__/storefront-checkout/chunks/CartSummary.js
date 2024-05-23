import{u as V,H as A}from"./CartSummaryItem.js";import{Skeleton as N,SkeletonRow as d,Card as b,Divider as T,Accordion as H,AccordionSection as $,Icon as C,CartItem as z,Image as P,Price as S}from"@dropins/tools/components/index.js";import"@dropins/tools/preact-hooks.js";import{i as Q,T as R,n as W}from"./countries.js";import"@dropins/tools/event-bus.js";/* empty css                     */import{jsx as t,jsxs as o,Fragment as g}from"@dropins/tools/preact-jsx-runtime.js";import{S as q}from"./cart-item.js";import*as v from"@dropins/tools/preact-compat.js";import{useState as F,useCallback as M,useMemo as j}from"@dropins/tools/preact-compat.js";import{useText as I,Text as _}from"@dropins/tools/i18n.js";import{c as O}from"./classes.js";import{e as B}from"./transform-shipping-methods.js";function G(n){window.location.href=n}const x=n=>v.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},v.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",stroke:"currentColor"}),v.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.75 5.88423V4.75H12.25V5.88423L12.0485 13.0713H11.9515L11.75 5.88423ZM11.7994 18.25V16.9868H12.2253V18.25H11.7994Z",stroke:"currentColor"})),f=()=>t("div",{className:"dropin-cart-item dropin-cart-item-skeleton",children:o(N,{className:"dropin-cart-item__skeleton dropin-cart-item__wrapper",children:[t("div",{className:"dropin-cart-item__image",children:t(d,{className:"dropin-cart-item__skeleton__item"})}),t("div",{className:"dropin-cart-item__title",children:t(d,{className:"dropin-cart-item__skeleton__item"})}),t("div",{className:"dropin-cart-item__sku",children:t(d,{className:"dropin-cart-item__skeleton__item"})}),t("div",{className:"dropin-cart-item__price",children:t(d,{className:"dropin-cart-item__skeleton__item"})}),t("div",{className:"dropin-cart-item__quantity",children:t(d,{className:"dropin-cart-item__skeleton__item"})}),t("div",{className:"dropin-cart-item__total",children:t(d,{className:"dropin-cart-item__skeleton__item"})})]})}),X=()=>t(b,{children:o(N,{"data-testid":"cart-summary-skeleton",className:"checkout-cart-summary-skeleton",style:{gridTemplateColumns:"1fr"},children:[t(d,{variant:"heading",fullWidth:!0,size:"medium"}),t(f,{}),t(f,{}),t(f,{}),t(f,{}),t(f,{}),t(d,{size:"medium",fullWidth:!0})]})}),Z=()=>t(N,{"data-testid":"cart-summary-skeleton",className:"checkout-mobile-cart-summary-skeleton",style:{gridTemplateColumns:"1fr"},children:t(d,{fullWidth:!0,size:"xlarge"})}),D=({type:n,onClick:e,children:i})=>o(g,{children:[t(T,{className:"checkout-cart-summary__divider-bottom",variant:"primary"}),t("button",{"data-testid":`action-${n}`,className:"checkout-cart-summary__action",onClick:e,children:i})]}),U=({title:n,isLoading:e,totalQuantity:i,routeCart:a,items:r,taxIncluded:s,action:l})=>t(g,{children:e?t(Z,{}):t(H,{actionIconPosition:"left",children:o($,{title:`${n} (${i})`,secondaryText:(a==null?void 0:a())&&t("a",{href:a==null?void 0:a(),rel:"noreferrer",children:t(_,{id:"Checkout.CartSummary.editCart"})}),children:[r==null?void 0:r.map(c=>t(E,{item:c,taxIncluded:s},c==null?void 0:c.uid)),l]})})}),J=({title:n,isLoading:e,totalQuantity:i,routeCart:a,items:r,action:s,taxIncluded:l})=>t(g,{children:e?t(X,{}):o(b,{children:[o("div",{className:"checkout-cart-summary__heading",children:[o(A,{level:2,className:"checkout-cart-summary__title",children:[n," (",i,")"]}),(a==null?void 0:a())&&t("a",{className:"checkout-cart-summary__edit",href:a==null?void 0:a(),rel:"noreferrer",children:t(_,{id:"Checkout.CartSummary.editCart"})})]}),t(T,{className:"checkout-cart-summary__divider-top",variant:"primary"}),t("div",{className:"checkout-cart-summary__items",children:r==null?void 0:r.map(c=>t(E,{item:c,taxIncluded:l},c==null?void 0:c.uid))}),s]})}),K=({className:n,...e})=>{const i=I("Checkout.CartSummary.title").title,a=V();return t("div",{className:O(["checkout-cart-summary",n]),children:a==="small"?t(U,{title:i,...e}):t(J,{title:i,...e})})},E=({className:n,item:e,taxIncluded:i=!1})=>{var m,p;const a=I({Sender:"Checkout.CartSummary.GiftCard.sender",Recipient:"Checkout.CartSummary.GiftCard.recipient",Message:"Checkout.CartSummary.GiftCard.message",Download:"Checkout.CartSummary.Downloadable.download",OutOfStockAlert:"Checkout.OutOfStock.alert",..."links"in e&&e.links?{Files:t(_,{id:"Checkout.CartSummary.Downloadable.files",plural:e.links.length,fields:{count:e.links.length}})}:{}});let r=e.regularPrice,s=e.total;i&&(r=e.priceInclTax,s=e.totalInclTax);const l={..."customizableOptions"in e?e.customizableOptions:{},..."configurableOptions"in e?e.configurableOptions:{},..."links"in e&&e.links?{[a.Files]:e.links.join(", ")}:{},..."senderName"in e&&e.senderName?{[a.Sender]:e.senderName}:{},..."recipientName"in e&&e.recipientName?{[a.Recipient]:e.recipientName}:{},..."senderEmail"in e&&"senderName"in e&&e.senderName&&e.senderEmail?{[a.Sender]:`${e.senderName} (${e.senderEmail})`}:{},..."recipientEmail"in e&&"recipientName"in e&&e.recipientName&&e.recipientEmail?{[a.Recipient]:`${e.recipientName} (${e.recipientEmail})`}:{},..."message"in e&&e.message&&e.message!=""?{[a.Message]:c(e.message,60)}:{}};function c(u,h){return u.length>h?`${u.slice(0,h)}...`:u}const k=e.stockStatus===q.OutOfStock?o("span",{"data-testid":"checkout-cart-item-alert",children:[t(C,{source:x,size:"16"}),a.OutOfStockAlert]}):void 0,y=!k&&e.onlyXLeftInStock?o("span",{"data-testid":"checkout-cart-item-low-inventory",children:[t(C,{source:x,size:"16"}),t(_,{id:"Checkout.OutOfStock.lowInventory",plural:e.onlyXLeftInStock,fields:{count:e.onlyXLeftInStock}})]}):void 0;return t("div",{className:O(["checkout-cart-summary-item",n]),children:t(z,{"data-testid":"cart-summary-item",taxIncluded:i,title:t("div",{"data-testid":"product-name",children:e.name}),sku:t("div",{children:e.sku}),quantity:e.quantity,image:t(P,{src:((m=e.image)==null?void 0:m.src)??"",alt:(p=e.image)==null?void 0:p.alt,loading:"lazy",width:"80",height:"80",params:{width:80}}),warning:y,alert:k,configurations:l,price:t(S,{amount:e.regularPrice.value,currency:r.currency,weight:"normal"}),total:o(g,{children:[t(S,{amount:e.regularPrice.value*e.quantity,currency:r.currency,variant:e.discounted?"strikethrough":"default"}),e.discounted&&t(S,{amount:s.value,currency:s.currency,sale:!0})]})},e.uid)})},Y=5,ee={canDisplayMoreItems:!1,hasHiddenItems:!1,isLoading:!0,isTaxIncluded:!1,totalQuantity:0,visibleItems:[]};function te(n){const{config:e}=Q(),i=e===void 0,a=B.value.data;if(i||a===void 0)return ee;const{cartSummaryMaxItems:s,cartSummaryTotalDisplay:l,taxCartDisplay:c}=e,k=l===R.Quantity,y=c.shoppingCartDisplayPrice===W.IncludingTax,{items:m,totalQty:p}=a,u=k?p:m.length,h=n?s:Math.min(s,Y),w=m.length>h,L=m.slice(0,h);return{canDisplayMoreItems:w&&!n&&h!=s,hasHiddenItems:w,isLoading:!1,isTaxIncluded:y,totalQuantity:u,visibleItems:L}}const ke=({routeCart:n,...e})=>{const[i,a]=F(!1),r=I({ViewAll:"Checkout.CartSummary.viewAll",ViewMore:"Checkout.CartSummary.viewMore"}),{canDisplayMoreItems:s,hasHiddenItems:l,isLoading:c,isTaxIncluded:k,visibleItems:y,totalQuantity:m}=te(i),p=M(()=>{a(!0)},[]),u=M(()=>{n&&G(n())},[n]),h=j(()=>{if(l){if(s)return t(D,{type:"view-more",onClick:p,children:r.ViewMore});if(n)return t(D,{type:"view-all",onClick:u,children:r.ViewAll})}},[l,s,p,r.ViewMore,r.ViewAll,u,n]);return t(K,{...e,action:h,taxIncluded:k,isLoading:c,items:y,routeCart:n,totalQuantity:m})};export{ke as C,te as u};
//# sourceMappingURL=CartSummary.js.map