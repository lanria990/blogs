## 版本号

[原文地址](http://taobaofed.org/blog/2016/08/04/instructions-of-semver/)


##### 版本号定义

`<major>`.`<minor>`.`<patch>`


`<major>` 即主版本号，俗称大版本升级。改动到主版本号时，标志着 API 发生了巨大变化，包括但不限于新增特性、修改机制、删除功能， 一般不兼容上一个主版本号。

`<minor>` 即次版本号，俗称小版本升级。当我们进行常规的新增或修改功能时，改动次版本号，但是 必须是向前兼容的。这也意味着我们 不能直接删除某个功能。如若必要，我们可以在 changelog 中标记某项功能为「即将删除（Deprecated）」，然后在下一个大版本中将其彻底删除。

`<patch>` 即修订号，俗称 bug 修复。顾名思义，如果仅仅为了修复或调整一些小问题，我们就只改动修订号。


注意事项


- 版本号前不要加 v。

- 不要在数字前补 0。错误示例：01.12.03。

- 每一位版本号按照 +1 的速度递增，不要在版本号之间跳跃。

- 主版本号停留在 0 的版本号，即 0.x.x 应当视作还在内部开发阶段的代码。如果代码有公共 API，此时不宜对外公开。

- 1.0.0 的版本号用于界定公共 API 的形成。

- 当次版本号递增时，修订号归零；当主版本号递增时，次版本号、修订号归零。

- 进行新的开发时，版本号从 0.1.0 开始。

- 如果不小心把一个不兼容的改版当成了次版本号发行，应当发行一个新的次版本号来更正这个问题并且恢复向下兼容。注意 不能去修改已发行的版本。



如果一个包发布在 NPM / TNPM 中，可以快速修改其版本号。会自动触发一个 git 提交

#### 预发版本号

`<major>`.`<minor>`.`<patch>`-`<tag>`(tag 格式 [0-9A-Za-z-.])

`<major>`.`<minor>`.`<patch>`-`<stage>`.`<num>`(stage [alpha,beta,rc])



##### 不同的 deps 字段

npm中dependencies、devDependencies、peerDependencies


|字段| 含义|安装时机|场景|
|--|--|--|--|
|dependencies| 运行时依赖，包的调用者需要使用到的依赖|执行 npm install 后会把当前包的 dependencies 字段中的所有依赖项安装到 ./node_modules 目录。执行 npm install xxx 后会把 xxx 安装到 ./node_modules 下，同时会安装 xxx 的 dependencies 字段依赖项到 ./node_modules/xxx/node_modules 目录。 执行 npm install xxx --save 后会额外把 xxx 作为依赖存到当前包的 dependencies 字段中。|所有程序运行需要用到的依赖代码|
|devDependencies|开发时依赖，包的开发维护者需要使用到的依赖|执行 npm install 后也会把当前包的 devDependencies 字段中的所有依赖项安装到 ./node_modules 目录。执行 npm install xxx 后会把 xxx 安装到 ./node_modules 下，但不会安装 xxx 的 devDependencies 字段依赖项。执行 npm install xxx --save-dev 后会额外把 xxx 作为开发时依赖存到当前包的 devDependencies 字段中|一般是一些开发调试的辅助工具，如测试工具 mocha、构建工具 gulp 等|
|peerDependencies|--|--|仅在 特定场景 下有用，默认不使用此字段|



