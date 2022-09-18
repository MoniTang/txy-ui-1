<demo>
    支持disabled
</demo>
<template>
    <Button >按钮</Button>
    <Button disabled>禁止</Button>
</template>
<script lang="ts">
    import Button from "../lib/Button.vue";
    export default {
      components: { Button}
    }
</script>