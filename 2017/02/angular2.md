## Angular2 学习笔记

#### 资料

- [真的大漠穷秋-Angular2 视频](http://i.youku.com/i/UMzI1MjQ0MDgw?spm=a2h0j.8191423.subscription_wrap.DT~A)
- [大漠穷秋博客](https://my.oschina.net/mumu/home)
 
#### Angular-CLI 安装
```javascript
cnpm install angular-cli -g

ng help

ng new hello-world

cnpm install

ng serve // default port 4200 启动服务 包比较大
ng serve --prod --aot // 最小化编译 z最新版本自动添加 --aot[预编译器]
```


#### ng2核心三个概念

[脑图](https://github.com/TeamStuQ/skill-map/blob/master/data/designbyStuQ/png-Angular2-by-StuQ.png)

1.组件

采用单向数据流，抛弃了 $diget
祖建树引入不可变数据类型，[组件树生成器](https://github.com/compodoc/ngd)




3.[NgModule](https://angular.cn/docs/ts/latest/guide/ngmodule.html)

原因：优化，文化体积和请求数量需要考虑平衡

- 打包
- 动态加载
- 
declarations：
imports：导入文件
providers
bootstrap

3.路由

独立模块，独立演进。

静态路由，
Component

动态路由
loadChildren

#### DI 依赖注入

- 每一个HTML标签上面都有一个注射器实力
- 通过constructor
- @Injectable 是 @Compoment

- [工作原理]()

#### DataBingd 
资料

#### UI库
- [Angular Material](https://material.angular.io/)
- [ng2-bootstrap](http://valor-software.com/ng2-bootstrap/)
- [primeng](http://www.primefaces.org/primeng/)
- [ionic](https://ionic.io/)

#### NiceFish

构建部署
```javascript 
npm build --prod

```

组件模块

组件通讯： @input,@output,service[单例，同一个实例],路由

#### [组件的生命周期钩子](https://angular.cn/docs/ts/latest/guide/lifecycle-hooks.html)

1. OnInit
2.AfterContentInit
3.AfterViewInit
4.OnChanges
5.DoCheck
6.AfterContentChecked
7.AfterViewChecked
8.OnDestroy


#### 问题笔记

环境变量 win7.x64 nodejs:6.3.9


```angular2html
ERROR in ./src/main.ts
Module build failed: TypeError: Cannot read property 'newLine' of undefined

ERROR in ./src/polyfills.ts
Module build failed: TypeError: Cannot read property 'newLine' of undefined

```

解决办法：重新安装 ，angular-cli目前还不稳定处于beta版本[2017/02/18]
```javascript
cnpm install angular-cli
cnpm install
```
