<template>
 <button  class="txy-switch"  :class="{'txy-checked':value}" @click="toggleSwitch"><span></span></button>
</template>

<script lang="ts">
    export default {
        props:{value:Boolean}, 
        setup(props, context){
            const toggleSwitch=()=>{
                context.emit('update:value',!props.value)
            }
            return {toggleSwitch}
        }  
    }
</script>

<style lang="scss">
    @use "sass:math";
    $h:22px;
    $h2:$h - 4px;
.txy-switch{
    height: $h;
    width: $h*2;
    border: none;
    background:gray;
    border-radius: math.div($h, 2);;
    position: relative;
    span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: math.div($h2, 2);;
    transition: left 250ms;
  }
  &[disabled]{
            cursor: not-allowed;
            color: gray;
        }
}
.txy-switch.txy-checked{background: blue;
    span{left: calc(100% - #{$h2} - 2px);}
    }
     

 
</style>