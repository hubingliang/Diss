<template>
    <section class="messageBox">
        <section class="message" v-for="(message,index) in messageList" :key="index">
            <img src="../assets/logo.png" alt="" class="avatar">
            <p>{{message}}</p>
        </section>
    </section>
</template>


<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
export default class Message extends Vue {
    messageList: String[] = [];
}
</script>


<style lang="less" scoped>
.message {
    width: 100%;
    display: flex;
    margin: 30px 0;
    .avatar {
        width: 80px;
        height: 80px;
        margin-right: 20px;
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
</style>
