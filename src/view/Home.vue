<template>
    <div class="tapnavAndBanner">
        <Topnav />
    <div class="banner">
        <h1>Txy-ui</h1>
        <h2>一款简单的UI</h2>
        <p class="actions"><a href="https://github.com/MoniTang/txy-ui-1">Github</a>
            <router-link to="/doc">开始</router-link>
        </p>
    </div>
</div>
<div class="features">
        <ul>
            <li>
                <svg class="icon" aria-hidden="true"><use xlink:href="#icon-Vue"></use></svg>
                <h3>基于Vue3</h3>
                <p>使用了Vue3 Composition API</p>
            </li>
            <li>
                <svg class="icon" aria-hidden="true"><use xlink:href="#icon-typescript"></use></svg>
                <h3>基于TypeScript</h3>
                <p>源代码采用的TypeScript书写</p>
            </li>
            <li>
                <svg class="icon" aria-hidden="true"><use xlink:href="#icon-idea"></use></svg>
                <h3>代码易读</h3>
                <p>每个组件的源代码都极其简洁</p>
            </li>
        </ul>

    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
export default {
    name: "Home",
    components: { Topnav }
}
</script>

<style lang="scss" scoped>
    .features{
          margin: 64px auto;
          padding: 0 16px;
        @media (min-width: 800px) {
            width: 800px;
            >ul {>li {width: 50%;}}}
        @media (min-width: 1200px) {
            width: 1200px;
            >ul {>li {width: 33.3333%;}}
        }
        >ul{
            display: flex;
            flex-wrap: wrap;
            >li{
                margin: 16px 0;
                display: grid;
                justify-content: start;
                align-content: space-between;
                grid-template-areas:
                    "icon title"
                    "icon text";
                grid-template-columns: 80px auto;
                grid-template-rows: 1fr auto;
                >svg {
                    grid-area: icon;
                    width: 64px;
                    height: 64px;
                }
                >h3 {
                    grid-area: title;
                    font-size: 28px;
                }
                >p {
                    grid-area: text
                }
            }
        }
    }
.tapnavAndBanner{
    clip-path: ellipse(80% 60% at 50% 40%);
    color:#00bdc6;
    background: linear-gradient(0deg, rgba(255,241,235,1) 0%, rgba(209,253,255,1) 100%);
    .banner {
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        >.actions {
            padding: 8px 0;
            a {
                margin: 0 8px;
                background: #fff;
                display: inline-block;
                padding: 0 8px;
                border-radius: 4px;
                &:hover{
                    text-decoration: none;
                    color:white;
                    background: #e2ebf0;
                }
            }
        }
    }
}
</style>