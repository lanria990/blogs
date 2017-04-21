## JSON

[JSON](http://www.json.org/json-zh.html)(JavaScript Object Notation) 是一种轻量级的数据交换格式。 易于人阅读和编写


#### [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

`JSON.stringify(value[,replacer,[,space]])`

replacer: 
- [Function] 函数，`return undefined` 该属性值不会在JSON字符串中输出
- [Array] 数组
- `null/undefined`(对象所有的属性都会被序列化)

space: 
- [Number] 代表用几个空白字符 max=10,min=1;否则不生效
- [String] max=10,min=1.该字符串将被作为空格，最多取这个字符串的前10个字符
- `null/undefined` 没有空格

```javascript
var friend={
    "firstName": "Good",
    "lastName": "Man",
    "phone":"1234567",
    "age":18
};
var friendAfter=JSON.stringify(friend,["firstName","address","phone"]); //过滤,只匹配第一级
console.log(friendAfter)//"{"firstName":"Good","phone":"1234567"}"
```


```javascript
var friend={
    "firstName": "Good",
    "lastName": "Man",
    "phone":"1234567",
    "age":18,
    "test":{
        "firstName": "Good",
        "lastName": "Man",
        "phone":"1234567",
        "age":18
    }
};
var friendAfter=JSON.stringify(friend,["firstName","address","phone"]); //过滤,只匹配第一级
console.log(friendAfter)//"{"firstName":"Good","phone":"1234567"}"

function replacer(key, value) {
    console.log(key,value);
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}
//多级过滤
console.log(JSON.stringify(friend, replacer))//"{"age":18,"test":{"age":18}}"
```



```javascript
var friend={"data":[{
    "firstName": "Good",
    "lastName": "Man",
    "phone":"1234567",
    "age":18
}]};
var friendAfter=JSON.stringify(friend,null,'\t');; //美化，对于美化json比较有用
console.log(friendAfter)
/**
 {
  	"data": [
  		{
  			"firstName": "Good",
  			"lastName": "Man",
  			"phone": "1234567",
  			"age": 18
  		}
  	]
  }
**/
```

JSON.stringify 的神奇函数 —— object.toJSON
如果你在一个JS对象上实现了toJSON方法，那么调用JSON.stringify去序列化这个JS对象时，JSON.stringify会把这个对象的toJSON方法返回的值作为参数去进行序列化。
```javascript
var info={
    "msg":"I Love You",
    "toJSON":function(){
        var replaceMsg={};
        replaceMsg["msg"]="Go Die";
        return replaceMsg;
    }
};

JSON.stringify(info);//"{"msg":"Go Die"}"

var info={
    "msg":"I Love You",
    "toJSON":function(){console.log(arguments);
        var replaceMsg={};
        replaceMsg["msg1"]="Go Die";
        return replaceMsg;
    }
};

JSON.stringify({x:info});//{"x":{"msg1":"Go Die"}}
```
#### 使用场景

- 转换字符串
- JSON字符串格式化
- stringify转换为标准的JSON

#### [JSON.parse(text[, reviver])](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

text: JSON字符串完全符合JSON要求的严格格式

```javascript
var friend={
    "firstName": "Good",
    "lastName": "Man",
    "phone":{"home":"1234567","work":["7654321","999000"]}
};

var friendAfter=JSON.stringify(friend);

JSON.parse(friendAfter,function(key,value){
    
    console.log(key,value);
    console.log("----");
     if(key === ''){return value;  }    // 如果到了最顶层，则直接返回属性值;
     return value;
});
```