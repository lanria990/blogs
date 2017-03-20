---
layout: post
title: Pointfree 编程风格指南 阅读笔记
date: 2017-03-20
tag: Pointfree 
---

- [Pointfree 编程风格指南](http://www.ruanyifeng.com/blog/2017/03/pointfree.html)
- [我眼中的 JavaScript 函数式编程](http://taobaofed.org/blog/2017/03/16/javascript-functional-programing/)

Pointfree 的本质就是使用一些通用的函数，组合出各种复杂运算。上层运算不要直接操作数据，而是通过底层函数去处理。这就要求，将一些常用的操作封装成函数

eg. [源代码](http://jsbin.com/kiqequ/edit?js,console)
```javascript
var getIncompleteTaskSummaries = function(membername) {
    return fetchData()
        .then(function(data) {
            return data.tasks;
        })
        .then(function(tasks) {
            var results = [];
            for (var i = 0, len = tasks.length; i < len; i++) {
                if (tasks[i].username == membername) {
                    results.push(tasks[i]);
                }
            }
            return results;
        })
        .then(function(tasks) {
            var results = [];
            for (var i = 0, len = tasks.length; i < len; i++) {
                if (!tasks[i].complete) {
                    results.push(tasks[i]);
                }
            }
            return results;
        })
        .then(function(tasks) {
            var results = [], task;
            for (var i = 0, len = tasks.length; i < len; i++) {
                task = tasks[i];
                results.push({
                    id: task.id,
                    dueDate: task.dueDate,
                    title: task.title,
                    priority: task.priority
                })
            }
            return results;
        })
        .then(function(tasks) {
            tasks.sort(function(first, second) {
                var a = first.dueDate, b = second.dueDate;
                return a < b ? -1 : a > b ? 1 : 0;
            });
            return tasks;
        });
};
```
Pointfree 代码
```javascript
var getIncompleteTaskSummaries = function(membername) {
  return fetchData()
    .then(R.prop('tasks'))
    .then(R.filter(R.propEq('username', membername)))
    .then(R.reject(R.propEq('complete', true)))
    .then(R.map(R.pick(['id', 'dueDate', 'title', 'priority'])))
    .then(R.sortBy(R.prop('dueDate')));
};
```