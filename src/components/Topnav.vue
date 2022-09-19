<template>
    <div class="topnav">
        <router-link  to="/" class="logo" ><svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-logo"></use>
</svg> Txy-ui</router-link> 
        <ul class="menu">
          <router-link to="/doc">文档</router-link>
        </ul>
        <span v-if=" toggleMenuButtonVisible"
        class="toggleAside" @click="toggleAside">
        <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-menu"></use>
</svg>
    </span>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';
export default {
    props:{
        toggleMenuButtonVisible:{
            type:Boolean,
            default:false
        }
    },
    setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible')
        const toggleAside = () => {
            console.log('hi');
                asideVisible.value = !asideVisible.value
        }
        return { toggleAside }
    }
}
</script>

<style lang="scss" scoped>
.topnav { 
    background: linear-gradient(45deg, rgba(255,241,235,1) 0%, rgba(209,253,255,1) 100%);
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
	.logo {
        max-width: 6em;
        margin-right: auto;
        >svg{
            width: 28px;
            height: 28px;
        }
    }
	.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
         a {
            margin: 0 1em;
            &:hover{
            text-decoration: none;
            color: aqua;

            }            
        }
}	
.toggleAside{
        display: none;
        width: 24px ;
        height: 24px;
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
</style>