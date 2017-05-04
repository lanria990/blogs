## 重拾HTML

#### 嵌套

1. `<a>` 标签无法嵌套`<a>`
2. 属性值如果为空可以省略 `<input  disabled /> `


#### DOM 树建立

![DOM](https://html.spec.whatwg.org//images/parsing-model-overview.svg)

HTML 解释器 :字符流 > 解码 > 字节流 > 词语【词法分析器构建 token】> 节点【语法分析器构建】 > DOM树
CSS解释器 ： CSS字符串被CSS解释器处理后变成渲染引擎的内部规则表示。【样式规则 > webkit保存 > DOM建立 样式匹配规则】
JavaScript引擎：
- 编译器 ： 代码编译成抽象语法树，有些引擎会将抽象语法树转换 字节码
- 解释器 ：执行字节码，依赖垃圾回收机制
- JIT ： 字节码或者抽象语法树转换为本地代码 【V8引擎】
- 垃圾回收机制，分工具

布局：计算RenderObject对象的位置，大小信息
绘图： 将构建好的渲染内部表示模型使用图形库绘制出来


url 到构建完DOM树

1. 网页的url,获取网页资源
2. 加载器依赖网络模块建立，发出请求并相应
3. 接受到网页或者资源数据【预扫描解析资源，同步加载构建DOM】
4. 网页被HTML解释器 构建成词语
5. 词语 被解释器 构建成节点，节点被组织形成DOM
6. 如果节点是Javascript代码，则暂停DOM节点构建。调用JavaScript引擎
7. JavaScript代码可能修改HTML，执行4-6过程。【document.write】
8. 图片、css、视频等，调用资源加载异步的与DOM构建是同时进行，JS需要停止当前DOM树的构建，直到Javascript的资源被加载并被Javascript引擎解释执行后才继续DOM树

事件形成时间：`DOMContent` > `onload`
`<script>`
- async: 异步执行和CSS资源类似，如果当前添加 “async” 属性的脚本文件依赖有其他的脚本文件，可能会导致添加 “async” 属性的脚本文件先于依赖脚本执行，即使依赖脚本先于添加 “async” 属性的脚本文件被定义
- defer: 延迟到DOM树建立才执行代码


构建RenderObject树

1. CSS文件 > CSS解释器 > 规则 > DOM树附加样式【RenderObject同时创建RenderLayer树】>虚拟的绘图上下文【2D和3D图形库】