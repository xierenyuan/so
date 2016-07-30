<template>
   <div class="page-cell">
        <h1>首页2333</h1>
        <mt-cell title="标题文字" v-link="{name:'homeItem',params:{itemId:233}}" is-link value="带链接">
        </mt-cell>
        <mt-cell title="登陆" v-link="{path:'/login'}" is-link value="带链接">
        </mt-cell>
   </div>
</template>
<script>
    import Vue from 'vue';
    import {
        Cell
    } from 'mint-ui';
    Vue.component(Cell.name, Cell);
    export default {
        components: {

        }
    }
</script>