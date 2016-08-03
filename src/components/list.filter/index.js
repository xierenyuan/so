/**
 * 筛选指令
 * author wusheng.xu
 * date 16/8/2
 */
import './list-filter.scss';
import Utils from 'utils';
import temp from './index.html';
import FilterCtrl from './filter.controller';
class ListFilter {
  constructor($timeout) {
    'ngInject';
    this.$timeout=$timeout;
    this.restrict = 'E';
    this.replace = true;
    this.controller = FilterCtrl;
    this.controllerAs = 'vm';
    this.scope = {
      tabItems: '=soTabItems',//tab标签数组
      tabClickCallBack: '&soTabClickBack',//标签点击事件,返回参数(item,index)[当前数组,下标]
      menuItems:'=soMenuItems',//菜单数组
      menuClickCallBack:'&soMenuClickBack',//菜单点击事件,返回参数(item,index)[当前数组,下标]
    };
    this.templateUrl = temp;
  }

  link($scope, $element, $attr) {
    var $filterMenus = angular.element(document.querySelector('.filter-menus')),
      ionContent = document.querySelector('ion-content'),
      filterTabs = document.querySelector('.filter-tabs');
    //设置菜单高度
    $filterMenus[0].style.height = (ionContent.clientHeight - filterTabs.clientHeight - 7) + 'px';
  }
}
export default angular.module('so.ui.listFilter', [])
  .directive('soFilter', Utils.Directive(ListFilter))
  .name;
