<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
const AV = require("leancloud-storage");
import { Realtime, TextMessage, Event } from "leancloud-realtime";
const {
    TypedMessagesPlugin,
    ImageMessage
} = require("leancloud-realtime-plugin-typed-messages");

@Component
export default class App extends Vue {
    user: string = "Brownhu";

    @Emit()
    init() {
        AV.init({
            appId: "2Fhhh5lcxtGwBOtsXvnsw06G-gzGzoHsz",
            appKey: "tFBBgTyzjbbywyj6PwK6KGDC"
        });

        // 初始化即时通讯 SDK
        var realtime = new Realtime({
            appId: "2Fhhh5lcxtGwBOtsXvnsw06G-gzGzoHsz",
            appKey: "tFBBgTyzjbbywyj6PwK6KGDC",
            plugins: [TypedMessagesPlugin] // 注册富媒体消息插件
        });

        // var imageMessage = new ImageMessage(file);

        realtime.createIMClient(this.user).then(user => {
            // 成功登录
            this.$store.commit("login", user);
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
        // this.init();
    }
}
</script>


<style lang="less">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
</style>
