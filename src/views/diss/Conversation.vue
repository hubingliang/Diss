<template>
    <section class="conversation">
        <div class="conversationBox" v-for="(conversation,index) in this.$store.state.conversationList" :key="index" @click="joinRoom(conversation)">
            <img :src="conversation.friend.avatar" alt="" class="avatar">
            <section class="message">
                <div class="name">{{conversation.friend.username}}</div>
                <div class="lastMessage">{{conversation.lastMessage}}</div>
            </section>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import { findUser } from '@/service/index';

@Component
export default class Conversation extends Vue {
    @Emit()
    private init() {
        this.$store.commit('cleanConversationList');
        this.$store.state.user
            .getQuery()
            .containsMembers([`${this.$store.state.user.id}`])
            .find()
            .then((conversations: any) => {
                for (const [index, conversation] of conversations.entries()) {
                    for (const member of conversation.members) {
                        findUser(member).then((user: any) => {
                            if (user.id !== this.$store.state.user.id) {
                                conversation.friend = {
                                    username: user.attributes.username,
                                    avatar:
                                        user.attributes.avatar.attributes.url,
                                };
                                this.$store.commit(
                                    'initConversationList',
                                    conversation,
                                );
                            }
                        });
                    }
                }
            })
            .catch(console.error.bind(console));
    }
    @Emit()
    private joinRoom(conversation: any) {
        this.$store.commit('initConversation', conversation);
        this.$router.push({
            path: '/room',
            query: {
                conversationID: `${conversation.id}`,
                topBarName: `${conversation.friend.username}`,
            },
        });
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
            flex-direction: column;
            height: 100%;
            .name {
                font-size: 40px;
                font-weight: 400;
            }
            .lastMessage {
                font-size: 30px;
                color: #999;
            }
        }
    }
}
</style>
