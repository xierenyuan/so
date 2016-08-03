/**
 * 商户模块入口
 * @author xierenhong
 */
import MerchantsConfig from './merchants.config';
import home from './home/index.js';
export default angular.module('so.app.merchants', [home])
  .config(MerchantsConfig.ConfigInit)
  .name;
