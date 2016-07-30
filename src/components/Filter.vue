<template>
  <div class="so-filter">
    <div class="ui-row-flex ui-whitespace so-filter-cate">
      <div class="ui-col ui-col ui-flex ui-flex-pack-center filter-active">全部分类</div>
      <div class="ui-col ui-col ui-flex ui-flex-pack-center ">报销比例</div>
      <div class="ui-col ui-col ui-flex ui-flex-pack-center ">距离</div>
      <div class="ui-col ui-col ui-flex ui-flex-pack-center ">智能筛选</div>
    </div>
    <div class="ui-row-flex ui-whitespace so-filter-menu">
      <div class="ui-col ui-col ui-flex ui-flex-pack-center">全部分类</div>
      <div class="ui-col ui-col ui-flex ui-flex-pack-center ">报销比例</div>
      <div class="ui-col ui-col ui-flex ui-flex-pack-center ">距离</div>
    </div>
  </div>
</template>
<style lang="scss">
  .so-filter {
    position: relative;
    /*分类*/
    .so-filter-cate {
      color: #333;
      .filter-active {
        color: #ff6a6e;
      }
      div {
        border-right: 1px solid #999;
      }
      div:last-child {
        border-right: 0;
      }
    }
    /*子菜单*/
    .so-filter-menu{

    }
  }
</style>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
