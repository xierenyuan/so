<template>
  <div class="so-filter">
    <div class="ui-row-flex ui-whitespace so-filter-cate">
      <div class="ui-col ui-flex ui-flex-pack-center" v-on:click="filterCate($event)">全部分类</div>
      <div class="ui-col ui-flex ui-flex-pack-center " v-on:click="filterCate($event)">报销比例</div>
      <div class="ui-col ui-flex ui-flex-pack-center " v-on:click="filterCate($event)">距离</div>
      <div class="ui-col ui-flex ui-flex-pack-center " v-on:click="filterCate($event)">智能筛选</div>
    </div>
    <ul class="ui-tiled so-filter-menu">
      <li>
        <p>实体</p>
        <p>微商</p>
      </li>
      <li>
        <p>一级</p>
        <p>二级</p>
      </li>
      <li>
        <p>三级</p>
        <p>四级</p>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
  .so-filter {
    position: relative;
    height: 27px;
    overflow: hidden;
    .ui-tiled li {
      -webkit-box-pack: inherit;
      box-pack: inherit;
    }
    /*分类*/
    .so-filter-cate {
      padding: 5px 0;
      color: #333;
      border-bottom: 1px solid #cccccc;
      height: 27px;
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
    .so-filter-menu {
      font-size: 13px;
      font-weight: 300;
      color: #8c8c8c;
      position: absolute;
      z-index: 1;
      top: 27px;
      background: white;
      padding: 5px 0;
    }
  }
</style>
<script>
  export default{
    props: {},
    data: function () {
      return {
        filterOpened:false
      }
    },
    methods: {
      filterCate: function (e) {
        if(!this.filterOpened) {
          $(".so-filter").css({'overflow': 'visible'});
          $(".so-filter-menu").height(500);
          $(e.target.parentElement).find('.ui-col').removeClass('filter-active');
          $(e.target).addClass('filter-active');
        }else {
          $(".so-filter").css({'overflow': 'hidden'});
          $(e.target).removeClass('filter-active');
        }
        this.filterOpened=!this.filterOpened;
      }
    }
  }
</script>
