<demo>
    常规使用
</demo>
<template>
       <div>
        <Button theme="text" @click="toggleDialog">对话框</Button>
        <Dialog v-model:visible="visibleDialog" :ok="ok" :cancel="cancel">
            <template v-slot:title><p>标题</p></template>
            <template v-slot:content><p>第一行字</p></template>
        </Dialog>
       </div>
</template>
<script lang="ts">
    import Dialog from '../lib/Dialog.vue';
    import Button from '../lib/Button.vue';
    import { ref ,h} from 'vue';
    import { openDialog } from '../lib/openDialog';
        export default {
        components: { Dialog, Button },
        setup(){
        const visibleDialog=ref(false)
        const toggleDialog=()=>{
            visibleDialog.value=!visibleDialog.value
        }
        const ok=()=>{
            return false
        }
        const cancel=()=>{}
        const showDialog=()=>{ 
            openDialog({title:'标题',content:'内容',
            ok(){console.log('ok');},
            cancel(){console.log('cancel');}
    
        })
        }
        return {toggleDialog,visibleDialog,ok,cancel,showDialog}
        }
    }
</script>