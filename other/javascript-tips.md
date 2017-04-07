## javascript 零碎知识点待整理




`[0] == false,!![0] == true `

转换过程
```javascript
//https://www.h5jun.com/post/why-false-why-true.html
[0] == false
ToPrimitive([]) //https://www.ecma-international.org/ecma-262/5.1/#sec-9.1
 [].valueOf() //[] 
 [].toString() //''
 '' == false
```

!![0] == true => !!ToBoolean([0])

#### void

- `void 0 ===undefined`且使用`void 0`的比较运算效率高于`value===undefined`

