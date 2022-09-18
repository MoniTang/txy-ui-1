<demo>
    圆角按钮
</demo>
<template>
    <Button  round>默认按钮</Button>
    <Button theme="primary" round>主要按钮</Button>
    <Button theme="success" round>成功按钮</Button>
    <Button theme="danger" round>危险按钮</Button>
</template>
<script lang="ts">
    import Button from "../lib/Button.vue";
    export default {
      components: { Button}
    }
</script>