(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53f04426"],{"0a49":function(t,e,n){var r=n("9b43"),i=n("626a"),o=n("4bf8"),a=n("9def"),c=n("cd1c");t.exports=function(t,e){var n=1==t,u=2==t,s=3==t,f=4==t,l=6==t,y=5==t||l,v=e||c;return function(e,c,b){for(var p,h,d=o(e),m=i(d),g=r(c,b,3),S=a(m.length),w=0,O=n?v(e,S):u?v(e,0):void 0;S>w;w++)if((y||w in m)&&(p=m[w],h=g(p,w,d),t))if(n)O[w]=h;else if(h)switch(t){case 3:return!0;case 5:return p;case 6:return w;case 2:O.push(p)}else if(f)return!1;return l?-1:s||f?f:O}}},1169:function(t,e,n){var r=n("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),o=n("6821"),a=n("6a99"),c=n("69a8"),u=n("c69a"),s=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?s:function(t,e){if(t=o(t),e=a(e,!0),u)try{return s(t,e)}catch(n){}if(c(t,e))return i(!r.f.call(t,e),t[e])}},2621:function(t,e){e.f=Object.getOwnPropertySymbols},"37c8":function(t,e,n){e.f=n("2b4c")},"3a72":function(t,e,n){var r=n("7726"),i=n("8378"),o=n("2d00"),a=n("37c8"),c=n("86cc").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:a.f(t)})}},"4fb0":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"conversation"},t._l(this.$store.state.conversationList,function(e,i){return r("div",{key:i,staticClass:"conversationBox",on:{click:function(n){t.joinRoom(e)}}},[r("img",{staticClass:"avatar",attrs:{src:n("cf05"),alt:""}}),r("section",{staticClass:"message"},[r("div",{staticClass:"name"},[t._v(t._s(e.friend))]),r("div",{staticClass:"lastMessage"},[t._v(t._s(e.lastMessage))])])])}))},i=[];function o(t){if(Array.isArray(t))return t}function a(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){i=!0,o=u}finally{try{r||null==c["return"]||c["return"]()}finally{if(i)throw o}}return n}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){return o(t)||a(t,e)||c()}n("ac4d"),n("8a81"),n("ac6a"),n("7514");var s=n("d4ec"),f=n("bee2"),l=n("99de"),y=n("7e84"),v=n("262e"),b=(n("cadf"),n("551c"),n("097d"),n("9ab4")),p=n("60a3"),h=n("6022"),d=function(t){function e(){return Object(s["a"])(this,e),Object(l["a"])(this,Object(y["a"])(e).apply(this,arguments))}return Object(v["a"])(e,t),Object(f["a"])(e,[{key:"init",value:function(){var t=this;this.$store.commit("cleanConversationList"),this.$store.state.user.getQuery().containsMembers(["".concat(this.$store.state.user.id)]).find().then(function(e){var n=!0,r=!1,i=void 0;try{for(var o,a=function(){var e=u(o.value,2),n=(e[0],e[1]),r=!0,i=!1,a=void 0;try{for(var c,s=n.members[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){var f=c.value;Object(h["a"])(f).then(function(e){e.id!==t.$store.state.user.id&&(n.friend=e.attributes.username,t.$store.commit("initConversationList",n))})}}catch(l){i=!0,a=l}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}},c=e.entries()[Symbol.iterator]();!(n=(o=c.next()).done);n=!0)a()}catch(s){r=!0,i=s}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}console.log(e)}).catch(console.error.bind(console))}},{key:"joinRoom",value:function(t){this.$router.push({path:"/room",query:{conversationID:"".concat(t.id),friend:"".concat(t.friend)}})}},{key:"created",value:function(){this.init()}}]),e}(p["c"]);b["a"]([Object(p["b"])()],d.prototype,"init",null),b["a"]([Object(p["b"])()],d.prototype,"joinRoom",null),d=b["a"]([p["a"]],d);var m=d,g=m,S=(n("589f"),n("2877")),w=Object(S["a"])(g,r,i,!1,null,"0c7dd65c",null);w.options.__file="Conversation.vue";e["default"]=w.exports},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"589f":function(t,e,n){"use strict";var r=n("b03a"),i=n.n(r);i.a},6022:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a});var r=n("0613"),i=n("5f86");function o(t){var e=new r["a"].state.AV.Query("_User");return e.get(t)}function a(){r["a"].state.AV.User.current()||i["a"].push("/user")}},"67ab":function(t,e,n){var r=n("ca5a")("meta"),i=n("d3f4"),o=n("69a8"),a=n("86cc").f,c=0,u=Object.isExtensible||function(){return!0},s=!n("79e5")(function(){return u(Object.preventExtensions({}))}),f=function(t){a(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!u(t))return"F";if(!e)return"E";f(t)}return t[r].i},y=function(t,e){if(!o(t,r)){if(!u(t))return!0;if(!e)return!1;f(t)}return t[r].w},v=function(t){return s&&b.NEED&&u(t)&&!o(t,r)&&f(t),t},b=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:y,onFreeze:v}},7514:function(t,e,n){"use strict";var r=n("5ca1"),i=n("0a49")(5),o="find",a=!0;o in[]&&Array(1)[o](function(){a=!1}),r(r.P+r.F*a,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(o)},"7bbc":function(t,e,n){var r=n("6821"),i=n("9093").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(r(t))}},"8a81":function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),o=n("9e1e"),a=n("5ca1"),c=n("2aba"),u=n("67ab").KEY,s=n("79e5"),f=n("5537"),l=n("7f20"),y=n("ca5a"),v=n("2b4c"),b=n("37c8"),p=n("3a72"),h=n("d4c0"),d=n("1169"),m=n("cb7c"),g=n("d3f4"),S=n("6821"),w=n("6a99"),O=n("4630"),L=n("2aeb"),j=n("7bbc"),P=n("11e9"),x=n("86cc"),C=n("0d58"),E=P.f,T=x.f,k=j.f,A=r.Symbol,M=r.JSON,N=M&&M.stringify,_="prototype",D=v("_hidden"),F=v("toPrimitive"),V={}.propertyIsEnumerable,I=f("symbol-registry"),$=f("symbols"),G=f("op-symbols"),R=Object[_],J="function"==typeof A,H=r.QObject,K=!H||!H[_]||!H[_].findChild,Q=o&&s(function(){return 7!=L(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(R,e);r&&delete R[e],T(t,e,n),r&&t!==R&&T(R,e,r)}:T,W=function(t){var e=$[t]=L(A[_]);return e._k=t,e},q=J&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},B=function(t,e,n){return t===R&&B(G,e,n),m(t),e=w(e,!0),m(n),i($,e)?(n.enumerable?(i(t,D)&&t[D][e]&&(t[D][e]=!1),n=L(n,{enumerable:O(0,!1)})):(i(t,D)||T(t,D,O(1,{})),t[D][e]=!0),Q(t,e,n)):T(t,e,n)},U=function(t,e){m(t);var n,r=h(e=S(e)),i=0,o=r.length;while(o>i)B(t,n=r[i++],e[n]);return t},Y=function(t,e){return void 0===e?L(t):U(L(t),e)},z=function(t){var e=V.call(this,t=w(t,!0));return!(this===R&&i($,t)&&!i(G,t))&&(!(e||!i(this,t)||!i($,t)||i(this,D)&&this[D][t])||e)},X=function(t,e){if(t=S(t),e=w(e,!0),t!==R||!i($,e)||i(G,e)){var n=E(t,e);return!n||!i($,e)||i(t,D)&&t[D][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=k(S(t)),r=[],o=0;while(n.length>o)i($,e=n[o++])||e==D||e==u||r.push(e);return r},tt=function(t){var e,n=t===R,r=k(n?G:S(t)),o=[],a=0;while(r.length>a)!i($,e=r[a++])||n&&!i(R,e)||o.push($[e]);return o};J||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=y(arguments.length>0?arguments[0]:void 0),e=function(n){this===R&&e.call(G,n),i(this,D)&&i(this[D],t)&&(this[D][t]=!1),Q(this,t,O(1,n))};return o&&K&&Q(R,t,{configurable:!0,set:e}),W(t)},c(A[_],"toString",function(){return this._k}),P.f=X,x.f=B,n("9093").f=j.f=Z,n("52a7").f=z,n("2621").f=tt,o&&!n("2d00")&&c(R,"propertyIsEnumerable",z,!0),b.f=function(t){return W(v(t))}),a(a.G+a.W+a.F*!J,{Symbol:A});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)v(et[nt++]);for(var rt=C(v.store),it=0;rt.length>it;)p(rt[it++]);a(a.S+a.F*!J,"Symbol",{for:function(t){return i(I,t+="")?I[t]:I[t]=A(t)},keyFor:function(t){if(!q(t))throw TypeError(t+" is not a symbol!");for(var e in I)if(I[e]===t)return e},useSetter:function(){K=!0},useSimple:function(){K=!1}}),a(a.S+a.F*!J,"Object",{create:Y,defineProperty:B,defineProperties:U,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),M&&a(a.S+a.F*(!J||s(function(){var t=A();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e=r[1],(g(e)||void 0!==t)&&!q(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!q(e))return e}),r[1]=e,N.apply(M,r)}}),A[_][F]||n("32e9")(A[_],F,A[_].valueOf),l(A,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},ac4d:function(t,e,n){n("3a72")("asyncIterator")},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),o=n("2aba"),a=n("7726"),c=n("32e9"),u=n("84f2"),s=n("2b4c"),f=s("iterator"),l=s("toStringTag"),y=u.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},b=i(v),p=0;p<b.length;p++){var h,d=b[p],m=v[d],g=a[d],S=g&&g.prototype;if(S&&(S[f]||c(S,f,y),S[l]||c(S,l,d),u[d]=y,m))for(h in r)S[h]||o(S,h,r[h],!0)}},b03a:function(t,e,n){},cd1c:function(t,e,n){var r=n("e853");t.exports=function(t,e){return new(r(t))(e)}},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d4c0:function(t,e,n){var r=n("0d58"),i=n("2621"),o=n("52a7");t.exports=function(t){var e=r(t),n=i.f;if(n){var a,c=n(t),u=o.f,s=0;while(c.length>s)u.call(t,a=c[s++])&&e.push(a)}return e}},e853:function(t,e,n){var r=n("d3f4"),i=n("1169"),o=n("2b4c")("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}}}]);
//# sourceMappingURL=chunk-53f04426.0cdddecf.js.map