/**
 * 银行模块
 * @author wangkai
 */
import './bank.scss';
import temp from './index.html';
import BankCtrl from './bank.controller';
class Config {
    static ConfigInit($stateProvider) {
        'ngInject';
        $stateProvider.state('u.bank', {
            url: '/bank',
            templateUrl: temp,
            controller: BankCtrl.name,
            controllerAs: 'vm'
        });
    }
}

export default angular.module('so.app.user.bank', [])
    .config(Config.ConfigInit)
    .controller(BankCtrl.name, BankCtrl)
    .name;
