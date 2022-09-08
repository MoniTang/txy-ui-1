<template>
    <Topnav />
    <div class="content">
        <aside>边栏</aside>
        <main>主内容</main>
    </div>
</template>

<script>
import Topnav from './Topnav.vue';
export default {
    name: "Doc",
    components: { Topnav }
}
</script>

<style lang="scss" scoped>

</style>