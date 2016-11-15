## 零碎笔记


#### 安全问题关于 target="_blank"


- 原因：
    - 当站点在链接中使用来打开新页卡或窗口时，该站点就通过window.opener API给了新页面对原有窗口的访问入口，并授予了一些权限。
    - 这其中的一些权限被跨域限制拦截了，但是window.location是漏网之鱼

- 解决办法：
    - 原始页面需要在每个使用了target="_blank"的链接中加上一个rel="noopener"属性
    - Firefox rel="noopener noreferrer"
    - safari [js解决](https://github.com/danielstjules/blankshield/blob/master/blankshield.js)

#### xss http 防御

[Content Security Policy 入门教程](http://www.ruanyifeng.com/blog/2016/09/csp.html)


http head Content-Security-Policy [详细](https://content-security-policy.com/)

使用方式：Apache，还有<meta>

```html
<meta http-equiv="Content-Security-Policy" content="script-src 'self'; object-src 'none'; style-src cdn.example.org third-party.org; child-src https:">
```


##### 参数

- `default-src`:'self'
- `script-src`:'self' 'js.example.com'
- `style-src`:'self'/'style.example.com'
- `img-src`:'self'/'img.example.com'
- `connect-src`:'self' XMLHttpRequest,WebSocket,EventSource
- `font-src`:'self',font.example.com
- `object-src`:'self'  object>, <embed> or <applet>
- `media-src`:media.example.com HTML5 <audio>, <video>
- `sandbox`:allow-forms/allow-scripts/allow-top-navigation/allow-same-origin, iframe[sandbox]
- `report-uri`:'/some-report-uri'  使用POST方法报告当前注入行为给哪个网址，Content-Security-Policy-Report-Only 需要配合使用
- `child-src`:'self'  `<frame> <iframe>`
- `form-action`:'self'   `<form>` action
- `frame-ancestors`:'none'  'none' == X-Frame-Options: DENY . `<frame> <iframe> <object> <embed> <applet>`
- `plugin-types`:'application/pdf' <object>、<embed>. To load an <applet> you must specify application/x-java-applet.


###### 源列表引用
|Source Value| Example| Description |
|----|----|----|
| *	-|img-src *	|Wildcard, allows any URL except data: blob: filesystem: schemes.|
| 'none'	|object-src 'none'	|Prevents loading resources from any source.|
| 'self'	|script-src 'self'	|Allows loading resources from the same origin (same scheme, host and port).|
| data:	|img-src 'self' data:	|Allows loading resources via the data scheme (eg Base64 encoded images).|
|domain.example.com |	img-src domain.example.com	|Allows loading resources from the specified domain name.|
|*.example.com	|img-src *.example.com	|Allows loading resources from the any subdomain under example.com.|
|https://cdn.com	|img-src https://cdn.com	|Allows loading resources only over HTTPS matching the given domain.|
|https:	-|img-src https:	|Allows loading resources only over HTTPS on any domain.|
|'unsafe-inline'	|script-src 'unsafe-inline'	|Allows use of inline source elements such as style attribute, onclick, or script tag bodies (depends on the context of the source it is applied to)|
|'unsafe-eval'	|script-src 'unsafe-eval'	|Allows unsafe dynamic code evaluation such as JavaScript eval()|

eg. `default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self';`


#### [CSP](https://zhuanlan.zhihu.com/p/23011855)

CSP的基本假设之一就是在策略白名单中的域名只会提供安全的内容，因此从理论上来说攻击者不应该能够将有效的JavaScript注入到白名单里来源的响应中

#### 危险行为

1、JSONP中带有用户可控的回调
2、在全局window上执行数据
3、作为安全手段的路径限制
4、白名单数量越大，越难保证JSONP和AngularJS造成的安全问题




##### 关于在后期维护过程中 css 和 Js 耦合问题

1、对于js web交互的时候统一命名方法，使用active,selected,disabled,checked,on,off,in,out等命名作为状态类名的web交互开发。
2、JS和CSS分开，可以更好的实现CSS的压缩


参考
[基于active,checked等状态类名的web前端交互开发](http://www.zhangxinxu.com/wordpress/2016/10/classname-active-checked-web-ux-develop/)
[精简高效的CSS命名准则/方法](http://www.zhangxinxu.com/wordpress/2010/09/%E7%B2%BE%E7%AE%80%E9%AB%98%E6%95%88%E7%9A%84css%E5%91%BD%E5%90%8D%E5%87%86%E5%88%99%E6%96%B9%E6%B3%95/)