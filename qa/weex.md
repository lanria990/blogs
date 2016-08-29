## 在学习weex 遇到的问题


##### 环境

os:win7
node: 6.2.0/4.4.4
weex：v0.4




##### 错误

1、 `ERR! ModuleBuildError: Module build failed:` 

- template中有空行
- data 中存在多层object嵌套.{...:{...}}



2、运行无法显示数据[https://github.com/weexteam/article/issues/2](https://github.com/weexteam/article/issues/2)


3、图片显示问题

- css 设置宽高

	
4、`Maximum call stack size exceeded`

- 重复循环引用自己，尽量做到不重复使用已有的命名


5、`ReferenceError: weex_define is not defined,ReportException :undefined:0: TypeError: undefined is not a function`

- assets文件中含有main.js,避开关键字眼