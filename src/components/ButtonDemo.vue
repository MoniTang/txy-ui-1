<template>
<div>Button 示例</div>

<ol>
    <li >
        <span>直角按钮</span>
        <Button>默认按钮</Button>
        <Button theme="primary" >主要按钮</Button>
        <Button theme="success">成功按钮</Button>
        <Button theme="info">信息按钮</Button>
        <Button theme="warning">警告按钮</Button>
        <Button theme="danger">危险按钮</Button>
        <Button theme="link">链接按钮</Button>
        <Button theme="text">文字按钮</Button> 
    </li>
    <li>
        <span>圆角</span>
        <Button  round>默认按钮</Button>
        <Button theme="primary" round>主要按钮</Button>
        <Button theme="success" round>成功按钮</Button>
        <Button theme="danger" round>危险按钮</Button>
    </li>
</ol>
 
<ol>
    <Button >按钮一</Button>
    <Button size="big">按钮二</Button>
    <Button size="small">按钮三</Button>
</ol>
<ol>
    <Button >按钮</Button>
    <Button disabled>禁止</Button>
</ol>

<ol>
    <Button loading>加载中...</Button>
    <Button >加载完毕</Button>
</ol>
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