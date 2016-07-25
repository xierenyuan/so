<template>
  <div>
    <hello></hello>
    <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
    <mt-tabbar v-if="isApp" :fixed="true" >
      <mt-tab-item id="外卖" v-link="{ path: '/waimai' }">
        <i slot="icon" class="ion-bookmark"></i>
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单" v-link="{ path: '/order' }">
        <i slot="icon" class="ion-checkmark"></i>
        订单
      </mt-tab-item>
      <mt-tab-item id="首页" v-link="{ path: '/home' }">
        <i slot="icon" class="ion-home"></i>
        首页
      </mt-tab-item>
     <mt-tab-item id="发现" v-link="{ path: '/found' }">
        <i slot="icon" class="ion-social-tux"></i>
        发现
      </mt-tab-item>
      <mt-tab-item id="我的" v-link="{ path:'/my' }" >
        <i slot="icon" class="ion-arrow-right-a"></i>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
    import Vue from 'vue';
    import Hello from './components/Hello'
    import {
        Tabbar,
        TabItem
    } from 'mint-ui';
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabItem.name, TabItem);
    export default {
        name: 'page-tabbar',
        data() {
            return {
                isApp: true
            };
        },
        components: {
            Hello
        }
    }
</script>
<style>
    [v-cloak] {
        display: none;
    }
    
    .fade-transition {
        transition: opacity .3s ease;
    }
    
    .fade-enter,
    .fade-leave {
        opacity: 0;
    }
</style>