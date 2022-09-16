<template>
<div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
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
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
.nav{
        flex-shrink: 0;
    }
.content {
    display: flex;
    flex-grow: 1;
    padding-top: 48px;
    padding-left: 150px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
	aside {
        flex-shrink: 0;
		background: lightcyan;
    	width: 150px;
		padding: 16px;
        position: fixed;
        top: 0;
        left: 0;
    	padding-top:64px;
        height: 100vh;
        overflow: auto;
		>h2 {margin-bottom: 4px;}
        >ol {
        >li { padding: 4px 0;}
        }
    }
	main {
		flex-grow: 1;
        padding: 16px;
		background: rgb(245,245,245);
		overflow: auto;
    }
 }
}










// .content{
//     display: flex;
//     flex-direction: row;
//     height: 100vh;
// main{
//         background: rgb(245,245,245);
//         border-radius: 4px;
//         flex-grow: 1;
//         padding-left: 16px;
//         margin-left: 4px;
//         border-left: 1px solid #ccc;
//     } 
// aside {
//     background: lightcyan;
//     width: 150px;
//     padding: 16px;
//     >h2 {margin-bottom: 4px;}
//     >ol {
//     >li { padding: 4px 0;}
//         }
// }
// @media (max-width:500px) {
//         main{
//         position: fixed;
//         left: 0;
//         top: 0;
//         padding-top: 80px;
//         }
//     }
// }
</style>