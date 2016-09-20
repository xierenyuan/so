/**
 * 用户首页控制器
 * 
 * @export
 * @class UserHomeCtrl
 */
import bannerImg from 'assets/images/banner.gif';
export default class UserHomeCtrl {
    constructor() {
        'ngInject';
        this.bannerImgSrc = bannerImg;
    }
}