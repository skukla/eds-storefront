export const id=8020;export const ids=[8020];export const modules={9094:(e,n,t)=>{t.d(n,{T:()=>S});var r=t(5444),o=t(4405),i=t(5292),a=t.n(i),d=t(9893),l=t.n(d),s=t(9383),c=t.n(s),p=t(8296),u=t.n(p),b=t(9088),f=t.n(b),m=t(2692),y={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.21.2"}};y.styleTagTransform=function(e,n){setTimeout((()=>{window.window._loadedStyles=window.window._loadedStyles??{};const{core:t,sdk:r}=function(e,n){const t=e?.match(/^\.dropin-(\w+)/)?.[1],r=n.getAttribute("data-sdk");return{core:t,sdk:r}}(e,n),o=t?`sdk/${t}`:n.getAttribute("data-dropin");!function(e,n){e.setAttribute("data-dropin",n),e.removeAttribute("data-sdk")}(n,o);const i=window._loadedStyles[o];i?function(e,n,t,r){const o=function(e,n){const t=e=>{const[n,t]=e.split("-"),[r,o,i]=n.split(".").map(Number),a=t?t.match(/(alpha|beta)(\d*)/):null;return{major:r,minor:o,patch:i,preType:a?a[1]:"",preNumber:a?parseInt(a[2],10):0}},r=t(e),o=t(n);if(r.major!==o.major)return r.major>o.major?e:n;if(r.minor!==o.minor)return r.minor>o.minor?e:n;if(r.patch!==o.patch)return r.patch>o.patch?e:n;if(r.preType&&o.preType)return r.preType===o.preType?r.preNumber>o.preNumber?e:n:"beta"===r.preType?n:e;return r.preType?n:e}(t,r.sdk);if(!r.core||r.core&&o===r.sdk){const n=r.style.textContent;r.style.textContent=`${n}\n/* --- MERGED --- */\n${e}`}else r.core&&o!==r.sdk&&(r.style.textContent=`/* --- UPGRADED --- */\n${e}`);n.remove()}(e,n,r,i):(function(e,n,t,r,o){n.textContent=e,window._loadedStyles[o]={sdk:r,core:t,style:n}}(e,n,t,r,o),function(e,n){const t=document.querySelector("head"),{lastDropinStyleInjected:r,lastSDKStyleInjected:o}=window._loadedStyles;n?(o?t.insertBefore(e,o.nextSibling):t.insertBefore(e,t.firstChild),window._loadedStyles.lastSDKStyleInjected=e):(r?t.insertBefore(e,r.nextSibling):o?t.insertBefore(e,o.nextSibling):t.insertBefore(e,t.firstChild),window._loadedStyles.lastDropinStyleInjected=e)}(n,t))}),0)},y.setAttributes=u(),y.insert=c().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=f();a()(m.A,y);m.A&&m.A.locals&&m.A.locals;var g=t(3213),v=t(556),h=["className","icon","heading","headingLevel","message","action","variant"];function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){j(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function j(e,n,t){var r;return(n="symbol"==typeof(r=function(e,n){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"))?r:String(r))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var S=e=>{var{className:n,icon:t,heading:i,headingLevel:a=2,message:d,action:l,variant:s="secondary"}=e,c=O(e,h),p=a>=1&&a<=6?"h".concat(a):"h2";return(0,v.Y)("div",w(w({},c),{},{className:(0,r.L)(["dropin-illustrated-message",n]),children:(0,v.FD)(g.Z,{variant:s,children:[t&&(0,v.Y)(o.a,{node:t,"aria-hidden":"true",size:"80",className:"dropin-illustrated-message__icon"}),i&&(0,v.Y)(p,{className:"dropin-illustrated-message__heading",children:i}),d&&(0,v.Y)(o.a,{node:d,className:"dropin-illustrated-message__message"}),l&&(0,v.Y)(o.a,{node:l,className:"dropin-illustrated-message__action"})]})}))}},6967:(e,n,t)=>{t.d(n,{a:()=>j});var r=t(5444),o=t(5292),i=t.n(o),a=t(9893),d=t.n(a),l=t(9383),s=t.n(l),c=t(8296),p=t.n(c),u=t(9088),b=t.n(u),f=t(618),m={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.21.2"}};m.styleTagTransform=function(e,n){setTimeout((()=>{window.window._loadedStyles=window.window._loadedStyles??{};const{core:t,sdk:r}=function(e,n){const t=e?.match(/^\.dropin-(\w+)/)?.[1],r=n.getAttribute("data-sdk");return{core:t,sdk:r}}(e,n),o=t?`sdk/${t}`:n.getAttribute("data-dropin");!function(e,n){e.setAttribute("data-dropin",n),e.removeAttribute("data-sdk")}(n,o);const i=window._loadedStyles[o];i?function(e,n,t,r){const o=function(e,n){const t=e=>{const[n,t]=e.split("-"),[r,o,i]=n.split(".").map(Number),a=t?t.match(/(alpha|beta)(\d*)/):null;return{major:r,minor:o,patch:i,preType:a?a[1]:"",preNumber:a?parseInt(a[2],10):0}},r=t(e),o=t(n);if(r.major!==o.major)return r.major>o.major?e:n;if(r.minor!==o.minor)return r.minor>o.minor?e:n;if(r.patch!==o.patch)return r.patch>o.patch?e:n;if(r.preType&&o.preType)return r.preType===o.preType?r.preNumber>o.preNumber?e:n:"beta"===r.preType?n:e;return r.preType?n:e}(t,r.sdk);if(!r.core||r.core&&o===r.sdk){const n=r.style.textContent;r.style.textContent=`${n}\n/* --- MERGED --- */\n${e}`}else r.core&&o!==r.sdk&&(r.style.textContent=`/* --- UPGRADED --- */\n${e}`);n.remove()}(e,n,r,i):(function(e,n,t,r,o){n.textContent=e,window._loadedStyles[o]={sdk:r,core:t,style:n}}(e,n,t,r,o),function(e,n){const t=document.querySelector("head"),{lastDropinStyleInjected:r,lastSDKStyleInjected:o}=window._loadedStyles;n?(o?t.insertBefore(e,o.nextSibling):t.insertBefore(e,t.firstChild),window._loadedStyles.lastSDKStyleInjected=e):(r?t.insertBefore(e,r.nextSibling):o?t.insertBefore(e,o.nextSibling):t.insertBefore(e,t.firstChild),window._loadedStyles.lastDropinStyleInjected=e)}(n,t))}),0)},m.setAttributes=p(),m.insert=s().bind(null,"head"),m.domAPI=d(),m.insertStyleElement=b();i()(f.A,m);f.A&&f.A.locals&&f.A.locals;var y=t(556),g=["name","label","value","size","checked","disabled","error","description","className","children"];function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){_(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e,n,t){var r;return(n="symbol"==typeof(r=function(e,n){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"))?r:String(r))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var j=e=>{var{name:n,label:t,value:o,size:i="medium",checked:a=!1,disabled:d=!1,error:l=!1,description:s="",className:c,children:p}=e,u=w(e,g);return(0,y.FD)("label",{className:(0,r.L)([c,"dropin-radio-button",["dropin-radio-button--error",l],["dropin-radio-button--disabled",d]]),children:[(0,y.Y)("input",h({name:n,value:o,checked:a,disabled:d,type:"radio",className:(0,r.L)(["dropin-radio-button__input",["dropin-radio-button__input--error",l],["dropin-radio-button__input--disabled",d]])},u)),(0,y.Y)("span",{className:(0,r.L)(["dropin-radio-button__label","dropin-radio-button__label--".concat(i),["dropin-radio-button__label--error",l],["dropin-radio-button__label--disabled",d]]),children:t}),(0,y.Y)("span",{className:(0,r.L)(["dropin-radio-button__description","dropin-radio-button__description--".concat(i),["dropin-radio-button__description--disabled",d]]),children:s})]})}},2692:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(8645),o=t.n(r),i=t(278),a=t.n(i)()(o());a.push([e.id,".dropin-illustrated-message{\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center;\n  text-align:center;\n  height:100%;\n  row-gap:var(--spacing-small);\n}\n\n.dropin-illustrated-message .dropin-card{\n  width:100%;\n}\n\n.dropin-illustrated-message__icon{\n  color:var(--color-neutral-400);\n  margin:0 auto var(--spacing-medium) auto;\n}\n\n.dropin-illustrated-message__heading{\n  color:var(--color-neutral-800);\n  font:var(--type-headline-2-strong-font);\n  letter-spacing:var(--type-headline-2-strong-letter-spacing);\n  margin:0;\n}\n\n.dropin-illustrated-message__message{\n  color:var(--color-neutral-800);\n  font:var(--type-body-2-default-font);\n  letter-spacing:var(--type-body-2-default-letter-spacing);\n  text-align:center;\n  margin:0;\n}\n\n.dropin-illustrated-message .dropin-illustrated-message__action{\n  justify-self:center;\n  align-self:center;\n}\n",""]);const d=a},618:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(8645),o=t.n(r),i=t(278),a=t.n(i)()(o());a.push([e.id,".dropin-radio-button{\n  display:block;\n  position:relative;\n}\n.dropin-radio-button__input{\n  position:fixed;\n  opacity:0;\n  pointer-events:none;\n  margin:0;\n}\n\n.dropin-radio-button__label{\n  color:var(--color-neutral-800);\n  position:relative;\n  display:flex;\n  flex-direction:row;\n  align-items:center;\n  cursor:pointer;\n  width:fit-content;\n}\n\n.dropin-radio-button__label:before{\n  content:' ';\n  display:inline-block;\n  position:relative;\n  width:16px;\n  height:16px;\n  border-radius:var(--shape-border-radius-3);\n  background-color:var(--color-neutral-50);\n  border:var(--shape-border-width-1) solid var(--color-neutral-600);\n  margin-right:var(--spacing-small);\n  vertical-align:middle;\n}\n\n.dropin-radio-button__label:hover::before{\n  border:var(--shape-border-width-1) solid var(--color-neutral-700);\n}\n\n.dropin-radio-button__input:checked + .dropin-radio-button__label:after{\n  content:' ';\n  display:block;\n  position:absolute;\n  width:8px;\n  height:8px;\n  border-radius:var(--shape-border-radius-3);\n  margin-left:calc(var(--spacing-xxsmall) + var(--shape-border-width-1));\n  background:var(--color-brand-500);\n  accent-color:var(--color-brand-500);\n}\n\n.dropin-radio-button__input:focus-visible + .dropin-radio-button__label:before{\n  border:var(--shape-border-width-1) solid var(--color-neutral-800);\n  box-shadow:0 0 0 var(--shape-icon-stroke-4) var(--color-neutral-400);\n}\n\n.dropin-radio-button__description{\n  clear:both;\n  color:var(--color-neutral-700);\n  margin-left:calc(var(--spacing-big) + var(--shape-border-width-3));\n  margin-top:var(--spacing-xxsmall);\n}\n\n.dropin-radio-button__description:empty{\n  display:none;\n}\n.dropin-radio-button__label--medium{\n  font:var(--type-body-2-default-font);\n  letter-spacing:var(--type-body-2-default-letter-spacing);\n}\n\n.dropin-radio-button__label--large{\n  font:var(--type-body-1-default-font);\n  letter-spacing:var(--type-body-1-default-letter-spacing);\n}\n\n.dropin-radio-button__description--medium{\n  font:var(--type-details-caption-2-font);\n  letter-spacing:var(--type-details-caption-2-letter-spacing);\n}\n\n.dropin-radio-button__description--large{\n  font:var(--type-body-2-default-font);\n  letter-spacing:var(--type-body-2-default-letter-spacing);\n}\n.dropin-radio-button__input--disabled,\n.dropin-radio-button__label--disabled,\n.dropin-radio-button__description--disabled{\n  color:var(--color-neutral-500);\n  cursor:default;\n}\ndiv.dropin-radio-button__label--disabled:before{\n  box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-500);\n  background-color:var(--color-neutral-300);\n}\n.dropin-radio-button__label--error:before{\n  box-shadow:0 0 0 var(--shape-border-width-2) var(--color-alert-500);\n  background:var(--color-neutral-50) 0 0% no-repeat padding-box;\n}\n\n.dropin-radio-button__input--error:checked\n  + .dropin-radio-button__label--error:after{\n  background:var(--color-alert-500);\n}\n",""]);const d=a}};