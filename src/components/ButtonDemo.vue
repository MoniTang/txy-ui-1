<template>
<div>Button 示例</div>

<div class="txy-testButton">
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
</div>

 
<div class="txy-testButton">
    <Button >按钮一</Button>
    <Button size="big">按钮二</Button>
    <Button size="small">按钮三</Button>
</div>
<div class="txy-testButton">
    <Button >按钮</Button>
    <Button disabled>禁止</Button>
</div>

<div class="txy-testButton">
    <Button loading>加载中...</Button>
    <Button >加载完毕</Button>
</div>
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
    .txy-testButton{
        margin:8px;
        border: 1px solid red;
        padding: 4px;
        border-radius: 4px;
        background: white;
        >ol {
        >li { 
            padding: 4px 0;
            >span{
                font-size: 12px;
                margin-right: 8px;
            }
        }
        }

    }

</style>