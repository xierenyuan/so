<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
    import Vue from 'vue';
    import MintUI from 'mint-ui';
    Vue.use(MintUI);
</script>

<style lang="scss">
    /*大坑*/
    @import './sass/rest.scss';
    @import './fonts/iconfont.css';
    @import './sass/common/common.scss';
    .fade-transition {
        transition: opacity .3s ease;
    }
    
    .fade-enter,
    .fade-leave {
        opacity: 0;
    }
</style>