<template>
    <section class="room">
        <section class="topBar"></section>
        <section class="chat">

        </section>
        <section class="inputBox">
            <input type="text" @keyup.enter="sendMessage" v-model="message">
        </section>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import { Realtime, TextMessage, Event } from "leancloud-realtime";
const {
    TypedMessagesPlugin,
    ImageMessage
} = require("leancloud-realtime-plugin-typed-messages");
import Message from "./components/Message.vue";

@Component({
    components: {
        Message
    }
})
@Component
export default class Room extends Vue {
    message: string = "";
    user: any = {};
    conversation: any = {};
    userName: string = "Jerry";

    @Emit()
    init() {
        const realtime = new Realtime({
            appId: "2Fhhh5lcxtGwBOtsXvnsw06G-gzGzoHsz",
            appKey: "tFBBgTyzjbbywyj6PwK6KGDC",
            plugins: [TypedMessagesPlugin], // 注册富媒体消息插件
            pushOfflineMessages: true
        });
        realtime.createIMClient(this.userName).then(user => {
            // 成功登录
            console.log("登陆成功");
            user.on(Event.MESSAGE, function(message: any, conversation) {
                alert(message.text);
            });
            // user.createConversation({
            //     // 指定对话的成员除了当前用户 Tom(SDK 会默认把当前用户当做对话成员)之外，还有 Jerry
            //     members: ["Jerry"],
            //     // 对话名称
            //     name: "BrownHu & Jerry"
            // }).then((conversation: any) => {
            //     this.conversation = conversation;
            // });
        });
    }
    @Emit()
    sendMessage() {
        this.conversation
            .send(new TextMessage(`${this.message}`))
            .then((message: any) => {
                this.message = "";
                console.log("BrownHu & Jerry", "发送成功！");
            });
    }
    created() {
        this.init();
    }
}
</script>

<style lang="less" scoped>
.room {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: #999;
    .topBar {
        background: #673;
        height: 80px;
        width: 750px;
    }
    .chat {
        flex: 1;
        background: #333;
    }
    .inputBox {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        width: 750px;
        background: #2c3e50;
        input {
            width: 550px;
            border: none;
            height: 55px;
            border-radius: 10px;
        }
    }
}
</style>
