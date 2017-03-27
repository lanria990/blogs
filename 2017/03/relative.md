---
layout: post
title: relative
date: 2017-03-20
tag: relative 
---


#### relative
relative 是相对于自身原来位置的移动，还会占据原来的空间

#### relative & absolute
 
 absolute相对于relative定位
影响
- top/left/right/bottom
- z-index
- 限制absolute超出overflow布局

#### relative & fixed
影响
- z-index
 
#### relative  z-index
 
 z-index 值大的在顶层显示
 z-index auto 按dom的解析顺序显示
 z-index auto,absolute :
 - absolute显示
    - absolute 的z-index 值
    - relative 解析的顺序
    - absolute 解析的顺序

> IE6/7中会有一定的问题,会按照 relative 解析的顺序
 

#### 应用

relative 会影响absolute或者fixed的布局，所以避免使用 relative

- 使用margin布局替代
- 最小化relative
```html
<div style="position: relative">
    <div style="position: absolute">
    <!--do something-->
    </div>
</div>
```
