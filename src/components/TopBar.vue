<template>
    <section class="topBar">

        <section class="back">
            <slot name="back"></slot>
        </section>

        <section class="topBarName">
            {{this.$route.query.topBarName}}
        </section>

        <div class="control">
            <slot name="control"></slot>
        </div>

    </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TopBar extends Vue {}
</script>

<style lang="less">
.topBar {
    background: #2c3e50;
    height: 90px;
    width: 750px;
    display: flex;
    align-items: center;
    .back {
        display: flex;
        align-items: center;
        height: 90px;
        width: 150px;
        .backIcon {
            width: 40px;
            height: 40px;
            fill: white;
            margin-left: 10px;
        }
        span {
            font-size: 32px;
            color: white;
        }
    }
    .topBarName {
        flex: 1;
        height: 90px;
        font-size: 38px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .control {
        display: flex;
        align-items: center;
        height: 90px;
        width: 150px;
    }
}
</style>
