import*as n from"@dropins/tools/event-bus.js";export const id=592;export const ids=[592,2543,1176];export const modules={2543:(n,r,t)=>{t.r(r),t.d(r,{default:()=>a});var e,o=t(2796);function i(){return i=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},i.apply(this,arguments)}const a=function(n){return o.kv("svg",i({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),e||(e=o.kv("path",{vectorEffect:"non-scaling-stroke",d:"M18.36 5.64 5.63 18.37M18.36 18.37 5.63 5.64",stroke:"currentColor"})))}},1176:(n,r,t)=>{t.r(r),t.d(r,{default:()=>a});var e,o=t(2796);function i(){return i=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},i.apply(this,arguments)}const a=function(n){return o.kv("svg",i({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),e||(e=o.kv("path",{vectorEffect:"non-scaling-stroke",fillRule:"evenodd",clipRule:"evenodd",d:"M1 20.895 12.192 1.5l11.203 19.395H1Zm12.028-6.931.222-3.926V9h-2v1.038l.222 3.926h1.556ZM11.299 16v1.75h1.926V16H11.3Z",fill:"currentColor"})))}},5508:(n,r,t)=>{t.d(r,{_:()=>P});var e=t(4944),o=t(1044),i=t(5536),a=t.n(i),s=t(7008),l=t.n(s),c=t(1496),d=t.n(c),p=t(9356),b=t.n(p),u=t(9904),v=t.n(u),f=t(9308),m={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.22.0"},styleTagTransform:function(n,r){window._loadedStyles=window._loadedStyles??{};const t=n?.match(/^\.dropin-(\w+)/)?.[1],e=r.getAttribute("data-sdk"),o=t?`sdk/${t}`:r.getAttribute("data-dropin");r.setAttribute("data-dropin",o),r.removeAttribute("data-sdk");const i=window._loadedStyles[o];if(i){const o=function(n,r){const[t,e]=n.split("-"),[o,i]=r.split("-"),a=[...t.split("."),e],s=[...o.split("."),i],l=parseInt(a[0],10),c=parseInt(s[0],10);if(l!==c)return l>c?n:r;const d=parseInt(a[1],10),p=parseInt(s[1],10);if(d!==p)return d>p?n:r;const b=parseInt(a[2],10),u=parseInt(s[2],10);if(b!==u)return b>u?n:r;if(a[3]&&s[3]){const t=/(alpha|beta)(.*)/,e=a[3].match(t),o=s[3].match(t),i=e[1],l=o[1],c=parseInt(e[2],10),d=parseInt(o[2],10);if(i===l)return c>d?n:r;if("alpha"===i&&"beta"===l)return r;if("beta"===i&&"alpha"===l)return n}return a[3]?r:n}(e,i.sdk);if(!t||t&&o===i.sdk){const r=i.style.textContent;i.style.textContent=`${r}\n/* --- MERGED --- */\n${n}`}else t&&o!==i.sdk&&(i.style.textContent=`/* --- UPGRADED --- */\n${n}`);return void r.remove()}r.textContent=n,window._loadedStyles[o]={sdk:e,core:t,style:r};const a=document.querySelector("head"),{lastDropinStyleInjected:s,lastSDKStyleInjected:l}=window._loadedStyles;t?(l?a.insertBefore(r,l.nextSibling):a.insertBefore(r,a.firstChild),window._loadedStyles.lastSDKStyleInjected=r):(s?a.insertBefore(r,s.nextSibling):l?a.insertBefore(r,l.nextSibling):a.insertBefore(r,a.firstChild),window._loadedStyles.lastDropinStyleInjected=r)}};m.setAttributes=b(),m.insert=d().bind(null,"head"),m.domAPI=l(),m.insertStyleElement=v();a()(f.c,m);f.c&&f.c.locals&&f.c.locals;var g=t(492),y=t(3720),h=t(2543),w=t(2460),k=t(8412),O=["className","variant","icon","message","onDismiss","action"];function j(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function _(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){x(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}function x(n,r,t){var e;return(r="symbol"==typeof(e=function(n,r){if("object"!=typeof n||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,r||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(n)}(r,"string"))?e:String(e))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function S(n,r){if(null==n)return{};var t,e,o=function(n,r){if(null==n)return{};var t,e,o={},i=Object.keys(n);for(e=0;e<i.length;e++)t=i[e],r.indexOf(t)>=0||(o[t]=n[t]);return o}(n,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(e=0;e<i.length;e++)t=i[e],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var P=n=>{var{className:r,variant:t,icon:i,message:a,onDismiss:s,action:l}=n,c=S(n,O),d=(0,w.cF)({dismiss:"Dropin.InlineAlert.dismissLabel"});return(0,k.YH)("div",_(_({},c),{},{className:(0,e.i)([r,"dropin-alert-banner","dropin-alert-banner--".concat(t)]),children:[(0,k.YH)("div",{className:"dropin-alert-banner__content",children:[i&&(0,k.im)(o.o,{node:i,"aria-hidden":"true",className:"dropin-alert-banner__icon"}),(0,k.im)(o.o,{node:a,className:(0,e.i)(["dropin-alert-banner__message"])})]}),(0,k.YH)("div",{className:"dropin-alert-banner__actions",children:[l&&(0,k.im)(g.q,{variant:"tertiary",className:"dropin-alert-banner__action",onClick:l.onClick,"aria-label":l.label,children:l.label}),(0,k.im)(g.q,{icon:(0,k.im)(y.G,{source:h.default,size:"24",stroke:"2"}),className:"dropin-alert-banner__dismiss-button",variant:"primary",onClick:s,"aria-label":d.dismiss})]})]}))}},492:(n,r,t)=>{t.d(r,{q:()=>j});var e=t(4944),o=t(1044),i=t(5536),a=t.n(i),s=t(7008),l=t.n(s),c=t(1496),d=t.n(c),p=t(9356),b=t.n(p),u=t(9904),v=t.n(u),f=t(8236),m={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.22.0"},styleTagTransform:function(n,r){window._loadedStyles=window._loadedStyles??{};const t=n?.match(/^\.dropin-(\w+)/)?.[1],e=r.getAttribute("data-sdk"),o=t?`sdk/${t}`:r.getAttribute("data-dropin");r.setAttribute("data-dropin",o),r.removeAttribute("data-sdk");const i=window._loadedStyles[o];if(i){const o=function(n,r){const[t,e]=n.split("-"),[o,i]=r.split("-"),a=[...t.split("."),e],s=[...o.split("."),i],l=parseInt(a[0],10),c=parseInt(s[0],10);if(l!==c)return l>c?n:r;const d=parseInt(a[1],10),p=parseInt(s[1],10);if(d!==p)return d>p?n:r;const b=parseInt(a[2],10),u=parseInt(s[2],10);if(b!==u)return b>u?n:r;if(a[3]&&s[3]){const t=/(alpha|beta)(.*)/,e=a[3].match(t),o=s[3].match(t),i=e[1],l=o[1],c=parseInt(e[2],10),d=parseInt(o[2],10);if(i===l)return c>d?n:r;if("alpha"===i&&"beta"===l)return r;if("beta"===i&&"alpha"===l)return n}return a[3]?r:n}(e,i.sdk);if(!t||t&&o===i.sdk){const r=i.style.textContent;i.style.textContent=`${r}\n/* --- MERGED --- */\n${n}`}else t&&o!==i.sdk&&(i.style.textContent=`/* --- UPGRADED --- */\n${n}`);return void r.remove()}r.textContent=n,window._loadedStyles[o]={sdk:e,core:t,style:r};const a=document.querySelector("head"),{lastDropinStyleInjected:s,lastSDKStyleInjected:l}=window._loadedStyles;t?(l?a.insertBefore(r,l.nextSibling):a.insertBefore(r,a.firstChild),window._loadedStyles.lastSDKStyleInjected=r):(s?a.insertBefore(r,s.nextSibling):l?a.insertBefore(r,l.nextSibling):a.insertBefore(r,a.firstChild),window._loadedStyles.lastDropinStyleInjected=r)}};m.setAttributes=b(),m.insert=d().bind(null,"head"),m.domAPI=l(),m.insertStyleElement=v();a()(f.c,m);f.c&&f.c.locals&&f.c.locals;var g=t(8412),y=["value","variant","size","icon","className","children","disabled","active","activeChildren","activeIcon","href"];function h(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function w(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){k(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}function k(n,r,t){var e;return(r="symbol"==typeof(e=function(n,r){if("object"!=typeof n||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,r||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(n)}(r,"string"))?e:String(e))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function O(n,r){if(null==n)return{};var t,e,o=function(n,r){if(null==n)return{};var t,e,o={},i=Object.keys(n);for(e=0;e<i.length;e++)t=i[e],r.indexOf(t)>=0||(o[t]=n[t]);return o}(n,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(e=0;e<i.length;e++)t=i[e],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var j=n=>{var{value:r,variant:t="primary",size:i="medium",icon:a,className:s,children:l,disabled:c=!1,active:d=!1,activeChildren:p,activeIcon:b,href:u}=n,v=O(n,y),f="dropin-button";(a&&!l||a&&d&&!p||!a&&d&&b)&&(f="dropin-iconButton"),d&&p&&(f="dropin-button"),s=(0,e.i)([f,"".concat(f,"--").concat(i),"".concat(f,"--").concat(t),["".concat(f,"--").concat(t,"--disabled"),c],l&&a&&"".concat(f,"--with-icon"),!l&&p&&a&&"".concat(f,"--with-icon"),d&&b&&"".concat(f,"--with-icon"),s]);var m=(0,e.i)(["dropin-button-icon","dropin-button-icon--".concat(t),["dropin-button-icon--".concat(t,"--disabled"),c],null==a?void 0:a.props.className]),h=u?w(w({node:(0,g.im)("a",{}),role:"link",href:u},v),{},{disabled:c,active:d}):w(w({node:(0,g.im)("button",{}),role:"button"},v),{},{value:r,disabled:c,active:d});return(0,g.YH)(o.o,w(w({},h),{},{className:s,children:[a&&!d&&(0,g.im)(o.o,{node:a,className:m}),b&&d&&(0,g.im)(o.o,{node:b,className:m}),l&&!d&&("string"==typeof l?(0,g.im)("span",{children:l}):l),d&&p&&("string"==typeof p?(0,g.im)("span",{children:p}):p)]}))}},3720:(n,r,t)=>{t.d(r,{G:()=>_});var e=t(4944),o=t(2796),i=t(5536),a=t.n(i),s=t(7008),l=t.n(s),c=t(1496),d=t.n(c),p=t(9356),b=t.n(p),u=t(9904),v=t.n(u),f=t(4480),m={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.22.0"},styleTagTransform:function(n,r){window._loadedStyles=window._loadedStyles??{};const t=n?.match(/^\.dropin-(\w+)/)?.[1],e=r.getAttribute("data-sdk"),o=t?`sdk/${t}`:r.getAttribute("data-dropin");r.setAttribute("data-dropin",o),r.removeAttribute("data-sdk");const i=window._loadedStyles[o];if(i){const o=function(n,r){const[t,e]=n.split("-"),[o,i]=r.split("-"),a=[...t.split("."),e],s=[...o.split("."),i],l=parseInt(a[0],10),c=parseInt(s[0],10);if(l!==c)return l>c?n:r;const d=parseInt(a[1],10),p=parseInt(s[1],10);if(d!==p)return d>p?n:r;const b=parseInt(a[2],10),u=parseInt(s[2],10);if(b!==u)return b>u?n:r;if(a[3]&&s[3]){const t=/(alpha|beta)(.*)/,e=a[3].match(t),o=s[3].match(t),i=e[1],l=o[1],c=parseInt(e[2],10),d=parseInt(o[2],10);if(i===l)return c>d?n:r;if("alpha"===i&&"beta"===l)return r;if("beta"===i&&"alpha"===l)return n}return a[3]?r:n}(e,i.sdk);if(!t||t&&o===i.sdk){const r=i.style.textContent;i.style.textContent=`${r}\n/* --- MERGED --- */\n${n}`}else t&&o!==i.sdk&&(i.style.textContent=`/* --- UPGRADED --- */\n${n}`);return void r.remove()}r.textContent=n,window._loadedStyles[o]={sdk:e,core:t,style:r};const a=document.querySelector("head"),{lastDropinStyleInjected:s,lastSDKStyleInjected:l}=window._loadedStyles;t?(l?a.insertBefore(r,l.nextSibling):a.insertBefore(r,a.firstChild),window._loadedStyles.lastSDKStyleInjected=r):(s?a.insertBefore(r,s.nextSibling):l?a.insertBefore(r,l.nextSibling):a.insertBefore(r,a.firstChild),window._loadedStyles.lastDropinStyleInjected=r)}};m.setAttributes=b(),m.insert=d().bind(null,"head"),m.domAPI=l(),m.insertStyleElement=v();a()(f.c,m);f.c&&f.c.locals&&f.c.locals;var g=t(8412),y=["source","size","stroke","viewBox","className"];function h(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function w(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){k(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}function k(n,r,t){var e;return(r="symbol"==typeof(e=function(n,r){if("object"!=typeof n||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,r||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(n)}(r,"string"))?e:String(e))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function O(n,r){if(null==n)return{};var t,e,o=function(n,r){if(null==n)return{};var t,e,o={},i=Object.keys(n);for(e=0;e<i.length;e++)t=i[e],r.indexOf(t)>=0||(o[t]=n[t]);return o}(n,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(e=0;e<i.length;e++)t=i[e],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var j={Add:(0,o.Wk)((()=>t.e(1600).then(t.bind(t,1600)))),Bulk:(0,o.Wk)((()=>t.e(3180).then(t.bind(t,3180)))),Burger:(0,o.Wk)((()=>t.e(3728).then(t.bind(t,3728)))),Cart:(0,o.Wk)((()=>t.e(5008).then(t.bind(t,5008)))),Check:(0,o.Wk)((()=>t.e(9772).then(t.bind(t,9772)))),ChevronDown:(0,o.Wk)((()=>t.e(1680).then(t.bind(t,1680)))),ChevronUp:(0,o.Wk)((()=>t.e(844).then(t.bind(t,844)))),ChevronRight:(0,o.Wk)((()=>t.e(8824).then(t.bind(t,8824)))),Close:(0,o.Wk)((()=>t.e(2543).then(t.bind(t,2543)))),Heart:(0,o.Wk)((()=>t.e(9176).then(t.bind(t,9176)))),Minus:(0,o.Wk)((()=>t.e(1268).then(t.bind(t,1268)))),Placeholder:(0,o.Wk)((()=>t.e(8868).then(t.bind(t,8868)))),PlaceholderFilled:(0,o.Wk)((()=>t.e(5488).then(t.bind(t,5488)))),Search:(0,o.Wk)((()=>t.e(3764).then(t.bind(t,3764)))),SearchFilled:(0,o.Wk)((()=>t.e(6820).then(t.bind(t,6820)))),Sort:(0,o.Wk)((()=>t.e(3832).then(t.bind(t,3832)))),Star:(0,o.Wk)((()=>t.e(3836).then(t.bind(t,3836)))),View:(0,o.Wk)((()=>t.e(7524).then(t.bind(t,7524)))),User:(0,o.Wk)((()=>t.e(3996).then(t.bind(t,3996)))),Warning:(0,o.Wk)((()=>t.e(4004).then(t.bind(t,4004)))),Locker:(0,o.Wk)((()=>t.e(2388).then(t.bind(t,2388)))),Wallet:(0,o.Wk)((()=>t.e(8220).then(t.bind(t,8220)))),Card:(0,o.Wk)((()=>t.e(664).then(t.bind(t,664)))),Order:(0,o.Wk)((()=>t.e(3916).then(t.bind(t,3916)))),Delivery:(0,o.Wk)((()=>t.e(7566).then(t.bind(t,2328)))),OrderError:(0,o.Wk)((()=>t.e(984).then(t.bind(t,984)))),OrderSuccess:(0,o.Wk)((()=>t.e(2920).then(t.bind(t,2920)))),PaymentError:(0,o.Wk)((()=>t.e(9940).then(t.bind(t,9940)))),CheckWithCircle:(0,o.Wk)((()=>t.e(1604).then(t.bind(t,1604)))),WarningWithCircle:(0,o.Wk)((()=>t.e(4424).then(t.bind(t,4424)))),WarningFilled:(0,o.Wk)((()=>t.e(1176).then(t.bind(t,1176)))),InfoFilled:(0,o.Wk)((()=>t.e(6484).then(t.bind(t,6484)))),HeartFilled:(0,o.Wk)((()=>t.e(488).then(t.bind(t,488)))),Trash:(0,o.Wk)((()=>t.e(5476).then(t.bind(t,5476))))};function _(n){var{source:r,size:t="24",stroke:i="2",viewBox:a="0 0 24 24",className:s}=n,l=O(n,y),c="string"==typeof r?j[r]:null,d={className:(0,e.i)(["dropin-icon","dropin-icon--shape-stroke-".concat(i),s]),width:t,height:t,viewBox:a};return(0,g.im)(o.G0,{fallback:null,children:c?(0,g.im)(c,w(w({},l),d)):(0,g.im)(r,w(w({},l),d))})}},1044:(n,r,t)=>{t.d(r,{o:()=>d});var e=t(4944),o=t(8412),i=["node"];function a(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function s(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}function l(n,r,t){var e;return(r="symbol"==typeof(e=function(n,r){if("object"!=typeof n||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,r||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(n)}(r,"string"))?e:String(e))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function c(n,r){if(null==n)return{};var t,e,o=function(n,r){if(null==n)return{};var t,e,o={},i=Object.keys(n);for(e=0;e<i.length;e++)t=i[e],r.indexOf(t)>=0||(o[t]=n[t]);return o}(n,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(e=0;e<i.length;e++)t=i[e],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function d(n){var{node:r}=n,t=c(n,i);return r?Array.isArray(r)?(0,o.im)(o.ae,{children:r.map(((n,r)=>(0,o.im)(d,s({node:n,className:t.className},t),r)))}):(t.className=(0,e.i)([r.props.className,t.className]),(0,o.im)(r.type,s(s({ref:r.ref},r.props),t),r.key)):null}},9892:(n,r,t)=>{t.d(r,{_:()=>u});var e=t(2796),o=t(2460),i=t(8122),a=t(5508),s=t(3720),l=t(1176),c=t(8412);function d(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function p(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){b(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}function b(n,r,t){var e;return(r="symbol"==typeof(e=function(n,r){if("object"!=typeof n||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,r||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(n)}(r,"string"))?e:String(e))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}var u=n=>{var[r,t]=(0,e.oT)(!1);(0,e.YB)((()=>{var n=i.events.on("error",(n=>{"checkout"===(null==n?void 0:n.source)&&"network"===(null==n?void 0:n.type)&&t(!0)}));return()=>{null==n||n.off()}}),[]);var d=(0,o.cF)({message:"Checkout.ErrorBanner.genericMessage",label:"Checkout.ErrorBanner.dismissLabel"});return r?(0,c.im)(a._,p(p({},n),{},{"data-testid":"error-banner",icon:(0,c.im)(s.G,{source:l.default}),message:(0,c.im)("span",{children:d.message}),onDismiss:()=>{t(!1)},variant:"warning"})):null}},6236:(n,r,t)=>{t.d(r,{_:()=>e._,c:()=>e._});var e=t(9892)},9308:(n,r,t)=>{t.d(r,{c:()=>s});var e=t(6008),o=t.n(e),i=t(2076),a=t.n(i)()(o());a.push([n.id,".dropin-alert-banner{\n  background-color:var(--color-alert-800);\n  color:var(--color-neutral-50);\n  font:var(--type-body-2-strong-font);\n  letter-spacing:var(--type-body-2-strong-letter-spacing);\n  padding:var(--spacing-small);\n  display:grid;\n  grid-template-columns:1fr max-content;\n  align-items:center;\n  gap:var(--spacing-small);\n}\n\n.dropin-alert-banner__actions,\n.dropin-alert-banner__content{\n  align-items:center;\n  display:grid;\n  grid-template-columns:max-content max-content;\n}\n.dropin-alert-banner--neutral{\n  background-color:var(--color-neutral-700);\n}\n\n.dropin-alert-banner--neutral button.dropin-alert-banner__dismiss-button{\n  background-color:var(--color-neutral-700);\n}\n.dropin-alert-banner--neutral button.dropin-alert-banner__dismiss-button:hover,\n.dropin-alert-banner--neutral button.dropin-alert-banner__dismiss-button:focus,\n.dropin-alert-banner--neutral\n  button.dropin-alert-banner__dismiss-button:focus:hover,\n.dropin-alert-banner--neutral\n  button.dropin-alert-banner__dismiss-button:active{\n  background-color:var(--color-neutral-500);\n}\n.dropin-alert-banner--brand{\n  background-color:var(--color-brand-500);\n}\n\n.dropin-alert-banner--brand button.dropin-alert-banner__dismiss-button{\n  background-color:var(--color-brand-500);\n}\n.dropin-alert-banner--brand button.dropin-alert-banner__dismiss-button:hover,\n.dropin-alert-banner--brand button.dropin-alert-banner__dismiss-button:focus,\n.dropin-alert-banner--brand\n  button.dropin-alert-banner__dismiss-button:focus:hover,\n.dropin-alert-banner--brand button.dropin-alert-banner__dismiss-button:active{\n  background-color:var(--color-brand-700);\n}\n.dropin-alert-banner--success{\n  background-color:var(--color-positive-800);\n}\n\n.dropin-alert-banner--success button.dropin-alert-banner__dismiss-button{\n  background-color:var(--color-positive-800);\n}\n.dropin-alert-banner--success button.dropin-alert-banner__dismiss-button:hover,\n.dropin-alert-banner--success button.dropin-alert-banner__dismiss-button:focus,\n.dropin-alert-banner--success\n  button.dropin-alert-banner__dismiss-button:focus:hover,\n.dropin-alert-banner--success\n  button.dropin-alert-banner__dismiss-button:active{\n  background-color:var(--color-positive-500);\n}\n.dropin-alert-banner--warning{\n  background-color:var(--color-alert-800);\n}\n\n.dropin-alert-banner--warning button.dropin-alert-banner__dismiss-button{\n  background-color:var(--color-alert-800);\n}\n.dropin-alert-banner--warning button.dropin-alert-banner__dismiss-button:hover,\n.dropin-alert-banner--warning button.dropin-alert-banner__dismiss-button:focus,\n.dropin-alert-banner--warning\n  button.dropin-alert-banner__dismiss-button:focus:hover,\n.dropin-alert-banner--warning\n  button.dropin-alert-banner__dismiss-button:active{\n  background-color:var(--color-alert-500);\n}\n\n.dropin-alert-banner__icon{\n  flex-shrink:0;\n  color:var(--color-neutral-50);\n  margin-right:var(--spacing-small);\n}\n\nbutton.dropin-alert-banner__dismiss-button{\n  margin-left:auto;\n  color:var(--color-neutral-50);\n  height:24px;\n  min-height:24px;\n  width:24px;\n  min-width:24px;\n  padding:0;\n}\n\nbutton.dropin-alert-banner__action{\n  color:var(--color-neutral-50);\n  font:var(--type-body-2-strong-font);\n  letter-spacing:var(--type-body-2-strong-letter-spacing);\n  padding:0;\n  margin-right:var(--spacing-xxsmall);\n}\n@media only screen and (width >= 400px) and (width < 768px){\n  .dropin-alert-banner__actions,\n  .dropin-alert-banner__content{\n    grid-template-columns:auto auto;\n    word-break:break-word;\n    word-wrap:break-word;\n  }\n\n  .dropin-alert-banner__message{\n    word-break:break-word;\n    word-wrap:break-word;\n  }\n}\n",""]);const s=a},8236:(n,r,t)=>{t.d(r,{c:()=>s});var e=t(6008),o=t.n(e),i=t(2076),a=t.n(i)()(o());a.push([n.id,".dropin-button,\n.dropin-iconButton{\n  border:0 none;\n  cursor:pointer;\n  white-space:normal;\n}\n\n.dropin-button{\n  border-radius:var(--shape-border-radius-3);\n  font-size:var(--type-button-1-font);\n  font-weight:var(--type-button-1-font);\n  padding:var(--spacing-xsmall) var(--spacing-medium);\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  text-align:left;\n  word-wrap:break-word;\n}\n\n.dropin-iconButton{\n  height:var(--spacing-xbig);\n  width:var(--spacing-xbig);\n  padding:var(--spacing-xsmall);\n}\n\n.dropin-button:disabled,\n.dropin-iconButton:disabled{\n  pointer-events:none;\n  user-select:none;\n}\n\n.dropin-button:not(:disabled),\n.dropin-iconButton:not(:disabled){\n  cursor:pointer;\n}\n\n.dropin-button:focus,\n.dropin-iconButton:focus{\n  outline:none;\n}\n\n.dropin-button:focus-visible,\n.dropin-iconButton:focus-visible{\n  outline:var(--spacing-xxsmall) solid var(--color-button-focus);\n}\n.dropin-button--primary,\na.dropin-button--primary,\n.dropin-iconButton--primary{\n  border:none;\n  background:var(--color-brand-500) 0 0% no-repeat padding-box;\n  color:var(--color-neutral-50);\n  text-align:left;\n  margin-right:0;\n}\n\n.dropin-iconButton--primary{\n  border-radius:var(--spacing-xbig);\n  min-height:var(--spacing-xbig);\n  min-width:var(--spacing-xbig);\n  padding:var(--spacing-xsmall);\n}\n\n.dropin-button--primary--disabled,\na.dropin-button--primary--disabled,\n.dropin-iconButton--primary--disabled{\n  background:var(--color-neutral-300) 0 0% no-repeat padding-box;\n  color:var(--color-neutral-500);\n  fill:var(--color-neutral-300);\n  pointer-events:none;\n  user-select:none;\n}\n\n.dropin-button--primary:hover,\na.dropin-button--primary:hover,\n.dropin-iconButton--primary:hover,\n.dropin-button--primary:focus:hover,\n.dropin-iconButton--primary:focus:hover{\n  background-color:var(--color-button-hover);\n  text-decoration:none;\n}\n\n.dropin-button--primary:focus,\n.dropin-iconButton--primary:focus{\n  background-color:var(--color-brand-500);\n}\n\n.dropin-button--primary:hover:active,\n.dropin-iconButton--primary:hover:active{\n  background-color:var(--color-button-active);\n}\n.dropin-button--secondary,\na.dropin-button--secondary,\n.dropin-iconButton--secondary{\n  border:var(--shape-border-width-2) solid var(--color-brand-500);\n  background:none 0 0% no-repeat padding-box;\n  color:var(--color-brand-500);\n  padding-top:calc(var(--spacing-xsmall) - var(--shape-border-width-2));\n  padding-left:calc(var(--spacing-medium) - var(--shape-border-width-2));\n}\n\n.dropin-iconButton--secondary{\n  border-radius:var(--spacing-xbig);\n  min-height:var(--spacing-xbig);\n  min-width:var(--spacing-xbig);\n  padding:var(--spacing-xsmall);\n  padding-top:calc(var(--spacing-xsmall) - var(--shape-border-width-2));\n  padding-left:calc(var(--spacing-xsmall) - var(--shape-border-width-2));\n}\n\n.dropin-button--secondary--disabled,\na.dropin-button--secondary--disabled,\n.dropin-iconButton--secondary--disabled{\n  border:var(--shape-border-width-2) solid var(--color-neutral-300);\n  background:none 0 0% no-repeat padding-box;\n  color:var(--color-neutral-500);\n  fill:var(--color-neutral-300);\n  pointer-events:none;\n  user-select:none;\n}\n\n.dropin-button--secondary:hover,\na.dropin-button--secondary:hover,\n.dropin-iconButton--secondary:hover{\n  border:var(--shape-border-width-2) solid var(--color-button-hover);\n  color:var(--color-button-hover);\n  text-decoration:none;\n}\n\n.dropin-button--secondary:active,\n.dropin-iconButton--secondary:active{\n  border:var(--shape-border-width-2) solid var(--color-button-active);\n  color:var(--color-button-active);\n}\n.dropin-button--tertiary,\na.dropin-button--tertiary,\n.dropin-iconButton--tertiary{\n  border:none;\n  background:none 0 0% no-repeat padding-box;\n  color:var(--color-brand-500);\n}\n\n.dropin-iconButton--tertiary{\n  border:none;\n  border-radius:var(--spacing-xbig);\n  min-height:var(--spacing-xbig);\n  min-width:var(--spacing-xbig);\n  padding:var(--spacing-xsmall);\n}\n\n.dropin-button--tertiary--disabled,\na.dropin-button--tertiary--disabled,\n.dropin-iconButton--tertiary--disabled{\n  border:none;\n  color:var(--color-neutral-500);\n  pointer-events:none;\n  user-select:none;\n}\n\n.dropin-button--tertiary:hover,\na.dropin-button--tertiary:hover,\n.dropin-iconButton--tertiary:hover{\n  color:var(--color-button-hover);\n  text-decoration:none;\n}\n\n.dropin-button--tertiary:active,\n.dropin-iconButton--tertiary:active{\n  color:var(--color-button-active);\n}\n\n.dropin-button--tertiary:focus-visible,\n.dropin-iconButton--tertiary:focus-visible{\n  -webkit-box-shadow:inset 0 0 0 2px var(--color-neutral-800);\n  -moz-box-shadow:inset 0 0 0 2px var(--color-neutral-800);\n  box-shadow:inset 0 0 0 2px var(--color-neutral-800);\n}\n.dropin-button--large{\n  font:var(--type-button-1-font);\n  letter-spacing:var(--type-button-1-letter-spacing);\n}\n\n.dropin-button--medium{\n  font:var(--type-button-2-font);\n  letter-spacing:var(--type-button-2-letter-spacing);\n}\n\n.dropin-button-icon{\n  height:24px;\n}\n.dropin-button--with-icon{\n  column-gap:var(--spacing-xsmall);\n  row-gap:var(--spacing-xsmall);\n}\n",""]);const s=a},4480:(n,r,t)=>{t.d(r,{c:()=>s});var e=t(6008),o=t.n(e),i=t(2076),a=t.n(i)()(o());a.push([n.id,".dropin-icon{\n}\n\n.dropin-icon--shape-stroke-1{\n  stroke-width:var(--shape-icon-stroke-1);\n}\n\n.dropin-icon--shape-stroke-2{\n  stroke-width:var(--shape-icon-stroke-2);\n}\n\n.dropin-icon--shape-stroke-3{\n  stroke-width:var(--shape-icon-stroke-3);\n}\n\n.dropin-icon--shape-stroke-4{\n  stroke-width:var(--shape-icon-stroke-4);\n}\n",""]);const s=a},8122:(r,t,e)=>{r.exports=(n=>{var r={};return e.d(r,n),r})({events:()=>n.events})}};import r from"../runtime.js";import*as t from"../8412.js";r.C(t);import*as e from"../2892.js";r.C(e);import*as o from"./ErrorBanner.js";r.C(o);var i,a=(i=6236,r(r.s=i)),s=a._,l=a.c;export{s as ErrorBanner,l as default};