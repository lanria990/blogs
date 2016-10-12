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