/**
 * 用户首页控制器
 * 
 * @export
 * @class UserHomeCtrl
 */
import bannerImg from 'assets/images/banner.gif';
import adImg from 'assets/images/home/ljbx.png';
import kksjImg from 'assets/images/home/kksj.png';
import yqhyImg from 'assets/images/home/yqhy.png';
export default class UserHomeCtrl {
    constructor() {
        'ngInject';
        this.bannerImgSrc = bannerImg;
        this.adImgSrc = adImg;
        this.kksjImgSrc = kksjImg;
        this.yqhyImgSrc = yqhyImg;
    }
}