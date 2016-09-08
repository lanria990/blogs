## 零碎笔记


#### 安全问题关于 target="_blank"


- 原因：
    - 当站点在链接中使用来打开新页卡或窗口时，该站点就通过window.opener API给了新页面对原有窗口的访问入口，并授予了一些权限。
    - 这其中的一些权限被跨域限制拦截了，但是window.location是漏网之鱼

- 解决办法：
    - 原始页面需要在每个使用了target="_blank"的链接中加上一个rel="noopener"属性
    - Firefox rel="noopener noreferrer"
    - safari [js解决](https://github.com/danielstjules/blankshield/blob/master/blankshield.js)