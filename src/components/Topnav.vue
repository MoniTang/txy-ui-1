<template>
    <div class="topnav">
        <div class="logo" @click="toggleAside">LOGO</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';
export default {
    setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible')
        const toggleAside = () => {
            if (asideVisible !== undefined) {
                asideVisible.value = !asideVisible.value
            }
        }
        return { toggleAside }
    }
}
</script>

<style lang="scss" scoped>
.topnav {
    background: pink;
    padding: 16px;
    display: flex;
    position: relative;
    z-index: 2;


    .logo {
        max-width: 6em;
        margin-right: auto;
    }

    .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }

    }
}
</style>