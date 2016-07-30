<template>
  <div>
    <hello></hello>
    <filter></filter>
    <div class="r"></div>
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
    import Filter from './components/Filter.vue';
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
            Hello,
            Filter
        }
    }
</script>
<style lang="scss">
    /*大坑*/

    @import './sass/rest.scss';
    @import './sass/utill.scss';
    v-cloak {
        display: none;
    }

    .fade-transition {
        transition: opacity .3s ease;
    }

    .fade-enter,
    .fade-leave {
        opacity: 0;
    }

    .r {
        width: 100px;
        height: 100px;
        background: url(./assets/logo.png);
    }
</style>
