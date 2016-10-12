## javascript权威指南 笔记


#### ie 条件注释

@if @else @end 

```javascript
<!--[if IE]>
<![endif]-->

<!--[if lte IE 7]>

<![endif]-->

<!-- 条件注释 -->

 @_jscript //IE 中总是 true
   /*@cc_on
        @if(@_jscript) alert('@_jscript:'+@_jscript);
    @end
    @*/

```


#### 同源策略 

协议、主机、url端口号

跨域策略

1、两个页面同时设置document.domain 为[顶级|相同]域名
2、调用 window postMessage
3、

#### 安全策略 html5

html5内容安全，

iframe sandbox

"" 自动禁用脚本 
allow-scripts 允许使用脚本，

allow-same-origin 允许 iframe 内容被视为与包含文档有相同的来源

allow-top-navigation	允许 iframe 内容从包含文档导航（加载）内容

allow-forms	允许表单提交


#### window 


setTimeout、clearTimeout,setInterval/clearInterval


### 客户端javascript

#### [Node.nodeType](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType)

共有12个值，2/4/5/6/10/12已被弃用

- Node.ELEMENT_NODE	1	一个 元素 节点，例如 <p> 和 <div>。
- Node.TEXT_NODE	3	Element 或者 Attr 中实际的  文字
- Node.PROCESSING_INSTRUCTION_NODE	7	一个用于XML文档的 ProcessingInstruction ，例如 <?xml-stylesheet ... ?> 声明。
- Node.COMMENT_NODE	8	一个 Comment 节点。
- Node.DOCUMENT_NODE	9	一个 Document 节点。
- Node.DOCUMENT_TYPE_NODE	10	描述文档类型的 DocumentType 节点。例如 <!DOCTYPE html>  就是用于 HTML5 的。
- Node.DOCUMENT_FRAGMENT_NODE	11	一个 DocumentFragment 节点


#### Node.insertAdjacentElement,Node.insertAdjacentText,Node.insertAdjacentHTML

- `element.insertAdjacentElement(position, element);element.insertAdjacentText(position, text);element.insertAdjacentHTML(position, html);`element/text/html
- position: beforebegin/afterbegin /beforeend/ afterend


#### Node.textContent 与 Node.innerText

textContent
- ie9+


- textContent 会获取所有元素的内容，包括<script> 和 <style> 元素，然而 IE 专有属性 innerText 不会。
- innerText 会受样式影响，不返回隐藏元素文本，textContent会返回
- innerText 会触发CSS relow
- IE11 innerText 会移除所有子节点并销毁文本节点
