/**
 * 指令demo
 */
import Utils from 'utils';
import temp from './index.html';
import HiCtrl from './hi.controller';
class Hi {
    constructor() {
        'ngInject';
        this.restrict = 'E';
        this.scope = {
            btnText: '@soBtnText',
            soClick: '&'
        };
        this.templateUrl = temp;
        this.controller = HiCtrl;
        this.controllerAs = 'vm';
        this.replace = true;
    }
    link($scope, $element, $attr) {

    }
}


export default angular.module('so.ui.hi', [])
    .directive('soHi', Utils.Directive(Hi))
    .name;