<template>
    <section class="Login">
        <div class="logo">D</div>
        <h2 class="title">Welcome Back</h2>
        <!-- <Registered></Registered> -->
        <Login></Login>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { Realtime, TextMessage, Event } from 'leancloud-realtime';
import Registered from './Registered.vue';
import Login from './Login.vue';
const {
    TypedMessagesPlugin,
    ImageMessage,
} = require('leancloud-realtime-plugin-typed-messages');

@Component({
    components: {
        Registered,
        Login,
    },
})
export default class User extends Vue {
}
</script>


<style lang="less" scoped>
.Login {
    width: 750px;
    height: 1314px;
    overflow: hidden;
    padding: 100px 50px;
    .logo {
        color: #2c3e50;
        font-size: 60px;
        font-weight: 700;
        margin-bottom: 40px;
    }
    .title {
        font-size: 70px;
        margin-bottom: 100px;
    }
    .form {
        display: flex;
        flex-direction: column;
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
    }
}
</style>