<template>
    <Topnav />
    <div class="content">
        <aside v-if="asideVisible">
            <h2>组件列表</h2>
            <ol>
                <li>
                    <router-link to="/doc/switch">Switch</router-link>
                </li>
                <li>
                    <router-link to="/doc/button">Button</router-link>
                </li>
                <li>
                    <router-link to="/doc/dialog">Dialog</router-link>
                </li>
                <li>
                    <router-link to="/doc/tabs">Tabs</router-link>

                </li>
            </ol>
        </aside>
        <main><router-view/></main>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';
import Topnav from '../components/Topnav.vue';
export default {
    components: { Topnav },
    setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible')
        return { asideVisible }
    }
}
</script>

<style lang="scss" scoped>
.content{
        height: 100vh;
        display: flex;
main{
        overflow: auto;
        background: lightgreen;
        flex-grow: 1;
        padding-top: 8px;
        padding-left: 16px;
        margin-left: 4px;
    }   
aside {
    background: lightcyan;
    width: 150px;
    padding: 16px;
    overflow: auto;
    >h2 {margin-bottom: 4px;}
    >ol {
    >li { padding: 4px 0;}
        }
    @media (max-width:500px) {
        position: fixed;
        left: 0;
        top: 0;
        padding-top: 80px;
        }
    }
}
</style>