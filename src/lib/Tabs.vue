<template>
    <div class="txy-tabs">
        <div class="txy-tabs-nav" ref="container">
            <div class="txy-tabs-nav-item" v-for="(t,index) in titles"
            :ref="el=>{if(t===selected) selectItem=el}" 
             :class="{selected: t===selected}" @click="select(t)"
            :key="index">{{t}}</div>
            <div class="txy-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="txy-tabs-content">
            <component class="txy-tabs-content-item"
            :class="{selected:c.props.title===selected}" v-for="(c,index) in defaults" 
            :is="c" :key="index"/>
        </div>
    </div>
</template>

<script lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import Tab from './Tab.vue'
    export default {
     props: {
    selected: {type: String}
        },
    setup(props,context){
        const selectItem=ref<HTMLDListElement>(null)
        const indicator=ref<HTMLDivElement>(null)
        const container=ref<HTMLDivElement>(null)
        onMounted(()=>{
            watchEffect(()=>{
                const {width}=selectItem.value.getBoundingClientRect()
                indicator.value.style.width=width+'px'
                const {left:left2}=selectItem.value.getBoundingClientRect()
                const {left:left1}=container.value.getBoundingClientRect()
                indicator.value.style.left=(left2-left1)+'px'
            })
       })
        const defaults=context.slots.default()
            defaults.forEach((tag) => {
                if (tag.type !== Tab) {
                    throw new Error('Tabs 子标签必须是 Tab')}
                })
        const titles = defaults.map( (tag)=>{
            return tag.props.title
            })
        const select = (title: string) => {
            context.emit('update:selected', title)
             }
            return {indicator,defaults,titles,select,selectItem,container}
        }    
    }
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9; 
.txy-tabs{
    &-nav{
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;
        &-item{
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;
            &:first-child{
                margin-left: 0;
            }
            &.selected{
                color: $blue;
            }
        }
        &-indicator{
            position: absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms;
        }
    }
    &-content{
        padding: 8px 0;
        &-item{
            display: none;
            &.selected{
                display: block;
            }
        }
    }
}
</style>