<demo>
    一键打开
</demo>
<template>
        <div>
            <Button @click="showDialog">show</Button>
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