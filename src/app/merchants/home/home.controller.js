/**
 *
 * home 控制器
 * @export
 * @class HomeCtrl
 * @author xierenhong
 */
export default class MHomeCtrl {
  constructor($cordovaBarcodeScanner, $scope,$state) {
        this.$cordovaBarcodeScanner = $cordovaBarcodeScanner;

      $scope.toTab= function (name) {
        console.log($state)
        $state.go(name);
      }
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
