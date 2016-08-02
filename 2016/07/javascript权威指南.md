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
allow-top-navigation	允许 iframe 内容从包含文档导航（加载）内容。
allow-forms	允许表单提交


#### window 


setTimeout、clearTimeout,setInterval/clearInterval
