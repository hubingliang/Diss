(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03c858b0"],{"0412":function(t,e,s){"use strict";var a=s("f468"),n=s.n(a);n.a},"0ad6":function(t,e,s){},"3ab1":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"room"},[s("TopBar",[s("template",{slot:"back"},[s("router-link",{attrs:{to:"/diss"}},[s("section",{staticClass:"back"},[s("svg",{staticClass:"icon backIcon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-back"}})]),s("span",[t._v("Diss")])])])],1),s("template",{slot:"friend"},[s("section",{staticClass:"friend"},[t._v(t._s(this.$route.query.friend))])]),s("template",{slot:"control"},[s("section",{staticClass:"control"})])],2),s("section",{staticClass:"chat"},[s("Message",{attrs:{messageList:t.messageList}})],1),s("section",{staticClass:"inputBox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text",id:"input"},domProps:{value:t.message},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.sendMessage(e):null},input:function(e){e.target.composing||(t.message=e.target.value)}}})])],1)},n=[],i=s("d4ec"),c=s("bee2"),o=s("99de"),r=s("7e84"),u=s("262e"),l=(s("cadf"),s("551c"),s("097d"),s("9ab4")),f=s("60a3"),p=s("4fe3"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",t._l(this.$store.state.messageList,function(e,n){return a("section",{key:n,staticClass:"messageBox"},[e.from===t.userId?a("div",{staticClass:"message own"},[a("p",[t._v(t._s(e.text))]),a("img",{staticClass:"avatar",attrs:{src:s("cf05"),alt:""}})]):a("div",{staticClass:"message friend"},[a("img",{staticClass:"avatar",attrs:{src:s("cf05"),alt:""}}),a("p",[t._v(t._s(e.text))])])])}))},b=[],v=function(t){function e(){return Object(i["a"])(this,e),Object(o["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(c["a"])(e,[{key:"userId",get:function(){return this.$store.state.user.id}}]),e}(f["c"]);v=l["a"]([f["a"]],v);var g=v,m=g,h=(s("f8d1"),s("2877")),_=Object(h["a"])(m,d,b,!1,null,"757d60b6",null);_.options.__file="Message.vue";var j=_.exports,O=s("b043"),k=s("be83"),y=(k.TypedMessagesPlugin,k.ImageMessage,function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.message="",t.messageList=[],t.conversation={},t}return Object(u["a"])(e,t),Object(c["a"])(e,[{key:"init",value:function(){var t=this;this.$store.state.user.getConversation(this.$route.query.conversationID).then(function(e){t.conversation=e}).catch(console.error.bind(console)),this.$store.state.user.on(p["Event"].MESSAGE,function(e,s){console.log(e),t.$store.commit("initMessageList",e)})}},{key:"sendMessage",value:function(){var t=this;this.conversation.send(new p["TextMessage"]("".concat(this.message))).then(function(e){t.$store.commit("initMessageList",e),t.message="",console.log("BrownHu & Jerry","发送成功！")})}},{key:"created",value:function(){this.init()}}]),e}(f["c"]));l["a"]([Object(f["b"])()],y.prototype,"init",null),l["a"]([Object(f["b"])()],y.prototype,"sendMessage",null),y=l["a"]([Object(f["a"])({components:{Message:j,TopBar:O["a"]}})],y);var C=y,x=C,M=(s("0412"),Object(h["a"])(x,a,n,!1,null,"511f9ead",null));M.options.__file="Room.vue";e["default"]=M.exports},"6c9a":function(t,e,s){},b043:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"topBar"},[t._t("back"),t._t("friend"),t._t("control")],2)},n=[],i=s("d4ec"),c=s("99de"),o=s("7e84"),r=s("262e"),u=s("9ab4"),l=s("60a3"),f=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(r["a"])(e,t),e}(l["c"]);f=u["a"]([l["a"]],f);var p=f,d=p,b=(s("d119"),s("2877")),v=Object(b["a"])(d,a,n,!1,null,null,null);v.options.__file="TopBar.vue";e["a"]=v.exports},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},d119:function(t,e,s){"use strict";var a=s("0ad6"),n=s.n(a);n.a},f468:function(t,e,s){},f8d1:function(t,e,s){"use strict";var a=s("6c9a"),n=s.n(a);n.a}}]);
//# sourceMappingURL=chunk-03c858b0.cf01e245.js.map