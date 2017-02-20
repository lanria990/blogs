---
layout: post
title: 从达标到卓越 —— API 设计之道 阅读笔记
category: API
---

[从达标到卓越 —— API 设计之道](http://taobaofed.org/blog/2017/02/16/a-guide-to-api-design/)

#### 规则

- 达标：词法和语法
    - 正确拼写
    - 准确用词
    - 注意单复数
    - 不要搞错词性
    - 处理缩写
    - 用对时态和语态
- 进阶：语义和可用性
	- 单一职责
	- 避免副作用
	- 合理设计函数参数
	- 合理运用函数重载
	- 使返回值可预期
	- 固化术语表
	- 遵循一致的 API 风格
- 卓越：系统性和大局观
	- 版本控制
	- 确保向下兼容
	- 设计扩展机制
	- 控制 API 的抽象级别
	- 收敛 API 集
	- 发散 API 集
	- 制定 API 的支持策略
	
 正确拼写 (IDE 的 typo 提示（单词拼写错误提示）)
 
 准确用词 
 理解 API 的作用和 上下文场景，成对出现的正反义词不可混用
 eg.
  message、notification、news 
  
  message:一般指双方通信的消息，是内容载体。而且经常有来有往、成对出现。比如 postMessage() 和 receiveMessage()
  
  notification: 通知 new NotificationManager()
  news：较长的消息，比 notification 更重量级 getTopNews
  feed：订阅 fetchWeitaoFeeds
  
  
常成对出现的词
  
- in & out
- open & close
- show & hide
- success & failure
- previous & next
- forward & backward

