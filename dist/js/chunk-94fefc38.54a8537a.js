(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94fefc38"],{"0ad6":function(t,e,s){},"3ab1":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"room"},[s("TopBar",[s("template",{slot:"back"},[s("section",{staticClass:"back",on:{click:function(e){t.routerTo("/diss","Diss")}}},[s("svg",{staticClass:"icon backIcon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-back"}})]),s("span",[t._v("Diss")])])]),s("template",{slot:"topBarName"},[s("section",{staticClass:"friend"},[t._v(t._s(this.$route.query.friend))])]),s("template",{slot:"control"},[s("section",{staticClass:"control"})])],2),s("section",{staticClass:"chat",attrs:{id:"chat"}},[s("Message")],1),s("section",{staticClass:"inputBox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text",id:"input"},domProps:{value:t.message},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.sendMessage(e):null},input:function(e){e.target.composing||(t.message=e.target.value)}}})])],1)},n=[],o=s("d4ec"),r=s("bee2"),i=s("99de"),c=s("7e84"),u=s("262e"),l=(s("cadf"),s("551c"),s("097d"),s("9ab4")),p=s("60a3"),v=s("4fe3"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",t._l(this.$store.state.messageList,function(e,a){return s("section",{key:a,staticClass:"messageBox"},[e.from===t.userId?s("div",{staticClass:"message own"},[s("p",[t._v(t._s(e.text))]),s("img",{staticClass:"avatar",attrs:{alt:"",src:t.ownAvatar}})]):s("div",{staticClass:"message friend"},[s("img",{staticClass:"avatar",attrs:{src:t.friendAvatar,alt:""}}),s("p",[t._v(t._s(e.text))])])])}))},d=[],b=function(t){function e(){return Object(o["a"])(this,e),Object(i["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"userId",get:function(){return this.$store.state.user.id}},{key:"ownAvatar",get:function(){return this.$store.state.avUser.attributes.avatar.attributes.url}},{key:"friendAvatar",get:function(){return this.$store.state.conversation.friend.avatar}}]),e}(p["c"]);b=l["a"]([p["a"]],b);var m=b,h=m,g=(s("eb30"),s("2877")),y=Object(g["a"])(h,f,d,!1,null,"71b2cd42",null);y.options.__file="Message.vue";var k=y.exports,_=s("b043"),j=s("be83"),O=(j.TypedMessagesPlugin,j.ImageMessage,function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(i["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.message="",t.conversation={},t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"init",value:function(){var t=this;this.$store.state.conversation.queryMessages({limit:100}).then(function(e){t.$store.commit("initMessageList",e)}).catch(console.error.bind(console)),this.$store.state.user.on(v["Event"].MESSAGE,function(e,s){t.$store.commit("addMessageList",e),t.resetScroll()})}},{key:"sendMessage",value:function(){var t=this;this.$store.state.conversation.send(new v["TextMessage"]("".concat(this.message))).then(function(e){t.$store.commit("addMessageList",e),t.resetScroll(),t.message="",console.log("BrownHu & Jerry","发送成功！")})}},{key:"resetScroll",value:function(){var t=document.querySelector("#chat");t.scrollTop=t.scrollHeight}},{key:"routerTo",value:function(t,e){this.$router.push({path:"".concat(t),query:{topBarName:"".concat(e)}})}},{key:"created",value:function(){this.init()}},{key:"mounted",value:function(){this.resetScroll()}}]),e}(p["c"]));l["a"]([Object(p["b"])()],O.prototype,"init",null),l["a"]([Object(p["b"])()],O.prototype,"sendMessage",null),l["a"]([Object(p["b"])()],O.prototype,"resetScroll",null),l["a"]([Object(p["b"])()],O.prototype,"routerTo",null),O=l["a"]([Object(p["a"])({components:{Message:k,TopBar:_["a"]}})],O);var C=O,$=C,M=(s("6d3a"),Object(g["a"])($,a,n,!1,null,"654205e3",null));M.options.__file="Room.vue";e["default"]=M.exports},"6d3a":function(t,e,s){"use strict";var a=s("ae0a"),n=s.n(a);n.a},a378:function(t,e,s){},ae0a:function(t,e,s){},b043:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"topBar"},[s("section",{staticClass:"back"},[t._t("back")],2),s("section",{staticClass:"topBarName"},[t._v("\n        "+t._s(this.$route.query.topBarName)+"\n    ")]),s("div",{staticClass:"control"},[t._t("control")],2)])},n=[],o=s("d4ec"),r=s("99de"),i=s("7e84"),c=s("262e"),u=s("9ab4"),l=s("60a3"),p=function(t){function e(){return Object(o["a"])(this,e),Object(r["a"])(this,Object(i["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(l["c"]);p=u["a"]([l["a"]],p);var v=p,f=v,d=(s("d119"),s("2877")),b=Object(d["a"])(f,a,n,!1,null,null,null);b.options.__file="TopBar.vue";e["a"]=b.exports},d119:function(t,e,s){"use strict";var a=s("0ad6"),n=s.n(a);n.a},eb30:function(t,e,s){"use strict";var a=s("a378"),n=s.n(a);n.a}}]);
//# sourceMappingURL=chunk-94fefc38.54a8537a.js.map