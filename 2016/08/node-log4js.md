## log4js

[前端外刊评论-Node.js 之 log4js 完全讲解](http://qianduan.guru/2016/08/21/nodejs-lesson-1-log4js/),[log4jsAPI文档](https://github.com/nomiddlename/log4js-node/wiki/Layouts)

#### 

```javscript
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.debug('Time:',new Date);//[2016-08-29 11:42:28.761] [DEBUG] [default] - Time: 2016-08-29T03:42:28.761Z

```

#### log4js权重
```javscript
// {
// 	ALL:new Level(Number.MIN_VALUE,'ALL'),
// 	TRACE:new Level(5000,'TRACE'),
//     DEBUG:new Level(10000,'DEBUG'),
//     INFO:new Level(20000,'INFO'),
//     WARN:new Level(30000,'WARN'),
//     ERROR:new Level(40000,'ERROR'),
//     FATAL:new Level(50000,'FATAL'),
//     MARK:new Level(60000,'MARK'),
//     OFF:new Level(70000,'OFF')
// }

```

#### category，使用不同的分类, 可以用于区分日志来自哪个模块

```javasvript
var loggerType = log4js.getLogger('example');//'set-catetory.js'
loggerType.debug('Time:',new Date);//[2016-08-29 11:42:28.765] [DEBUG] example - Time: 2016-08-29T03:42:28.765Z

```

#### appender,默认控制台, 可以用于不同的模块输出到不同的文件

```javscript
log4js.configure({
    appenders:[{
        type:'file',
        filename:'default.log'
    }]
});
var loggerAppender = log4js.getLogger('custom-appender');
loggerAppender.debug('Time:',new Date);

```



#### 过滤级别和类别 level,category

```javscript
log4js.configure({
    appenders: [{
        type: 'logLevelFilter',
        level: 'DEBUG',
        category: 'category1',
        appender: {
            type: 'file',
            filename: 'category.debug.log'
        }
    },{
        type: 'logLevelFilter',
        level: 'INFO',
        category: 'category1',
        appender: {
            type: 'file',
            filename: 'category.info.log'
        }
    }]
})


var logger1 = log4js.getLogger('category1');
var logger2 = log4js.getLogger('category2');
logger1.debug("Time:", new Date());//[2016-08-29 11:59:42.508] [DEBUG] category1 - Time: 2016-08-29T03:59:42.508Z
logger1.trace("Time:", new Date());
logger1.info("Time:", new Date());
logger2.debug("Time:", new Date());
```

#### layout

```javscript
/**
 * https://github.com/nomiddlename/log4js-node/wiki/Layouts
 * messagePassThrough：仅仅输出日志的内容；
 * basic：在日志的内容前面会加上时间、日志的级别和类别，通常日志的默认 layout；
 * colored/coloured：在 basic 的基础上给日志加上颜色，appender Console 默认使用的就是这个 layout；
 * pattern：这是一种特殊类型，可以通过它来定义任何你想要的格式。
 */


log4js.configure({
    appenders: [{
        type: 'console',
        layout:{
            type: 'pattern',
            pattern: '[%r] [%[%5.5p%]] - %m%n'
        }
    }]
});
var loggerLayout = log4js.getLogger('layout-pattern');
loggerLayout.debug("Time:", new Date());//[14:00:04] [DEBUG] - Time: 2016-08-29T06:00:04.900Z


```

#### 输出 Node 应用的 ACCESS 日志 access.log

```javascript
var express = require('express');
log4js.configure({
    appenders: [{
        type: 'DateFile',
        filename: 'access.log',
        pattern: '-yyyy-MM-dd.log',
        alwaysIncludePattern: true,
        category: 'access'
    }]
});
var app = express();
app.use(log4js.connectLogger(log4js.getLogger('access'), { level: log4js.levels.INFO }));
app.get('/', function(req,res) {
    res.send('前端外刊评论');
});
app.listen(5000);

```