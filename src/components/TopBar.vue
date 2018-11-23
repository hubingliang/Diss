<template>
    <section class="topBar">
        <slot></slot>
    </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TopBar extends Vue {
}
</script>

<style lang="less" scoped>
.topBar {
    background: #333;
    height: 80px;
    width: 750px;
}
</style>
