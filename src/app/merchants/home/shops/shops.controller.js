/**
 * 
 * 商铺控制器
 * @export
 * @class ShopsCtrl
 * @author xierenhong
 */
//import logoPng from 'assets/logo.png';
export default class ShopsCtrl {
    constructor($ionicPopup, $cordovaCamera) {
        'ngInject';
        this.$ionicPopup = $ionicPopup;
        this.msg = '我只是一段描述 2333';
        //this.imgUrl = logoPng;
        this.imgUrl = undefined;
        let self = this;
        alert('2333');
        // document.addEventListener('deviceready', function() {
        //     alert('deviceready');
        //     let options = {
        //         quality: 50,
        //         destinationType: Camera.DestinationType.DATA_URL,
        //         sourceType: Camera.PictureSourceType.CAMERA,
        //         allowEdit: true,
        //         encodingType: Camera.EncodingType.JPEG,
        //         targetWidth: 100,
        //         targetHeight: 100,
        //         popoverOptions: CameraPopoverOptions,
        //         saveToPhotoAlbum: false,
        //         correctOrientation: true
        //     };
        //     self.onCamerg = () => {
        //         alert('拍照');
        //         $cordovaCamera.getPicture(options).then(
        //             (imageData) => {
        //                 alert('拍照成功！');
        //                 self.imgUrl = `data:image/jpeg;base64,${imageData}`;
        //             },
        //             (err) => {
        //                 self.msgError = err;
        //             });
        //     };
        // });

    }
    sayHello() {
        this.$ionicPopup.alert({
            title: '提示！',
            template: 'so hello 我在方法里 0.0'
        });
    }
}