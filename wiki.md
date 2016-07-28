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