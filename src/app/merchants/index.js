/**
 * 商户模块入口
 * @author xierenhong
 */
import MerchantsConfig from './merchants.config';
import home from './home';
import homeCrowd from './home.crowd';
import homeConsume from './home.consume';
import my from './my';
export default angular.module('so.app.merchants', [home, homeCrowd,homeConsume,my])
    .config(MerchantsConfig.ConfigInit)
    .name;
