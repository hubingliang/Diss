(function(e){function n(n){for(var r,o,i=n[0],u=n[1],s=n[2],l=0,f=[];l<i.length;l++)o=i[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(n);while(f.length)f.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var i=t[o];0!==a[i]&&(r=!1)}r&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-460444af":"24c015c1","chunk-50a7e8a6":"f0c6f567","chunk-5ca1b9f6":"a9981bf6","chunk-609a7637":"6a7b8b72","chunk-89b8b8b2":"04cd3622","chunk-ba50becc":"2e7618aa","chunk-f85a0fc6":"de73742d","chunk-4635d671":"14b19bfc"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-50a7e8a6":1,"chunk-5ca1b9f6":1,"chunk-609a7637":1,"chunk-89b8b8b2":1,"chunk-ba50becc":1,"chunk-f85a0fc6":1,"chunk-4635d671":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-460444af":"31d6cfe0","chunk-50a7e8a6":"94de1c03","chunk-5ca1b9f6":"4b7c7b0e","chunk-609a7637":"a143193c","chunk-89b8b8b2":"04f133fb","chunk-ba50becc":"310a2b5d","chunk-f85a0fc6":"a74c84d7","chunk-4635d671":"bedc8ac6"}[e]+".css",o=u.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var i=a[c],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===r||s===o))return n()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){i=l[c],s=i.getAttribute("data-href");if(s===r||s===o)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,t(a)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise(function(n,t){r=a[e]=[n,t]});n.push(r[2]=c);var s,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(e),s=function(n){f.onerror=f.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,t[1](c)}a[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,l.appendChild(f)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/Diss/dist/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var d=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"0613":function(e,n,t){"use strict";t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=t("2f62"),a={init:function(e,n){e.AV=n.AV,e.realtime=n.realtime},initUser:function(e,n){e.user=n},initConversation:function(e,n){e.conversation=n},initMessageList:function(e,n){e.messageList.push(n)},initConversationList:function(e,n){e.conversationList.push(n)}},c=a,i={AV:{},realtime:{},user:{},conversation:{},messageList:[],conversationList:[]},u=i;r["default"].use(o["a"]);n["a"]=new o["a"].Store({state:u,mutations:c})},"5c48":function(e,n,t){},"7c55":function(e,n,t){"use strict";var r=t("5c48"),o=t.n(r);o.a},cd49:function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],c=t("d4ec"),i=t("bee2"),u=t("99de"),s=t("7e84"),l=t("262e"),f=t("9ab4"),d=t("60a3"),h=function(e){function n(){return Object(c["a"])(this,n),Object(u["a"])(this,Object(s["a"])(n).apply(this,arguments))}return Object(l["a"])(n,e),Object(i["a"])(n,[{key:"Ban",value:function(){document.body.addEventListener("touchmove",function(e){e.preventDefault()},{passive:!1})}},{key:"created",value:function(){}}]),n}(d["c"]);f["a"]([Object(d["b"])()],h.prototype,"Ban",null),h=f["a"]([d["a"]],h);var p=h,b=p,m=(t("7c55"),t("2877")),v=Object(m["a"])(b,o,a,!1,null,null,null);v.options.__file="App.vue";var g=v.exports,k=t("8c4f");r["default"].use(k["a"]);var y=new k["a"]({routes:[{path:"/",name:"Start",component:function(){return Promise.all([t.e("chunk-460444af"),t.e("chunk-ba50becc")]).then(t.bind(null,"d701"))}},{path:"/room",name:"room",component:function(){return Promise.all([t.e("chunk-460444af"),t.e("chunk-50a7e8a6")]).then(t.bind(null,"3ab1"))}},{path:"/user",name:"user",meta:{title:"user"},component:function(){return Promise.all([t.e("chunk-460444af"),t.e("chunk-89b8b8b2")]).then(t.bind(null,"dab6"))},children:[{path:"login",name:"login",meta:{title:"login"},component:function(){return t.e("chunk-4635d671").then(t.bind(null,"ac2a"))}},{path:"registered",name:"registered",meta:{title:"registered"},component:function(){return Promise.all([t.e("chunk-460444af"),t.e("chunk-609a7637")]).then(t.bind(null,"e498"))}}]},{path:"/diss",name:"diss",meta:{title:"diss"},redirect:{name:"conversation"},component:function(){return Promise.all([t.e("chunk-460444af"),t.e("chunk-5ca1b9f6")]).then(t.bind(null,"20b8"))},children:[{path:"conversation",name:"conversation",meta:{title:"conversation"},component:function(){return Promise.all([t.e("chunk-460444af"),t.e("chunk-f85a0fc6")]).then(t.bind(null,"4fb0"))}}]}]}),w=t("0613"),j=t("9483");Object(j["a"])("".concat("/Diss/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["default"].config.productionTip=!1,new r["default"]({router:y,store:w["a"],render:function(e){return e(g)}}).$mount("#app")}});
//# sourceMappingURL=app.fc23eff8.js.map