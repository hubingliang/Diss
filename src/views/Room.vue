<template>
    <section class="room">
        <TopBar>
            <template slot="back">
                <router-link to="/diss">
                    <section class="back">
                        <svg class="icon backIcon" aria-hidden="true">
                            <use xlink:href="#icon-back"></use>
                        </svg>
                        <span>Diss</span>
                    </section>
                </router-link>
            </template>
            <template slot="friend">
                <section class="friend">{{this.$route.query.friend}}</section>
            </template>
            <template slot="control">
                <section class="control"></section>
            </template>
        </TopBar>
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
    private messageList: string[] = [];
    private conversation: any = {};
    @Emit()
    private init() {
        // console.log(this.$store.state.user);
        this.$store.state.user
            .getConversation(this.$route.query.conversationID)
            .then((conversation: any) => {
                this.conversation = conversation;
            })
            .catch(console.error.bind(console));
        // this.$store.state.user
        //     .createConversation({
        //         members: [
        //             '5bf66816303f39005ea2a323',
        //             '5bf667df808ca40072063fe7',
        //         ],
        //         name: 'Tom & Jerry',
        //     })
        //     .then((conversation: any) => {
        //         // 发送消息
        //         this.conversation = conversation;
        //     });
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
    .back {
        display: flex;
        align-items: center;
        height: 90px;
        width: 150px;
        .backIcon {
            width: 40px;
            height: 40px;
            fill: white;
            margin-left: 10px;
        }
        span {
            font-size: 32px;
            color: white;
        }
    }
    .friend{
        flex: 1;
        height: 90px;
        font-size: 38px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .control {
        display: flex;
        align-items: center;
        height: 90px;
        width: 150px;
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
