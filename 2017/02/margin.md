## margin 

#### margin 百分比

普通元素的百分比指margin相对于容器的宽度计算

绝对定位元素百分比margin值相对于第一个定位祖先元素（rleative/absolute/fixed）计算

```css
img{margin:10%}
.absoulte-img{margin:10%;postion:absolute}
```

eg.自适应的矩形

margin 重叠，overflow阻止margin重叠
```css
.box{background-color: olive;overflow: hidden;}
.box > div{margin: 50%;}
```

```html
<div class="box">
<div></div>
</div>

```

#### margin重叠

1.block水平元素（不包含 float absolute）
2.只发生在垂直方向（writing-model 可以修改重叠的方向）margin-bottom margin-top

条件：
1 相邻兄弟
2 父集和 第一个或最后一个元素
3.空的block元素（自己和自己重叠）


eg.父集和 第一个或最后一个元素
```css
.father{
background: #f0f093;
}
```


```html


<div class="father">
<div class="son" style="margin-top: 80px;"></div>
</div>

<div class="father" style="margin-top: 80px;">
<div class="son" ></div>
</div>
<div class="father" style="margin-top: 80px;">
<div class="son" style="margin-top: 80px;"></div>
</div>
```

margin-top 重叠

- 父元素非块状格式化上下文元素 （格式化上下文元素：bfc元素）??
- 父元素 没有border-top设置
- 父元素 没有padding-top设置
- 父元素 和第一个元素没有inline元素分隔  (inline元素:文字、图片等)

margin-bottom 重叠

- 父元素非块状格式化上下文元素 （格式化上下文元素：）
- 父元素 没有border-bottom 设置
- 父元素 没有padding-bottom 设置
- 父元素 和最后一个元素没有inline元素分隔 
- 父元素没有设置height min-height max-height

eg.解决margin-top重叠

```css
.father{
background: #f0f093;
}
```


```html
<div class="father" style="overflow: hidden">
    <div class="son" style="margin-top: 80px;"></div>
</div>

<div class="father" style="border: 1px red;">
    <div class="son" style="margin-top: 80px;"></div>
</div>
<div class="father" style="padding : 1px;">
    <div class="son" style="margin-top: 80px;"></div>
</div>
<div class="father"> &nbps;
<div class="son" style="margin-top: 80px;"></div>
</div>
```

```html
<div class="father" style="overflow: hidden">
    <div class="son" style="margin-bottom: 80px;"></div>
</div>

<div class="father" style="border: 1px red;">
    <div class="son" style="margin-bottom: 80px;"></div>
</div>
<div class="father" style="padding : 1px;">
    <div class="son" style="margin-bottom: 80px;"></div>
</div>
<div class="father" >
<div class="son" style="margin-bottom: 80px;"></div> &nbps;
</div>
<div class="father" style="height: 100px;">
<div class="son" style="margin-bottom: 80px;"></div>
</div>
```

- 空的block元素（自己和自己重叠）条件

- 元素没有设置 border 值
- 元素没有设置 padding 值
- 元素内没有 inline 元素
- 元素没有设置 height min-height [max-height??] 值


margin 计算规则 

1 正正取大值
2 正负值取相加值
3 负负值取最负值

```css
/*最后一个元素移除或位置调换，不会破坏原来布局*/
.list{
margin-top: 15px;
margin-bottom: 15px;
}
```


#### margin auto