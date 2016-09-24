/**
 * 附近
 * Created by xuwus on 2016/9/23.
 */

import kksjImg from 'assets/images/home/kksj.png';
export default class ProjectCtrl {
  constructor($scope) {
    'ngInject';
    this.$scope=$scope
    this.$scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = false;

    });


    this.kksjImgSrc = kksjImg;
    this.tabItems=[
      {id:1,text:'全部分类',$hasActive:false},
      {id:2,text:'报销比例',$hasActive:false},
      {id:3,text:'距离',$hasActive:false},
      {id:4,text:'智能筛选',$hasActive:false},
    ];
  }
  tabClickCallBack(item,index){
    if(index!=3){
      this.menuItems=[
        {
          items:[
            {id:1,text:'实体'},
            {id:2,text:'微商'},
          ]
        },
        {
          items:[
            {id:1,text:'一级分类'},
            {id:2,text:'一级分类'},
            {id:2,text:'一级分类'},
            {id:2,text:'一级分类'},
          ]
        },
        {
          items:[
            {id:1,text:'二级分类'},
            {id:2,text:'二级分类'},
            {id:2,text:'二级分类'},
            {id:2,text:'二级分类'},
            {id:2,text:'二级分类'},
          ]
        },
      ]
    }else {
      this.menuItems=[
        {
          items:[
            {id:1,text:'价格从高到底'},
            {id:2,text:'价格从低到高'},
            {id:3,text:'好评优先'},
          ]
        }
      ]
    }
  }
  menuClickCallBack(item,index){
    console.log(item)
  }
}
