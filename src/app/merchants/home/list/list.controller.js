/**
 * author wusheng.xu
 * date 16/8/2
 */
import logoPng from 'assets/logo.png';
export default class ListCtrl {
  constructor() {
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
