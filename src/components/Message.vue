<template>
    <section>
        <section class="messageBox" v-for="(message,index) in this.$store.state.messageList" :key="index">

            <div class="message own" v-if="message.from === userId">
                <p>{{message.text}}</p>
                <img src="../assets/logo.png" alt="" class="avatar">
            </div>

            <div class="message friend" v-else>
                <img src="../assets/logo.png" alt="" class="avatar">
                <p>{{message.text}}</p>
            </div>

        </section>
    </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Message extends Vue {
    get userId() {
        return this.$store.state.user.id;
    }
}
</script>


<style lang="less" scoped>
.messageBox {
    width: 100%;
    display: flex;
    margin: 30px 0;
    .message {
        display: flex;
        width: 100%;
        .avatar {
            width: 80px;
            height: 80px;
        }
        p {
            font-size: 34px;
            word-wrap: break-word;
            background: #00688b;
            padding: 18px;
            border-radius: 10px;
            color: white;
            max-width: 600px;
        }
    }
    .friend {
        justify-content: flex-start;
        .avatar {
            margin-right: 20px;
        }
        p {
            margin-right: 0;
        }
    }
    .own {
        justify-content: flex-end;
        .avatar {
            margin-right: 0;
        }
        p {
            margin-right: 20px;
        }
    }
}
</style>
