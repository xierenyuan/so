<template>
  <div class="so-filter">
    <div class="ui-row-flex ui-whitespace so-filter-cate">
      <div class="ui-col ui-flex ui-flex-pack-center" v-for="item in cates" v-on:click="filterCate($event,item)" v-bind:class="{'filter-active':item.hasActive}" v-bind:text="item.name">全部分类</div>

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
        cates:[
          {id:1,text:'全部分类',hasActive:false},
          {id:2,text:'报销比例',hasActive:false},
          {id:3,text:'距离',hasActive:false},
          {id:4,text:'智能筛选',hasActive:false},
        ]
      }
    },
    methods: {
      filterCate: function (e,item) {
        item.hasActive=!item.hasActive;
      }
    }
  }
</script>
