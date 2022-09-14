<template>
 <button class="txy-button" 
 :class="classes"
>
 <span v-if="loading"
 class="txy-loadingIndicator"></span>
<slot></slot>
 </button>
</template>
<script lang="ts">
    import { computed } from 'vue';
    export default {
        props:{
            theme:{
                type:String,
                default:"button"
            },
            size:{
                type:String,
                default:"normal"
            },
            loading:{
                type:Boolean,
                default:false
            }
            
        },
        setup(props){
            const {theme,size,color}=props
            const classes=computed(()=>{
            return {[`txy-theme-${theme}`]:theme,
                    [`txy-size-${size}`]:size,
                }
            })
            return {classes}
        }
    }
</script>

<style lang="scss">
    $h:28px;
    $border-color:#d9d9d9;
    $color:#333;
    $blue:#40a9ff;
    $radius:6px;
    .txy-button{
        box-sizing: border-box;
        height: $h;
        padding: 0 8px;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        background: white;
        color: $color;
        border: 1px solid $border-color;
        box-shadow: 0 1px 0 fade-out(black,0.95);
        &+&{
            margin-left: 8px;
        }
        &:hover,&:focus{
            color: $blue;
        }
        &:focus{
            outline: none;
        }
        &::-moz-focus-inner{
            border: 0;
        }
        &.txy-theme-primary{
            background:$blue;
            color: white;
            &:hover,&:focus{
                background: lighten($blue
                ,10%);
            }
        }
        &.txy-theme-success{
            background:green;
            color: white;
            &:hover,&:focus{
                background: lighten(green
                ,10%);
            }
        }
        &.txy-theme-info{
            background:gray;
            color: white;
            &:hover,&:focus{
                background: lighten(gray
                ,10%);
            }
        }
        &.txy-theme-warning{
            background:orange;
            color: white;
            &:hover,&:focus{
                background: lighten(orange
                ,10%);
            }
        }
        &.txy-theme-danger{
            background:red;
            color: white;
            &:hover,&:focus{
                background: lighten(red
                ,10%);
            }
        }
        &.txy-theme-link{
            border-color: transparent;
            box-shadow: none;
            color: $blue;
            &:hover,&:focus{
                color: lighten($blue,10%);
            }
        }
        &.txy-theme-text{
            border-color: transparent;
            box-shadow: none;
            color: inherit;
            &:hover,&:focus{
                background: darken(white,5%);
            }
        }
        &.txy-size-big{
            font-size: 24px;
            height: 48px;
            padding: 0 24px;
        }
        &.txy-size-small{
            font-size: 12px;
            height: 16px;
            padding: 0 6px;
        }
        &[round]{
        border-radius: $radius;
        }
        &[disabled]{
            cursor: not-allowed;
            color: gray;
        }

        > .txy-loadingIndicator{
            width: 14px;
            height: 14px;
            display: inline-block;
            margin-right: 4px;
            border-radius: 8px;
            border-color: $blue $blue $blue transparent;
            border-style: solid;
            border-width: 2px;    
            animation: txy-spin 1s infinite linear;    
        }
    }
    @keyframes txy-spin{
        0%{transform:rotate(0deg)}
        100%{transform: rotate(365deg);}
    }
    

</style>