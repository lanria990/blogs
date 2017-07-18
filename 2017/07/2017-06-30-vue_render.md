---
layout: post
title: vue render
date: 2017-06-30
tag: vue
tags: 
  - JavaScript
  - vue
---

## 问题

问题：需要实现一个动态的表单配置,Model配置如下.条件时间比较赶，原有项目利用了elm ui 组件库
```
const config= {
    items: [
      {
        componentName: 'app-select',
        type: 'select',
        key: 'test',
        value: '1',
        options: [{
          value: '1',
          label: '公司新闻'
        }, {
          value: '2',
          label: '新闻列表'
        }]
      },
      {
        componentName: 'el-input',
        type: 'text',
        key: 'test_string',
        placeholder: 'test_string'
      },
      {
        componentName: 'el-input-number',
        max: 100,
        min: 0,
        value: '5',
        key: 'test_int',
        placeholder: 'test_int'
      }]
}
cont formData = initFormData(config) //{text_string:''...}
```
<!-- more -->
## render 函数

#### render(createElement)

[API:Render 函数](https://cn.vuejs.org/v2/guide/render-function.html#main)

`createElement:(componentName,options,ArrayChild)`

```javascript

Vue.component({
    methods:{},
    render(h,ctx){
        h('test-form',{
            props:{}
        },)
    }
})

```

#### .实现render的v-model

```javascript
  const props = {}
  const dataMap = {
    domProps: {
      value: self.formData[item.key] || ''
    },
    props: {
      ...props,
      value: self.formData[item.key] || ''
    },
    on: {
      input: (val) => {
        self.formData[item.key] = val
      }
    }
  }

```

### render问题

#### `You may have an infinite update loop in a component render function`

```javascript
{
  
  data () {
    return {
      formData: {}//null
    }
  },
  render () {
    this为Vue 实例，或者 Vue 实例的根数据对象
    const result = {}
    //do something...
    //this.$set(this,formData,{})
    this.formData = Object.assign({},this.formData,result)
  }
}
```
`formData` `render` 函数赋值。改为在mounted、created、data中赋值，watch中监控option的变化.【需要学习生命周期】

使用computed计算该formData，也会出现该错误

目前所使用的方法，如有更好的烦请告知下鄙人
```javascript
{
  
  data () {
    return {
      formData: {}//null
    }
  },  
  mounted () {
   const result = {}
    //do something...
    this.$set(this,formData,{})
    this.formData = Object.assign({},this.formData,result)
  },
  render () {
    const result = {}
    //do something...
    //this.$set(this,formData,{})
    this.formData = Object.assign({},this.formData,result)
  }
}
```

#### 子组件中的数据为及时清除，未销毁重新创建Component。

- vue的强缓存机制， keep-alive 会出现该问题。
- 使用[key](https://cn.vuejs.org/v2/api/#key)新旧nodes对比时辨识VNodes属性,解决渲染问题



## 函数组件化

### functional

[`functional: true`](https://cn.vuejs.org/v2/guide/render-function.html#函数化组件)

```javascript
{
  functional: true,
  render(h,context){
    options = context.props.options
  }
}
```
- `context:{props,children,slots,data,parent,listeners,injections}`
- `this == null`
- `data == null`
- 开销较低

## jsx

render组件比较多的情况下使用jsx比较合适

#### package.json

```javascript
npm install\
  babel-plugin-syntax-jsx\
  babel-plugin-transform-vue-jsx\
  babel-helper-vue-jsx-merge-props\
  babel-preset-es2015\
  --save-dev

```
#### eslint 配置
```javascript
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    }
  }
```
#### .babelrc 配置

```javascript
 {
    "plugins": [ "transform-vue-jsx","transform-runtime"],
 }
```

#### 代码实现

```bash
 Vue.component({
    methods:{},
    render(h,ctx){
        const props = {
            props:{},
            on:{
                input:val=>{
                    result = val
                }
            }
        } 
       return (
        <app-form ...props>
       //...
       </app-form>
       )
    }
})
```


## Demo

- [vue-elment-setting](http://tanyang.oschina.io/vue-elment-setting/dist/index.html#/)