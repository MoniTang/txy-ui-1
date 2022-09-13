<template>
    <div class="topnav">
        <div class="logo" >TXY-UI</div>
        <ul class="menu">
            <li>文档</li>
        </ul>
        <span class="toggleAside" @click="toggleAside"></span>
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
	position: relative;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    box-shadow: 0px 1px 1px pink;
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
.toggleAside{
        display: none;
        width: 24px ;
        height: 24px;
        background-color: red;
        position: absolute;
        left :16px;
        top:50%;
        transform: translateY(-50%);
    }
    @media (max-width:500px) {
        >.menu {display: none;}
        >.logo { margin: 0 auto; }
        >.toggleAside{display: inline-block;    }

    }
}
// .topnav {
//     background: pink;
//     padding: 16px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     z-index: 2;
//     box-shadow: 0px 1px 1px pink;
    
//     .logo {
//         max-width: 6em;
//         margin-right: auto;
//     }
//     .menu {
//         display: flex;
//         white-space: nowrap;
//         flex-wrap: nowrap;
//          >li {
//             margin: 0 1em;
//         }
//     }
//     .toggleAside{
//         display: none;
//         width: 24px ;
//         height: 24px;
//         background-color: red;
//         position: absolute;
//         left :16px;
//         top:50%;
//         transform: translateY(-50%);
//     }
//     @media (max-width:500px) {
//         >.menu {display: none;}
//         >.logo { margin: 0 auto; }
//         >.toggleAside{display: inline-block;    }

//     }
// }
</style>