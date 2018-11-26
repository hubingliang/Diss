<template>
    <section class="diss">
        <TopBar>
            <template slot="topBarName">
                <section class="friend">{{this.$route.query.friend}}</section>
            </template>
        </TopBar>
        <router-view></router-view>
        <div class="tabBox">

            <div class="item" @click="routerTo('/diss','Diss')">Diss</div>

            <div class="item" @click="routerTo('i','通讯录')">通讯录</div>

            <div class="item" @click="routerTo('Diss')">没做</div>

            <div class="item" @click="routerTo('i','我')">我自己</div>

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
import TopBar from '@/components/TopBar.vue';

@Component({
    components: {
        TopBar,
    },
})
export default class Diss extends Vue {
    @Emit()
    routerTo(router,topBarName) {
        this.$router.push({
            path: `${router}`,
            query: { topBarName: `${topBarName}` },
        });
    }
}
</script>

<style lang="less" scoped>
.diss {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: #999;
    .conversationBox {
        padding: 40px 20px;
        flex: 1;
        background: white;
        overflow: auto;
    }
    .tabBox {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        width: 750px;
        background: #2c3e50;
        .item {
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            flex: 1;
            font-size: 30px;
            a {
                text-decoration: none;
                color: white;
            }
        }
    }
}
</style>
