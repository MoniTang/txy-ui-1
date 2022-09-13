<template>
    <div>Button 示例</div>
    <h1>示例一</h1>
<Button>按钮一</Button>
<Button theme="button">按钮二</Button>
<Button theme="link">按钮三</Button>
<Button theme="text">按钮四</Button>  
<h1>示例二</h1>
<Button >按钮一</Button>
<Button size="big">按钮二</Button>
<Button size="small">按钮三</Button>
<h1>示例三</h1>
<Button >按钮</Button>
<Button disabled>禁止</Button>
<h1>示例四</h1>
<Button loading>加载中...</Button>
<Button >加载完毕</Button>



</template>

<script lang="ts">
import Button from "../lib/Button.vue";
    export default {
    components: { Button },
    setup(){
    }
}
</script>

<style lang="scss" scoped>

</style>