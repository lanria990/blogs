---
layout: post
title: 浅谈Web客户端追踪 阅读笔记
date: 2017-03-16
tag: WEB安全 
---

#### Cookie追踪

1.cookie
2.Evercookie

Evercookie将Cookie通过多种机制保存到系统多个地方，如果用户删除其中某几处的Cookie， Evercookie仍然可以恢复Cookie，如果开启本地共享对象(Local Shared Objects)，Evercookie甚至可以跨浏览器传播
3. Cookie同步