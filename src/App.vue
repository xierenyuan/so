<template>
  <div>
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <p class="r">
      Welcome to your Vue.js app!<i class="ion-ios-add"></i>
    </p>
    <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
    <mt-tabbar :selected.sync="selected" :fixed="true">
      <mt-tab-item id="外卖">
        <i slot="icon" class="ion-bookmark"></i>
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <i slot="icon" class="ion-checkmark"></i>
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <i slot="icon" class="ion-social-tux"></i>
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
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
        isApp: true,
        selected: '外卖'
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
