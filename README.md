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

## vue2.0 子组件与父组件的数据双向绑定

2.0之后子组件使用 v-model 来进行数据双向绑定。

所以要让组件的 v-model 生效，它必须：

* 接受一个 `value` 属性
* 在有新的 `value` 时触发 `input` 事件

看看官方案例

``` html

	<div id="v-model-example">
	  <p>{{ message }}</p>
	  <my-input label="Message" v-model="message"></my-input>
	</div>

```

```javascript

	Vue.component('my-input', {
	  template: '\
	    <div class="form-group">\
	      <label v-bind:for="randomId">{{ label }}:</label>\
	      <input v-bind:id="randomId" v-bind:value="value" v-on:input="onInput">\
	    </div>\
	  ',
	  props: ['value', 'label'],
	  data: function () {
	    return {
	      randomId: 'input-' + Math.random()
	    }
	  },
	  methods: {
	    onInput: function (event) {
	      this.$emit('input', event.target.value)
	    }
	  },
	})

	new Vue({
	  el: '#v-model-example',
	  data: {
	    message: 'hello'
	  }
	})

```

## 自言自语的疑惑

列表中各有一个选择格式，想法是通过prop的方式，把是否选中的状态传过来，在点击radio、checkbox的时候，并没有取消或选中，很是疑惑。如果在页面中单独写radio、checkbox就没问题，想想，选中的状态是通过渲染的方式还原的，并不是空间自身响应。看看elementui的实现方式，在组件中有一个值表示是否被选中，仅仅是自身组件内的状态。结合vue表单空间的文档，貌似又顿悟了。有时间改善一下。

单个复选框可以，但是多个就不行，问题应该是，子组件虽然把值同步回去了，但是同步后的其他组件没有更新，还是初次那个值。

webpack打包svg文件的时候有问题。。
