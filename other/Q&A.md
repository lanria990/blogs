1. CSS 盒子模型，绝对定位和相对定位

1）清除浮动，什么时候需要清除浮动，清除浮动都有哪些方法

A: 需要高度的时候清除,方法：` clear:both ; overflow:hidden; display:table; visible：hidden; ...`

2）如何保持浮层水平垂直居中

A:浮层垂直居中
  	transform:translate(-50%,-50%)
  	flexbox[parent]
  		dispay:-webkit-flex
  		align-items:center
  		just-content:center
  	table-cell[parent ]
  		display:table-cell
  		vertical-align:middle
  		text-align: center;

3）position 和 display 的取值和各自的意思和用法

A:
    static: 默认布局,
    relative：相对布局，没有脱离文档流,还占有位置
    absolute：绝对布局，脱离文档流,针对最近的relative布局
    fixed：固定布局，根据窗口固定，脱离文档流;
    ````````````````````````````````````````````
    inline：行内布局，margin、padding无效,
    inline-block：行内块布局，拥有行内和块的特性,margin和padding值有效
    block：独占一行
    none:不占布局,
    table:table布局,
    grid:网格布局,网格允许我们根据区域来排列页面上的元素，
    flex:弹性布局，根据网页的大小内容变化,
    inline-flex:行内弹性布局


4）样式的层级关系，选择器优先级，样式冲突，以及抽离样式模块怎么写，说出思路，有无实践经验

A:

2. JavaScript 基础

1）JavaScript 里有哪些数据类型，解释清楚 null 和 undefined，解释清楚原始数据类型和引用数据类型。比如讲一下 1 和 Number(1) 的区别


A:  string object number boolean symbol null undefined    
    null :空值
    undefined：不存在的值，默认window对象，可被重新赋值，void 0 ===undefined
    null & undefined :类型不一致Object和String类型，
    引用数据类型Number(1) 加了一层转换new Number(1) toNumber方法被调用时，如果参数是数字，直接返回参数(不经过转换). 

2）讲一下 prototype 是什么东西，原型链的理解，什么时候用 prototype

A: prototype 中的原型最终指向都是 Object.prototype,
   对象都有prototype的属性，这个属性是Object对象
   
   prototype 优点可以是不会额外产生内存，所有实例化后的对象都会从原型上继承这个方法。
   也就是需要一个子类拥有父类的某些特性（同种特性可以覆盖），又可以添加自己的特性，而不会影响父类时候使用prototype


3）函数里的this什么含义，什么情况下，怎么用。
    
A:   1) this 关键字 2)函数运行，自动生成内部对象 3) this值随函数变化 4) this指的是，调用函数的那个对象


3）apply 和 call 什么含义，什么区别？什么时候用。

A: 改变函数的运行环境，区别传参的区别，第一个参数都是传函数的环境，其他参数aplly 单个传，call 传数组，使用条件需要改变函数的运行环境

4）数组和对象有哪些原生方法，列举一下，分别是什么含义，比如链接两个数组用哪个方法，删除数组的质定项。

A: array : sort splice split reserve ,reduce,forEach,every,some,map,contact,filter,fill,push,pop,join,shift,unshift,valueOf,toString
        constructor 返回对创建此对象的数组函数的引用。
        length      设置或返回数组中元素的数目。
        prototype   使您有能力向对象添加属性和方法。
    
  Object： keys,assign,created,entries,values,getOwnPropertyNames(),valueOf,toString...
  splice (i,n,m) i,删除的起始项，n删除的个数,m填充或替补的者值 ,改变自身 
  contact:连接数组 arr.contact(arr1) ，// arr[1,2,3],arr1[4],[1,2,3,4]
    
3. JavaScript 的面向对象

1）JS 模块包装格式都用过哪些，CommonJS、AMD、CMD、KMD。定义一个JS 模块代码，最精简的格式是怎样。

2）JS 怎么实现一个类。怎么实例化这个类。

3）是否了解自定义事件。jQuery里的fire函数是什么意思，什么时候用。

4）说一下了解的js 设计模式，解释一下单例、工厂、观察者。

5）ajax 跨域有哪些方法，jsonp 的原理是什么，如果页面编码和被请求的资源编码不一致如何处理？

4. 开源工具

1）是否了解开源的工具 bower、npm、yeoman、grunt、gulp，有无用过，有无写过，一个 npm 的包里的 package.json 具备的必要的字段都有哪些（名称、版本号，依赖）

2）fiddle、charles 有没有用过，什么时候用

3）会不会用 ps 扣图，png、jpg、gif 这些图片格式解释一下，分别什么时候用。是否了解webp

4）说一下你常用的命令行工具

5）会不会用git，说上来几个命令，说一下git和svn的区别，有没有用git解决过冲突

5. 计算机基础

1）说一下网络五层模型（HTTP协议从应用层到底层都基于哪些协议），HTTP 协议头字段说上来几个，缓存字段是怎么定义的，http和https的区别，在具体使用的时候有什么不一样。是否尽可能详细的掌握HTTP协议。

2）cookies 是干嘛的，服务器和浏览器之间的 cookies 是怎么传的，httponly 的 cookies 和可读写的 cookie 有什么区别，有无长度限制

3）从敲入 URL 到渲染完成的整个过程，包括 DOM 构建的过程，说的约详细越好。

4）是否了解Web注入攻击，说下原理，最常见的两种攻击（XSS 和 CSRF）了解到什么程度。

5）是否了解公钥加密和私钥加密。如何确保表单提交里的密码字段不被泄露。验证码是干嘛的，是为了解决什么安全问题。

6）编码常识：文件编码、URL 编码、Unicode编码 什么含义。一个gbk编码的页面如何正确引用一个utf8的的资源

6. 考察学习能力和方法

1）你每天必须登录的网站（前端技术相关）是什么？

2）前端技术方面看过哪些书，有无笔记，都有哪些收获。

3）收藏了哪些代码片段？

4）怎么理解前端技术的大趋势？自己再做哪方面的知识储备？

5）是否了解或精通其他（后端）的编程语言？

6）做过的项目有没有什么（视觉、交互）美感？什么是美？你觉得让你自己赏心悦目的网站或应用有哪些？

7）做项目有没有遇到哪些印象深刻的技术攻关，具体遇到什么问题，怎么找答案的，最后怎么解的。
 