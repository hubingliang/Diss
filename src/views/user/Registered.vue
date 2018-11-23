<template>
    <section class="registered">
        <input type="text" v-model="userName" placeholder="User name" @keyup.enter="registered">
        <input type="password" v-model="password" placeholder="Password" @keyup.enter="registered">
        <input type="text" v-model="email" placeholder="Email" @keyup.enter="registered">
        <button @click="registered">Registered</button>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { Realtime, TextMessage, Event } from 'leancloud-realtime';
const {
    TypedMessagesPlugin,
    ImageMessage,
} = require('leancloud-realtime-plugin-typed-messages');

@Component
export default class Registered extends Vue {
    private userName = '';
    private password = '';
    private email = '';

    @Emit()
    private registered() {
        if (this.userName === '' || this.password === '' || this.email === '') {
            return;
        }
        // 新建 AVUser 对象实例
        var user = new this.$store.state.AV.User();
        // 设置用户名
        user.setUsername(this.userName);
        // 设置密码
        user.setPassword(this.password);
        // 设置邮箱
        user.setEmail(this.email);
        const avatar = this.upAvatar;
        user.set('avatar', avatar);
        user.signUp().then(
            (user: any) => {
                this.$store.state.realtime
                    .createIMClient(user)
                    .then((user: any) => {
                        this.$store.commit('initUser', user);
                    });
            },
            function(error: any) {},
        );
    }
    @Emit()
    private upAvatar() {
        const fileUploadControl: any = document.querySelector('sd');
        if (fileUploadControl.files.length > 0) {
            var localFile = fileUploadControl.files[0];
            var name = 'avatar.jpg';

            return new this.$store.state.AV.File(name, localFile);
        }
    }
}
</script>

<style lang="less" scoped>
.registered {
    input {
        border: none;
        border-bottom: 1px solid #2c3e50;
        outline: none;
        font-size: 40px;
        margin-bottom: 60px;
        padding-top: 20px;
    }
    input:-ms-input-placeholder {
        color: #999;
    }
    button {
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
