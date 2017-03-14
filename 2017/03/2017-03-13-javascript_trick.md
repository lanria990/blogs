---
layout: post
title: 你不知道的前端新特性 阅读笔记
date: 2017-03-13
tag: javascript
---

#### 原文PPT


<iframe src="https://ppt.baomitu.com/embed/84a42e3e?style=dark" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


#### [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams)

eg.

```javascript
   let params = new URLSearchParams('src=so.com&data=1&data=2'); //'src=so.com&data=1&data=2'
    params.get('src');//so.com
   params.has('src'); //true
   params.get('data'); //1
   params.getAll('data'); // ["1", "2"]
   params.append("q","hello");//undefined
   params.append("data","world");//undefined
   params.delete('src');//undefined
   params.toString();//data=1&data=2&q=hello&data=world
   params.keys()//[object Iterator]
  
   for(let key of params.keys()) { 
     console.log(key); //data,data,q,data
   }
    params.entries()//[object Iterator]
   for(let pair of params.entries()) {
      console.log(pair[0]+ ', '+ pair[1]); //data, 1 data, 2 q, hello data, world
   }
   params.values()//[object Iterator]
   for(let value  of params.values()) {
         console.log(value ); //1, 2, hello, world
      }
   params.set('baz',2)
   params.toString();//data=1&data=2&q=hello&data=world&baz=2
```

<iframe src="http://caniuse.com/#search=URLSearchParams" width="100%" height="500"></iframe>  

#### [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL)

```javascript
let url = new URL("https://example.org/💩?x=1");
  url.pathname // "/%F0%9F%92%A9"
  url.host // example.com
  url.searchParams.get('x') // url.searchParams = new URLSearchParams('x=1')
  for(let key in url){
      console.log(`${key},type:${typeof url[key]},value:${url[key]}`);
  }
```

####  懒加载 [IntersectionObserver](./IntersectionObserver.md)


- 在用户关闭页面的时候打点

[navigator.sendBeacon]()

```javascript
window.addEventListener('unload', logData, false);
function logData() {
  navigator.sendBeacon("/log", analyticsData);
}

```
- 没有JS如何统计链接的点击
[a](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
[a element chrome](https://developers.google.com/webmasters/state-of-the-web/2005/element-a)

```html
<a href="https://www.so.com"
     ping="https://s.360.cn/click">360搜索</a>
```

> download 属性，rel 属性


- 怎样让一个元素在离开viewport时停在指定位置？

```css
.sticky{
position: -webkit-sticky;
position: sticky;
}
```
<script async src="//jsfiddle.net/yangjl/hy67va0a/embed/html,css,result/"></script>

- 原生JS怎样删除一个节点

-  清除浮动的方法

```css
.fix{
display: flow-root;
}
```
 CSS3 中，对块格式化上下文这个概念做了改动，将 "Block formatting context" 叫做 "flow root"

[常规流](http://w3help.org/zh-cn/kb/010/)

[兼容性查询](http://caniuse.com/#search=flow-root)
?Chrome 58+ 不兼容

- 字符串的前后位置添加字符串到指定位数

```javascript
str.padStart(targetLength [, padString])
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc" 
'abc'.padEnd(8, "0");     // "abc00000"
```

[字符串的扩展](http://es6.ruanyifeng.com/#docs/string)

- 在浏览器中用JS分享内容到微信

```javascript
navigator.share({
      title: document.title,
      text:  "Hello World",
      url: window.location.href
  }).then(()  => console.log('Successful share'))
  .catch(()  => console.log('Error sharing:', error));
```