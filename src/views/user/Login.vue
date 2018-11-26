<template>
    <section class="Login">
        <input type="text" v-model="userName" placeholder="User name" @keyup.enter="logIn">
        <input type="text" v-model="password" placeholder="Password" @keyup.enter="logIn">
        <button @click="logIn()">LogIn</button>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { Realtime, TextMessage, Event } from 'leancloud-realtime';

@Component
export default class App extends Vue {
    private userName: string = '';
    private password: string = '';
    @Emit()
    private logIn() {
        this.$store.state.AV.User.logIn(this.userName, this.password).then(
            (user: any) => {
                this.$store.state.realtime
                    .createIMClient(user)
                    .then((user: any) => {
                        this.$store.commit('initUser', user);
                        this.$router.push('diss');
                    });
            },
            function(error: object) {
                console.log(error);
            },
        );
    }
}
</script>


<style lang="less" scoped>
.Login {
    width: 750px;
    height: 1314px;
    overflow: hidden;
    padding: 100px 50px;
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