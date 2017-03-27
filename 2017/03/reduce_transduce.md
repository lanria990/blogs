
函数式编程 reduce/transduce

柯里化默认只接受一个参数

```javascript
function add(x,y) {
  return x+y;
}

add(1,2) //3
function addX(y) {
  return (x)=>x+y;
}

addX(1)(2) //3

```
一般约定，函子的标志就是容器具有map方法。该方法将容器里面的每一个值，映射到另一个容器

函数式编程一般约定，函子有一个of方法，用来生成新的容器

```javascript
class  Functor {
  constructor(){}
  map(f){}
}
Functor.of =(val)=> {
    return new Functor(val);
}
```

Maybe 函子 空值检查
??每个都需要设置吗？有没有简便的方法
````javascript
class Maybe extends Functor{
    map(f){
        return this.val?Maybe.of(f(this.val)):Maybe.of(null); 
    }
}
Maybe.of =(val)=> {
    return new Maybe(val);
}
````

Either 函子
条件运算if...else
```javascript
class Either extends Functor{
     constructor(left,right){
         this.left =left; //else 使用的
         this.right =right; //if使用的
     }
     map(f){
             return this.right?Either.of(f(this.right),this.left):Either.of(f(this.left),this.right); 
         }
}
Either.of =(left,right)=> {
    return new Either(left,right);
}
```

ap 函子
 ```javascript
class Ap extends Functor{
    ap(F){
        return Ap.of(this.val(F.val)); 
    }
}
Ap.of =(val)=> {
    return new Ap(val);
}
```

Monad 函子
Monad 函子的作用是，总是返回一个单层的函子
```javascript
class Monad extends Functor{
     constructor(){
    
     }
     join(){
         return this.val
     }
     chain(f){
             return this.map(f).join(); 
         }
}
Monad.of =()=> {
    return new Monad();
}
```
IO 操作

```javascript
var fs = require('fs');

var readFile = function(filename) {
  return new IO(function() {
    return fs.readFileSync(filename, 'utf-8');
  });
};

var print = function(x) {
  return new IO(function() {
    console.log(x);
    return x;
  });
}

var tail = function(x) {
  return new IO(function() {
    return x[x.length - 1];
  });
}

readFile('./user.txt')
.chain(tail)
.chain(print)
```

- [函数式编程](http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html)
- [Reduce 和 Transduce 的含义](http://www.ruanyifeng.com/blog/2017/03/reduce_transduce.html)
- [ramda](http://www.ruanyifeng.com/blog/2017/03/ramda.html)