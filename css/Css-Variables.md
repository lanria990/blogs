## CSS 变量
[原文链接 CSS变量和预处理变量有什么不同](http://www.zcfy.cc/article/1567)


#### --variables
1.Sass/Less 等都提供CSS预处理器，提供变量.原生优点动态计算布局，js控制

eg.
```css
:root {
  --color: red;
}
2 {
  color: var(--color);
}
```

2.`color:var(--color,red)`可以进行重定义

3.具有级联关系，优先级和其他CSS一致

```css
:root {
  --color: red;
}
body {
  --color: orange;
}
h2 {
  color: var(--color);//orange
}
```
4.[兼容性查询-caniuse](http://caniuse.com/#feat=css-variables)


#### 技巧用法


1.[js 控制 css 变量 demo](./demo/css-variables.html)

2.[CSS 变量实现自动前缀 demo ](./demo/css-prefix.html)






