var r=Object.defineProperty;var c=(s,t,e)=>t in s?r(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var i=(s,t,e)=>(c(s,typeof t!="symbol"?t+"":t,e),e);class f{constructor({init:t,listeners:e}){i(this,"_listeners",[]);i(this,"listeners");i(this,"init");i(this,"config",new h({}));this.listeners=n=>(this._listeners.forEach(a=>a.off()),this._listeners=e(n)),this.init=n=>{const{imageParamsKeyMap:a,...g}=n;return this.config.setConfig({...this.config.getConfig(),...g}),l(a),t(n)}}}class h{constructor(t){i(this,"config");this.config=t}getConfig(){return this.config}setConfig(t){this.config=t}}class p{constructor(){i(this,"_map")}get map(){return this._map}set map(t){this._map=t}getMethods(){return{setMap:t=>{this.map=t},getMap:()=>this.map}}}const m=new p,{setMap:l,getMap:u}=m.getMethods(),o=new f({init:async s=>{const t={defaultLocale:"en-US"};o.config.setConfig({...t,...s})},listeners:()=>[]}),C=o.config;export{C as c,o as i};
//# sourceMappingURL=initialize.js.map