<template>
    <section class="start">
        <div class="loading"></div>
        <div class="background">
        </div>
        <div class="logo">Diss</div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { Realtime, TextMessage, Event } from 'leancloud-realtime';
const AV = require('leancloud-storage');
const {
    TypedMessagesPlugin,
    ImageMessage,
} = require('leancloud-realtime-plugin-typed-messages');

@Component
export default class App extends Vue {
    @Emit()
    private init() {
        AV.init({
            appId: '2Fhhh5lcxtGwBOtsXvnsw06G-gzGzoHsz',
            appKey: 'tFBBgTyzjbbywyj6PwK6KGDC',
        });
        const realtime = new Realtime({
            appId: '2Fhhh5lcxtGwBOtsXvnsw06G-gzGzoHsz',
            appKey: 'tFBBgTyzjbbywyj6PwK6KGDC',
            plugins: [TypedMessagesPlugin], // 注册富媒体消息插件
            pushOfflineMessages: true,
        });
        this.$store.commit('init', {
            AV,
            realtime,
        });
        setTimeout(() => {
            this.isLogin();
        }, 1500);
    }
    private isLogin() {
        const currentUser = AV.User.current();
        if (currentUser) {
            this.$store.state.realtime
                .createIMClient(currentUser)
                .then((currentUser: any) => {
                    this.$store.commit('initUser', currentUser);
                    this.$router.push('diss');
                });
            // 跳转到首页
        } else {
            this.$router.push('user');
            // currentUser 为空时，可打开用户注册界面…
        }
    }
    private created() {
        this.init();
    }
}
</script>


<style lang="less" scoped>
@keyframes grow {
    from {
        height: 0px;
    }
    to {
        height: 1324px;
    }
}
@keyframes loading {
    from {
        width: 0px;
    }
    to {
        width: 750px;
    }
}
.start {
    width: 750px;
    height: 1334px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    .background {
        position: absolute;
        top: 0;
        width: 750px;
        animation: grow 1s forwards;
        background: #2c3e50;
    }
    .logo {
        color: white;
        position: absolute;
        font-size: 150px;
    }
    .loading {
        position: absolute;
        left: 0;
        top: 0;
        width: 750px;
        height: 10px;
        background: orange;
        animation: loading 500ms infinite;
        z-index: 2;
    }
}
</style>