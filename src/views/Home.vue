<template>
  <section class="home">
    <h1 class="title">Diss</h1>
    <div class="buttonBox">
      <router-link :to="'/'">
        <button class="button">Home</button>
      </router-link>
      <router-link :to="'/login'">
        <button class="button">Login</button>
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
@Component
export default class App extends Vue {
    @Emit()
    changeRouter(routerName: string) {
        this.$router.push(routerName);
    }
}
</script>

<style lang="less" scoped>
.home {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
    height: 1334px;
    width: 750px;
    .title {
        font-size: 100px;
        padding-top: 200px;
    }
    .buttonBox {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 750px;
        padding-bottom: 150px;
        .button {
            background: #2c3e50;
            color: white;
            width: 200px;
            height: 70px;
            border-radius: 10px;
            border: none;
            outline: none;
        }
    }
}
</style>
