<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    @Emit()
    private Ban() {
        document.body.addEventListener(
            'touchmove',
            e => {
                e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
            },
            { passive: false },
        );
    }
    private created() {
        // this.Ban();
    }
}
</script>


<style lang="less">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
</style>
