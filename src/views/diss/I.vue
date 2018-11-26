<template>
    <section class="i">
        <button class="signOutButton" @click="signOut">退出登录</button>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import { isLogin } from '@/service/index';

@Component
export default class Conversation extends Vue {
    @Emit()
    private signOut() {
        this.$store.state.AV.User.logOut();
        this.$router.push('/user');
    }
    created() {
        isLogin()
    }
}
</script>

<style lang="less" scoped>
.i {
    flex: 1;
    background: white;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .signOutButton {
        border: none;
        width: 500px;
        height: 60px;
        background: #2c3e50;
        color: white;
        border-radius: 10px;
        font-size: 35px;
    }
}
</style>
