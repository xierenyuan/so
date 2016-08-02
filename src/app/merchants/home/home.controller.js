/**
 * 
 * home 控制器
 * @export
 * @class HomeCtrl
 * @author xierenhong
 */
export default class MHomeCtrl {
    constructor($cordovaBarcodeScanner) {
        this.$cordovaBarcodeScanner = $cordovaBarcodeScanner;
    }

    /**
     * 二维码扫一扫 
     */
    onScan() {
        console.log('二维码烧苗');
        let promise = this.$cordovaBarcodeScanner
            .scan();
        promise.then(
            (barcodeData) => {
                this.barcodeData = barcodeData;
            }, (error) => {
                alert('失败');
            });
    }
}