<template>
    <section class="start">
        <div class="background">
        </div>
        <div class="logo">Diss</div>
        <div class="loading"></div>
    </section>
</template>

<style lang="less" scoped>
@keyframes grow {
    from {
        height: 0px;
    }
    to {
        height: 1334px;
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
    .logo{
        color: white;
        position: absolute;
        font-size: 150px;
    }
    .loading{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 750px;
        height: 10px;
        background: orange;
        animation: loading 500ms infinite;
    }
}
</style>
