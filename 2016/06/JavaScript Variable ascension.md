## javascript 变量提升 阅读笔记


#### 提升与let

```javascript

function isTruthy(value) {
  let myVariable = 'Value 1';
  if (value) {
    /**
     * myVariable的临时死亡区间
     */
    // Throws ReferenceError: myVariable is not defined
    console.log(myVariable);
    let myVariable = 'Value 2';
    // myVariable的临时死亡区间至此结束
    console.log(myVariable); // => 'Value 2'
    return true;
  }
  return false;
}
isTruthy(1); // => true

```

let在块级作用域内的提升保护了变量不受外层作用域影响。在临时死亡区间内访问let定义的变量时抛出异常会促使开发者遵循更好的编码实践：先声明，后使用.



#### 提升与const


```javascript

var TWO=2;
function double(number) {
   // 常量TWO的临时死亡区间
   console.log(TWO); // ReferenceError: TWO is not defined
   const TWO = 2;
   // 常量TWO的临时死亡区间至此结束
   return number * TWO;
}
double(5); // => 10
VM274:4 Uncaught ReferenceError

```

由于在声明之前使用常量会导致JavaScript抛出异常。因此使用常量时应该始终先声明，初始化，然后再使用



#### 提升与Function

```javascript

// 调用被提升的函数
equal(1, '1'); // => false
// 函数声明
function equal(value1, value2) {
   return value1 === value2;
}

// 调用被提升的函数
addition(4, 7); // => 11
// 变量被提升了，但值是undefined
substraction(10, 7); // TypeError: substraction is not a function
// 函数声明
function addition(num1, num2) {
   return num1 + num2;
}
// 函数表达式
var substraction = function (num1, num2) {
  return num1 - num2;
};
```
然而substraction是使用变量声明语句声明的，虽然也被提升了，但被调用时值是undefined。因此会抛出异常TypeError: substraction is not a function。



#### 提升与class

```javascript
// 使用Company类
// 抛出ReferenceError: Company is not defined
var apple = new Company('Apple');
// 类声明
class Company {
  constructor(name) {
    this.name = name;
  }
}
// 在声明之后使用Company类
var microsoft = new Company('Microsoft');


// 使用Sqaure类
console.log(typeof Square);   // => 'undefined'
//Throws TypeError: Square is not a constructor
var mySquare = new Square(10);
// 使用变量声明语句声明类
var Square = class {
  constructor(sideLength) {
    this.sideLength = sideLength;
  }
  getArea() {
    return Math.pow(this.sideLength, 2);
  }
};
// 在声明之后使用Square类
var otherSquare = new Square(5);

```
在类定义之前执行new Company('Apple')会抛出ReferenceError异常。这很不错，因为JavaScript鼓励先声明后使用的方式
