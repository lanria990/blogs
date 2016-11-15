[npm scripts 使用指南--阮一峰](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
## npm scripts 笔记

##### scripts 是package.json中的属性

##### 原理：自动创建shell脚本运行，运行环境path是node_module目录

##### 通配符：*[所有文件],\**[所有文件夹]，需要转义.eg `'test':'mocha test/\*.js'`.

##### 传参：使用-- eg `"lint:checkstyle": "npm run lint -- --reporter checkstyle > checkstyle.xml"`

##### 执行多个任务：并发[`npm run script1.js & npm run script2.js`],顺序执行[`npm run script1.js && npm run script2.js`]

##### 默认值

```javascript
"start": "node server.js"，
"install": "node-gyp rebuild"
```

##### 内部变量 `npm_package_${package.json中的属性}`,eg`npm_package_name`

```javascript
 "repository": {
    "type": "git",
    "url": "xxx"
  },
  scripts: {
    "view": "echo $npm_package_repository_type"
  }
```

#### 常用的

```javascript
// 删除目录
"clean": "rimraf dist/*",

// 本地搭建一个 HTTP 服务
"serve": "http-server -p 9090 dist/",

// 打开浏览器
"open:dev": "opener http://localhost:9090",

// 实时刷新
 "livereload": "live-reload --port 9091 dist/",

// 构建 HTML 文件
"build:html": "jade index.jade > dist/index.html",

// 只要 CSS 文件有变动，就重新执行构建
"watch:css": "watch 'npm run build:css' assets/styles/",

// 只要 HTML 文件有变动，就重新执行构建
"watch:html": "watch 'npm run build:html' assets/html",

// 部署到 Amazon S3
"deploy:prod": "s3-cli sync ./dist/ s3://example-com/prod-site/",

// 构建 favicon
"build:favicon": "node scripts/favicon.js",

```



