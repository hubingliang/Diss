<template>
    <section class="room">
        <TopBar>
            <template slot="back">
                <section class="back" @click="routerTo('/diss','Diss')">
                    <svg class="icon backIcon" aria-hidden="true">
                        <use xlink:href="#icon-back"></use>
                    </svg>
                    <span>Diss</span>
                </section>
            </template>
            <template slot="topBarName">
                <section class="friend">{{this.$route.query.friend}}</section>
            </template>
            <template slot="control">
                <section class="control"></section>
            </template>
        </TopBar>
        <section class="chat" id="chat">
            <Message></Message>
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
    private conversation: any = {};
    @Emit()
    private init() {
        this.$store.state.conversation
            .queryMessages({
                limit: 10, // limit 取值范围 1~1000，默认 20
            })
            .then((messages: any[]) => {
                this.$store.commit('initMessageList', messages);
                // 最新的十条消息，按时间增序排列
            })
            .catch(console.error.bind(console));

        this.$store.state.user.on(
            Event.MESSAGE,
            (message: any, conversation: any) => {
                this.$store.commit('addMessageList', message);
                this.resetScroll();
            },
        );
    }
    @Emit()
    private sendMessage() {
        this.$store.state.conversation
            .send(new TextMessage(`${this.message}`))
            .then((message: any) => {
                this.$store.commit('addMessageList', message);
                this.resetScroll();
                this.message = '';
                console.log('BrownHu & Jerry', '发送成功！');
            });
    }
    @Emit()
    private resetScroll() {
        const chatDom: any = document.querySelector('#chat');
        chatDom.scrollTop = chatDom.scrollHeight;
    }
    @Emit()
    routerTo(router, topBarName) {
        this.$router.push({
            path: `${router}`,
            query: { topBarName: `${topBarName}` },
        });
    }
    private created() {
        this.init();
    }
    private mounted() {
        this.resetScroll();
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
