<template>
  <div class="so-filter" v-bind:style="{overflow:cateOverflow}">
    <div class="ui-row-flex ui-whitespace so-filter-cate">
      <div class="ui-col ui-flex ui-flex-pack-center" v-for="(index,item) in cates" v-on:click="filterCate($event,item,index)" v-bind:class="{'filter-active':item.hasActive&&index==filterCateActiveIndex}" v-text="item.text"></div>

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
  //筛选菜单级联列表循环个数
  $filterMenuItemCount:3;
  .so-filter {
    position: relative;
    height: 27px;
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
      @for $i from 1 through $filterMenuItemCount {
        @if $i==1 {
          li:nth-child(1) {
            background: #ffffff;
          }
        } @else if $i==2 {
          li:nth-child(2) {
            background: #f2f2f2;
          }
        } @else if $i==3 {
          li:nth-child(3) {
            background: #e4e4e4;
          }
        }
      }
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
        ],
        filterCateActiveIndex:-1,
        cateOverflow:'hidden'
      }
    },
    methods: {
      filterCate: function (e,item,i) {
        this.cates.forEach(function (item,k) {
          if(i!=k)
            item.hasActive=false;
        });
        item.hasActive=!item.hasActive;
        this.filterCateActiveIndex=i;
        this.cateOverflow=item.hasActive?'visible':'hidden'
      }
    }
  }
</script>
