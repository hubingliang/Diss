<template>
    <section class="i">
        <section class="user">
            <div class="avatar">
                <input type="file" id="photoFileUpload" v-on:change="uploadAvatar" />
                <img :src="this.$store.state.avUser.attributes.avatar?this.$store.state.avUser.attributes.avatar.attributes.url:'@/assets/logo.png'" alt="">
            </div>
            <p class="userName">{{this.$store.state.user.username}}</p>
        </section>
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
    @Emit()
    uploadAvatar() {
        const fileUploadControl: any = document.getElementById(
            'photoFileUpload',
        );
        if (fileUploadControl.files.length > 0) {
            var localFile = fileUploadControl.files[0];
            var name = 'avatar.jpg';

            var file = new this.$store.state.AV.File(name, localFile);
            this.$store.state.avUser.set('avatar', file);
            this.$store.state.avUser.save();
        }
    }
    created() {
        isLogin();
    }
}
</script>

<style lang="less" scoped>
.i {
    flex: 1;
    background: white;
    overflow: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 100px;
    .user {
        display: flex;
        flex-direction: column;
        .avatar {
            position: relative;
            width: 300px;
            height: 300px;
            margin-bottom: 40px;
            img {
                position: absolute;
                width: 300px;
                height: 300px;
                left: 0;
                top: 0;
            }
            input {
                position: absolute;
                width: 300px;
                height: 300px;
                left: 0;
                top: 0;
                opacity: 0;
                z-index: 2;
            }
        }
        .userName {
            height: 100px;
            font-size: 50px;
            color: #2c3e50;
            margin-bottom: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .signOutButton {
        border: none;
        width: 350px;
        height: 60px;
        background: #2c3e50;
        color: white;
        border-radius: 10px;
        font-size: 30px;
    }
}
</style>
