import"./CartSummaryItem.js";import{Button as l}from"@dropins/tools/components/index.js";import{jsx as i}from"@dropins/tools/preact-jsx-runtime.js";import{c}from"./classes.js";import{Text as a}from"@dropins/tools/i18n.js";import"@dropins/tools/event-bus.js";import{e as s}from"./transform-shipping-methods.js";import"./countries.js";import"@dropins/tools/preact-hooks.js";/* empty css                     */import"@dropins/tools/preact-compat.js";import{L as m}from"./constants2.js";import{S as d}from"./constants.js";import{B as f}from"./constants3.js";const p=({className:e,children:o,...t})=>{const{onClick:r=()=>{},isLoading:n}=t;return i("div",{className:c(["checkout-place-order",e]),children:i(l,{className:c(["checkout-place-order__button",e]),size:"medium",variant:"primary",type:"submit",onClick:r,disabled:n,children:i(a,{id:"Checkout.PlaceOrder.button"})},"placeOrder")})},u=[m,d,f],h=e=>{const o=e.querySelector(":invalid");o&&(o.scrollIntoView({behavior:"smooth"}),o.focus())},O=()=>{const o=(Array.from(document.forms)||[]).filter(r=>u.includes(r.name)).filter(r=>r.offsetParent!==null).filter(r=>!r.checkValidity()),t=o.length===0;if(!t){const r=o[0];h(r)}return t},E=e=>{const{onClick:o,handleServerError:t}=e;return i(p,{onClick:async()=>{if(O())try{await o()}catch(n){t(n)}},isLoading:s.value.pending})};export{E as P};
//# sourceMappingURL=PlaceOrder.js.map