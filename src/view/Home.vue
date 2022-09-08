<template>
    <Topnav />
    <div class="banner">
        <h1>txy-ui</h1>
        <h2>一款简单的UI</h2>
        <p class="actions"><a href="">Github</a>
            <router-link to="/doc">开始</router-link>
        </p>
    </div>
</template>

<script>
import Topnav from '../components/Topnav.vue';
export default {
    name: "Home",
    components: { Topnav }
}
</script>

<style lang="scss" scoped>
.banner {
    border: 1px solid red;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: lightgreen;

    >.actions {
        padding: 8px 0;

        a {
            margin: 0 8px;
            background: #fff;
            display: inline-block;
            height: 28px;
            line-height: 28px;
            border-radius: (28px)/2;
            padding: 0 8px;

        }
    }
}
</style>