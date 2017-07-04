## Array reduce

[API](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce_clone)
```javascript

arr.reduce([callback,initialValue])

```
- `callback(prev,current,currentIndex,array)`
- `initialValue` 可选，第一个参数



- 拍平数组

```javascript

var testArr1 = [[0, 1], [2, 3], [4, 5]];
var testArr2 = [0, [1, [2, [3, [4, [5]]]]]];
flatten(testArr1) // [0, 1, 2, 3, 4, 5]
flatten(testArr2) // [0, 1, 2, 3, 4, 5]

```

```javascript
flatten = arr=>{
    return arr.reduce((prev,current)=>{
       return Array.isArray(current) ? prev.concat(flatten(current)) : prev.concat(current)
    },[])
}
```

- 获取深层数据结构中值


```javascript

const props = {
  user: {
    posts: [
      { title: 'Foo', comments: [ 'Good one!', 'Interesting...' ] },
      { title: 'Bar', comments: [ 'Ok' ] },
      { title: 'Baz', comments: [] },
    ]
  }
}
const getUserComments = get(['user', 'posts', 0, 'comments'])
getUserComments(props) // [ 'Good one!', 'Interesting...' ]

```

```javascript
//ramda compose
const get = p=> o => p.reduce((xs,x)=>(xs && xs[x] ? xs[x] : undefined),o)

```