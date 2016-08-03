/**
 * 商户模块入口
 * @author xierenhong
 */
import MerchantsConfig from './merchants.config';
import home from './home';
import homeCrowd from './home.crowd';
console.log(homeCrowd);
export default angular.module('so.app.merchants', [home, homeCrowd])
    .config(MerchantsConfig.ConfigInit)
    .name;