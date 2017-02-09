## borde学习笔记

### border-width
不支持百分比

###  border-style

- solid
- dashed Chrome/Firefox 框高3:1 IE 2:1 修改方法[ CSS3 border-inmet]??
- dotted 点线  Chrome/Firefox 小方块 IE 圆形 ，IE7/8 实现圆角
- double 双线 计算规则   实线区域[永远相等]: x 中间区域: y `2x+y = width;y= x+1;或者y=x-1;`
- inset  内置凹陷
- outset
eg.dotted 圆角
```css
.box{
width:150px;
height:150px;
ovflow:hidden;
}
.dotted {
    width:150px;
    height:150px;
    border:149px dotted #cd0000
}
```

```html
<div class="box">
<div class="dotted"></div>
</div>       
```

eg.double 三条线

```css
.three-line{
width:120px;
height: 20px;
border:60px double;
border-bottom: 20px solid;
}
```
```html
<div class="three-line">
</div>       
```

#### border-color
```css
border-color:inherit; /**[box-shadow,outline等默认继承color 颜色,]**/
```

.eg hover

```css
.add{
border: 1px solid;
color:#ccc;
transition: color .25s;
}
.add:before{
border-top:10px solid ;
}
.add:after{
border-left:10px solid ;
}
.add:hover{
color:#06c;
}
```
```html
<a class="add" href="javascript:;">
</a>       
```


#### border 与background 定位

background 定位 CSS2.1 相对于左上角定位 CSS3 相对于左上角、右下角定位.相对于padding盒子定位
```css
.position-left{
background-image: url();
bacground-position:50px 20px;
}
/**右下角**/
.position-right{
border-right:50px solid transparent ;
background-position: 100% 20px;
}
```

#### border 三角形 梯形

```css
.base{
width: 10px;
height: 10px;
border: 100px solid;
border-color:red green blue orange;
}
.base-triangle{
border: 100px solid;
border-color:transparent transparent blue transparent;
}
/**倒三角形**/
.base-triangle-top{ 
width: 0;
height: 0;
border: 100px solid;
border-color:red transparent transparent transparent;
}
/**梯形 模拟圆角**/
.base-ladder-shaped{
width: 100px;
height: 0;
border: 4px solid;
border-color:red transparent transparent transparent; 
}
.rectangle{
width: 100px;
height: 50px;
background: red;
}
```

```html
<div class="base"></div>

<div>
<div class="base-ladder-shaped"></div>
<div class="rectangle"></div>
<div class="base-ladder-shaped"></div>
</div>

```

#### border 与透明边框

兼容性：IE7+ ，color:transparent IE9+

eg 增加点击区域大写
```css
.checkbox{
border:2px solid transparent;
box-shadow: inset 0 1px,inset 1px 0,inset -1px 0,inset -1px 0;/**模拟边框**/
background-color:#fff ;
color: #d0d0d5;
}
```

drop-shadow png赋色

```css
.icon{filter: drop-shadow( 20px 0 #d0d0d5);} /** overflow hidden text-indent clip margin负值 left负值 隐藏元素，投影也隐藏**/
.icon{
position:relative;
left: -20px;
border-right: 20px solid transparent; /*border 是可算区域*/
filter: drop-shadow( 20px 0 #d0d0d5); } 
```

#### border布局

eg. 有限的标签的标题栏，待补充

eg. border与等高布局，不支持百分比布局

```css
/**/
.box{
border-left: 300px solid #222;
}
.left{
width: 300px;
margin-left: -300px;
float: left;
}
```
```html
<div class="box">
<nav class="left">
<h3>导航</h3>
</nav>
<section>
<div class="module">模块1</div>
</section>
</div>
```
