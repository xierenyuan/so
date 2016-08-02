/**
 * author wusheng.xu
 * date 16/8/2
 */
import logoPng from 'assets/logo.png';
export default class ListCtrl {
  constructor() {
    this.tabItems=[
      {id:1,text:'全部分类',hasActive:false},
      {id:2,text:'报销比例',hasActive:false},
      {id:3,text:'距离',hasActive:false},
      {id:4,text:'智能筛选',hasActive:false},
    ];
  }
  tabClickCallBack(item,index){
    alert(index)
  }
}
