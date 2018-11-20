<template>
    <section class="Login">
        <div class="logo">D</div>
        <h2 class="title">Welcome Back</h2>
        <section class="form">
            <input type="text">
            <input type="text">
        </section>
    </section>
</template>

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
        font-size: 0.7rem;
    }
    .form {
        display: flex;
        flex-direction: column;
        input {
            border: none;
            border-bottom: 1px solid #2c3e50;
            outline: none;
            font-size: 60px;
            margin-bottom: 60px;
            padding-top: 20px;
        }
    }
}
</style>
