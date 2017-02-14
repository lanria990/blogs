---
layout: post
title: 下一代 Web 应用 阅读笔记
category: Web Apps
---

[阅读原文-下一代 Web 应用](https://huangxuan.me/2017/02/09/nextgen-web-pwa/)


#### Progressive Web Apps

Progressive Web Apps

- 离线使用 Service Worker 与 Cache Storage
- 添加到主屏、全屏执行的 Web App Manifest
- 可以设置启动屏
- 可以推送通知
- 可以被安装在桌面和应用平级


[第一份公开 Working Draft,W3C Web App Manifest ](https://www.w3.org/TR/2013/WD-appmanifest-20131217/)

```javascript
{
  "short_name": "Manifest Sample",
  "name": "Web Application Manifest Sample",
  "icons": [{
      "src": "launcher-icon-2x.png",
      "sizes": "96x96",
      "type": "image/png"
   }],
  "scope": "/sample/", //定义了 web 应用的浏览作用域
  "start_url": "/sample/index.html",
  "display": "standalone",
  "orientation": "landscape" //锁定屏幕旋转
  "theme_color": "#000",
  "background_color": "#fff",
  //...
}

```
```html
<!-- document -->
<link rel="manifest" href="/manifest.json">
```

#### Service Worker

需要在HTTPS 请求下注册

1. 拦截、处理、响应流经的 HTTP 请求
2. 自由管理 HTTP 请求文件粒度的缓存
3. 提供类似fetch功能

- Service Worker 的生命周期

1. 安装[资源预先下载并缓存到 Cache Storage ]、激活

#### 资料

[ Progressive Web Apps ](https://huangxuan.me/sw-101-gdgdf/)
[ Demo ](https://github.com/Huxpro/sw-101-gdgdf)
[ APIS ](https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/)