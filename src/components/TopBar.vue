<template>
    <section class="topBar">
        <slot name="back"></slot>
        <slot name="friend"></slot>
        <slot name="control"></slot>
    </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TopBar extends Vue {
}
</script>

<style lang="less">
.topBar {
    background: #2c3e50;
    height: 90px;
    width: 750px;
    display: flex;
    align-items: center;
}
</style>
