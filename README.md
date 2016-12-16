# vue2

> A Vue.js Component
> 
> 深入学习Vue。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 学习记录

### render函数

必备插件
``` bash
npm install\
  babel-plugin-syntax-jsx\
  babel-plugin-transform-vue-jsx\
  --save-dev
```

`babel-helper-vue-jsx-merge-props` 这个插件还未使用到，暂时不知用来做啥。

按照文档上的`完整数据对象`、`完整示例`撸就好了，比较有趣的是，很多动态绑定数据的方式，和`v-bind`的API一样，可以是数组、对象，或是数组中有对象。



### 组件

#### 具名slot

刚开始以为一个slot只能添加一个具名slot，原来可以使用多个，按照顺序拍下来。



