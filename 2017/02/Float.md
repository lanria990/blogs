---
layout: post
title: Float 学习笔记
category: CSS3
---


#### Float特性



- 包裹与破坏:收缩，坚挺，隔绝，父元素高度塌陷（absolute,）
- 文字环绕效果
-  块状化元素

#### BFC [块极化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

BFC布局规则的：“在一个块级排版上下文中，盒子是从包含块顶部开始，垂直的一个接一个的排列的”

```css
{
display:inline-block; /*inline-block/table-cell/table-caption/flex /inline-flex/flow-root*/
 position:absolute;  /*absolute/fixed/sticky*/
 overflow:hidden;/*scroll/hidden*/
 float:left;/*right/left*/
}
```

作用：避免margin穿透，清除浮动，阻止文本换行等