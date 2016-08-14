# 目录结构  
<pre>
    ├── dist                           //发布文件夹
    ├── bower_components               //第三方资源文件夹 npm 版本没有的
    ├── src                            //项目源文件
    │    ├── app                       //项目源码    
    │         ├── ao                   //用户app
    │         ├── merchants            //商家
    │            ├── home              //商铺
    │            ├── index.js          //商铺入口
    │            ├── merchants.config  //商铺配置
    │         ├── index.js             //app 入口    
    │    ├── assets                    //静态资源 
    │    ├── components                //组件库 
    │    ├── config                    //配置 全局配置 路由等 
    │    ├── lib                       //第三方包 ngCordova 等文件 
    │    ├── sass                      //通用样式
    │    ├── utils                     //工具集合
    │    └── bootstrap.js              //项目入口 
    ├── package.json                   //包文件
    ├── index.tpl.html                 //html 首页模板
    ├── README.md                      //主文件入口
    │
    └──
</pre>  


# vscode 运行

## 1
```bash
    brew install ios-webkit-debug-proxy
```
## 顶部状态栏 影响20px 的问题
``` java
- (void)viewWillAppear:(BOOL)animated
{
    // View defaults to full size.  If you want to customize the view's size, or its subviews (e.g. webView),
    // you can do so here.
    if ([[[UIDevice currentDevice] systemVersion] floatValue] >= 7) {
        CGRect viewBounds = [self.webView bounds];
        viewBounds.origin.y = 20;
        viewBounds.size.height = viewBounds.size.height - 20;
        self.webView.frame = viewBounds;
    }
    [super viewWillAppear:animated];
    
}
```

## 顶部底部拖动问题影响
```xml
 <preference name="WebViewBounce" value="false" />
 <preference name="DisallowOverscroll" value="true" />
```

## 坑记录
>  重要重要重要 。。。。webpack loader 在base 中有了后 相对应的 别的位置的需要删除  如果别的有了 相对应的 base的以要删除
