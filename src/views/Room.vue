<template>
    <section class="room">
        <TopBar></TopBar>
        <section class="chat">
            <Message :messageList="messageList"></Message>
        </section>
        <section class="inputBox">
            <input type="text" @keyup.enter="sendMessage" v-model="message" id="input">
        </section>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { Realtime, TextMessage, Event } from 'leancloud-realtime';
const {
    TypedMessagesPlugin,
    ImageMessage,
} = require('leancloud-realtime-plugin-typed-messages');
import Message from '@/components/Message.vue';
import TopBar from '@/components/TopBar.vue';

@Component({
    components: {
        Message,
        TopBar,
    },
})
export default class Room extends Vue {
    private message: string = '';
    private messageList: String[] = [];
    private conversation: any = {};
    @Emit()
    private init() {
        console.log(this.$store.state.user);
        this.$store.state.user
            .createConversation({
                members: [
                    '5bf66816303f39005ea2a323',
                    '5bf667df808ca40072063fe7',
                ],
                name: 'Tom & Jerry',
            })
            .then((conversation: any) => {
                // 发送消息
                this.conversation = conversation;
            });
        this.$store.state.user.on(
            Event.MESSAGE,
            (message: any, conversation: any) => {
                console.log(message);

                this.$store.commit('initMessageList', message);
            },
        );
    }
    @Emit()
    private sendMessage() {
        this.conversation
            .send(new TextMessage(`${this.message}`))
            .then((message: any) => {
                this.$store.commit('initMessageList', message);
                this.message = '';
                console.log('BrownHu & Jerry', '发送成功！');
            });
    }
    private created() {
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
        background: #333;
        height: 80px;
        width: 750px;
    }
    .chat {
        padding: 40px 20px;
        flex: 1;
        background: white;
        overflow: auto;
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
            font-size: 35px;
        }
    }
}
</style>
