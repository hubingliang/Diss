<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import { Realtime, TextMessage, Event } from "leancloud-realtime";
@Component
export default class App extends Vue {
    user = "Jerry";

    @Emit()
    init() {
        const realtime = new Realtime({
            appId: "2Fhhh5lcxtGwBOtsXvnsw06G-gzGzoHsz",
            appKey: "tFBBgTyzjbbywyj6PwK6KGDC",
            plugins: [] // 注册富媒体消息插件 TypedMessagesPlugin
        });
        realtime.createIMClient(this.user).then(user => {
            // 成功登录
            // this.createConversation(user);
            user.on(Event.INVITED, function invitedEventHandler(
                payload: any,
                conversation: any
            ) {
                console.log(payload.invitedBy, conversation.id);
            });
            user.on(Event.MESSAGE, function(message: any, conversation: any) {
                console.log("Message received: " + message.text);
            });
        });
    }

    @Emit()
    createConversation(user: any) {
        user.createConversation({
            // 指定对话的成员除了当前用户 Tom(SDK 会默认把当前用户当做对话成员)之外，还有 Jerry
            members: ["Jerry"],
            // 对话名称
            name: "BrownHu & Jerry"
        }).then((conversation: any) => {
            conversation
                .send(new TextMessage("Jerry，起床了！"))
                .then((message: any) => {
                    console.log("BrownHu & Jerry", "发送成功！");
                });
        });
    }

    created() {
        this.init();
    }
}
</script>


<style lang="less">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
