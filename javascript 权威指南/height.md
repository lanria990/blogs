## javascript 宽、高问题

高度：clientHeight,offsetHeight,scrollHeight,style.height,screen.height

对象：document.documentElement,document.body,window

概念：视口坐标[窗口坐标] 、文档坐标、屏幕高度

#### 视口坐标

浏览器显示文档内容的部分，浏览器去除菜单、工具条、标签页、滚动条等部分，会随窗口大小改变。


#### 文档坐标

包含滚动隐藏部分，文档坐标 = 视口坐标+/-滚动坐标。

#### 屏幕高度

指显示器的分辨率，获取方法
```javascript
window.screen.height;

//screen 包含
// { availWidth: 1920, availHeight: 1200, width: 1920, height: 1200, colorDepth: 24, pixelDepth: 24, top: 0, left: 1920, availTop: 0, availLeft: 1920 }

```

#### 获取视口宽高

```javascript

//获取页面的视口位置 返回值
//{ x: 0, y: 0, width: 616, height: 462, top: 0, right: 616, bottom: 462, left: 0 }
document.documentElement.getBoundingClientRect()

/*获取页面的视口位置 返回值只读
* {0: ClientRect, length: 1}
*ClientRect:{ x: 0, y: 0, width: 616, height: 462, top: 0, right: 616, bottom: 462, left: 0 }
*/
document.documentElement.getClientRects()

document.documentElement.clientHeight

```

#### 获取文档宽高

`document.body.scrollHeight`:获取到的

```javascript


document.documentElement.offsetHeight;

```

body等元素上算法offsetHeight = padding + height + border = clientHeight + 滚动条 + border

scrollHeight = padding + height +  margin;
