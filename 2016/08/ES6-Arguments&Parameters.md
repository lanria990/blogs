## ES6中Arguments和Parameters用法解析阅读笔记

[原文](http://www.zcfy.cc/article/953)


###### 扩展操作符 ...

数组扩展成单独的参数

```javascript
//es6
var myArray = [5, 10, 50];
Math.max(...myArray);  

//es5
var myArray = [5, 10, 50];
Math.max(myArray);    // Error: NaN
Math.max.apply(Math, myArray);    // 50
```


###### Rest参数

rest参数是把所有的参数收集起来转换成数组，多余的实参作为数组

```javascript
function myFunction(...options) {
     return options;
}
myFunction('a', 'b', 'c');      // ["a", "b", "c"]


function checkSubstrings(string, ...keys) {
  for (var key of keys) {
    if (string.indexOf(key) === -1) {
      return false;
    }
  }
  return true;
}
checkSubstrings('this is a string', 'is', 'this');   // true

```


###### 默认参数

如果实参为undefined，就赋予默认值。可以在函数声明中指定其它参数和变量的值

```javascript
function foo(a = 10, b = 10) {
  console.log(a, b);
}
foo(5);    // 5 10
foo(0, null);    // 0 null

foo(null, undefined); // null 10


//函数声明中指定其它参数和变量的值
function myFunction(a=10, b=a) {
     console.log('a = ' + a + '; b = '  + b);
}
myFunction();     // a=10; b=10
myFunction(22);    // a=22; b=22
myFunction(2, 4);    // a=2; b=4
```


##### 解构赋值

```javascript

function initiateTransfer({protocol, port, delay, retries, timeout, log}) {
    console.log(protocol, port, delay, retries, timeout, log)
};
var options = {
  protocol: 'http',
  port: 800,
  delay: 150,
  retries: 10,
  timeout: 500,
  log: true
}
initiateTransfer(options); // http 800 150 10 500 true

//参数被省略掉
function initiateTransfer({protocol, port, delay, retries, timeout, log}) {
     // code to initiate transfer
}
initiateTransfer();  // TypeError: Cannot match against 'undefined' or 'null'


//默认赋值
function initiateTransfer({protocol, port, delay, retries, timeout, log} = {}) {
     // code to initiate transfer
}
initiateTransfer();    // no error


```


##### 参数传递

修改按引用传递的参数，一般反映在全局中，而修改按值传递的参数，则只是反映在函数内部。

严格模式,设置必填参数,长度属性

###### 按引用传递参数


```javascript
function foo(param){
    param.bar = 'new value';
}
obj = {
    bar : 'value'
}
console.log(obj.bar);   // value
foo(obj);
console.log(obj.bar);   // new value


//设置必填参数
function throwError() {
    throw new Error('Missing parameter');
}
function foo(param1 = throwError(), param2 = throwError()) {
    // do something
}
foo(10, 20);    // ok
foo(10);   // Error: missing parameter

//长度属性
function foo(...params) {
  if (params.length < 2) {
        throw new Error("This function expects at least two arguments");
    } else if (params.length === 2) {
        // do something
    }
}

//严格模式 数声明中使用了默认值时，参数对象是不会受到影响

'use strict';
function foo(param1, param2 = 10, param3 ) {
   console.log(param1 === arguments[0]);    // true
   console.log(param2 === arguments[1]);    // true
   console.log(param3 === arguments[2]);    // undefined
   console.log(arguments[2]);    // undefined
   console.log(param3);    // 20
}

foo('string1', 'string2');
```

