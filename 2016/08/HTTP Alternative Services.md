## HTTP Alternative Services 介绍

[原文](https://imququ.com/post/http-alt-svc.html)，工具文档[httpwg.org](http://httpwg.org/specs/),[ tools.ietf.org ](https://tools.ietf.org/),[HTTP Alternative Services](http://httpwg.org/specs/rfc7838.html)


#### 解决的问题

- 机房流量过大问题

- 访问响应时间问题

- 修改解析时，由于缓存无法及时生效问题。


Dns+TTL也可以解决，但TTL太短影响访问速度。太长dns无法及时修改。


#### 原理

HTTP Alternative Services 服务端可以将自己的替代服务地址以协议规定的方式告诉浏览器，对于支持这个协议的浏览器来说，后续请求都会使用新地址。发起访问时，访问离自己最近的服务器。

HTTP Alternative Services 只改变浏览器获取资源的网络方式，上层应用不会感觉到任何变化。


#### 使用方法


- HTTP/1响应头部加上，Alt-Svc 头部必须依附于首次响应，只有从第二个请求开始浏览器才会使用替代服务地址

`Alt-Svc: h2="alt.example.com:8000", h2=":443"; ma=2592000; persist=1`

- HTTP/2响应头部加上，ALTSVC 帧可以独立发送，浏览器从首次请求开始就能用上新地址

` Alt-Svc: h2="alt.example.com:8000", h2=":443"; ma=2592000; persist=1`



#### 兼容性

firefox

