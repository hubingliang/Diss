<template>
    <section class="conversation">
        <div class="conversationBox" v-for="(conversation,index) in this.$store.state.conversationList" :key="index">
            <img src="@/assets/logo.png" alt="" class="avatar">
            <section class="message">
                <div class="name">{{conversation.friend}}</div>
                <div class="lastMessage">{{conversation.lastMessage}}</div>
            </section>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { Realtime, TextMessage, Event } from 'leancloud-realtime';
const {
    TypedMessagesPlugin,
    ImageMessage,
} = require('leancloud-realtime-plugin-typed-messages');
import { findUser } from '@/service/index';

@Component
export default class Conversation extends Vue {
    @Emit()
    private init() {
        this.$store.state.user
            .getQuery()
            .containsMembers([`${this.$store.state.user.id}`])
            .find()
            .then((conversations: any) => {
                for (const [index, conversation] of conversations.entries()) {
                    for (const member of conversation.members) {
                        findUser(member).then((user: any) => {
                            if (user.id !== this.$store.state.user.id) {
                                conversation.friend = user.attributes.username;
                                this.$store.commit(
                                    'initConversationList',
                                    conversation,
                                );
                            }
                        });
                    }
                }
                console.log(conversations);
            })
            .catch(console.error.bind(console));
    }
    private created() {
        this.init();
    }
}
</script>

<style lang="less" scoped>
.conversation {
    flex: 1;
    background: white;
    overflow: auto;
    .conversationBox {
        height: 140px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #999;
        padding: 20px;
        .avatar {
            width: 100px;
            height: 100px;
        }
        .message {
            margin-left: 20px;
            display: flex;
            height: 100%;
            .name {
                font-size: 32px;
                font-weight: 400;
            }
        }
    }
}
</style>
