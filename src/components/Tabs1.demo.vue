<demo>
    常规使用
</demo>
<template>
    <Tabs v-model:selected="selected">
    <Tab title="导航1">1</Tab>
    <Tab title="导航23333333333333">2</Tab>
    </Tabs>
</template>
<script lang="ts">
    import Tabs from '../lib/Tabs.vue'
    import Tab from '../lib/Tab.vue'
    import {
      ref
    } from 'vue'
    export default {
      components: {Tabs,Tab},
      setup() {
        const selected= ref('导航1')
        return {selected}
      }
    }
    </script>