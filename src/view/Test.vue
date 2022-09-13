<template>
  <div class="navbar">
    <div class="logo" >TXY-UI</div>
        <ul class="menu">
            <li>文档</li>
        </ul>
        <span class="toggleAside" @click="toggleAside"></span>
  </div>
    <div class="main">
        <div class="row">
            <div class="sidebar">侧边栏</div>
            <div class="content"><div>主要内容</div>
            <div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div>
            <div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div>
            <div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div><div>主要内容</div>
        
        </div>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
    export default {
    components: { Topnav }
}
</script>

<style lang="scss" scoped>
       .navbar {
        padding: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: pink;
        border:1px solid red;
        position: fixed;
        left: 0;
        z-index: 2;
        width: 100%;
        .logo {
            max-width: 6em;
            margin-right: auto;
            }
        }
        main{

        }

        .sidebar {
            border:1px solid green;
            background: lightgray;
            padding-top: 40px;
            position: fixed;
            top:0;
            height: 100vh;
            width: 100px;
        }

        .content {
        border:1px solid blue;
        width: calc(100% - 100px);
        position: fixed;
            padding-top: 40px;
            top: 0;
            right: 0;
            bottom: 0;
            overflow: auto;
        }
</style>