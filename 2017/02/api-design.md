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
	
 ##### 正确拼写 (IDE 的 typo 提示（单词拼写错误提示）)
 
 准确用词 
 理解 API 的作用和 上下文场景，成对出现的正反义词不可混用
 eg.
  message、notification、news 
  
  message:一般指双方通信的消息，是内容载体。而且经常有来有往、成对出现。比如 postMessage() 和 receiveMessage()
  
  notification: 通知 new NotificationManager()
  news：较长的消息，比 notification 更重量级 getTopNews
  feed：订阅 fetchWeitaoFeeds
  
  
 ##### 常成对出现的词
  
- in & out
- open & close
- show & hide
- success & failure
- previous & next
- forward & backward


 ##### 单复数规则

- 数据结构: 数组，集合，列表
- 方法命名用动词、属性命名用名词、布尔值类型用形容词（或等价的表语）
- Map,Dictionary [单词本身含有类似集合的意思，就不需要使用复数]

 ##### 正确使用词性
 
- n.名词 ：属性名
- v.动词 ：方法名
- adj.形容词 （无形容词，以过去分词充当）：布尔值
- adv.副词 （无副词，以不定式充当）

#### 处理缩写

首字母缩写词的所有字母均大写。（如果某个语言环境有明确的业界惯例，则遵循惯例。）

JavaScript:DOM,ID,jQuery,BOM(遇到补充)

#### 用对时态和语态

尽量使用主动语态

[before,ing,after],[will,did]


##### 单一职责

- 文件
- 类
- 函数

##### 避免副作用

- 函数本身的运行稳定可预期。
- 函数的运行不对外部环境造成意料外的污染

- 幂等的 getter 型函数

- [模块沙箱机制](http://www.cnblogs.com/suckmyballs/archive/2010/09/23/1833519.html)，严格限定模块对外部作用域的修改；
- 对关键成员作访问控制（access control），冻结写权限等等。【js原型链，怎么处理Object[Object]类型参数？】


#### 合理设计函数参数

可省略的参数后置，以及 为可省略的参数设定缺省值,
合并同类型的参数
易用

#### 固化术语表

标准术语:pic,path,on,off,emit,modile

#### 设计扩展机制