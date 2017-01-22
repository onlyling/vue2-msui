# vue2

> A Vue.js UI Component
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

## SUI Mobile

[SUI Mobile](http://m.sui.taobao.org) 是一套基于 Framework7 开发的UI库。它非常轻量、精美，只需要引入我们的CDN文件就可以使用，并且能兼容到 iOS 6.0+ 和 Android 4.0+，非常适合开发跨平台Web App。

> 轻量的UI库

SUI Mobile 非常轻量，核心库压缩Gzip后的JS、CSS网络传输体积总共只有52K，却提供了20+个常用的组件。

对于只有HTML&CSS的组件，你只需要复制HTML代码既可以使用。他的大部分JS组件都是独立的 Zepto 插件，并且提供了 Zepto/jQuery 风格的API，你将会非常熟悉这种方式。

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

#### props

父子组件传值用的键名，最开始很随意，大小写混合，驼峰等，再写demo使用的时候发现，这些其实就是组件的属性。

按照属性的尿性，貌似都要驼峰的写法都要转换为短横线链接的小写字母方式，于是贯彻这个思想，后面约定这个形式。

在组件内部用驼峰写法，使用的时候用短横线。

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

最后还是直接用CND的CSS资源，如果私自在某些样式加前缀，应该会有问题，搬的时候要各种改，二次使用的时候也要各种注意，不如直接点，都是熟悉的代码。


## 完成的组件

### 对话框

```javascript
	
	this.$alert('内容', '标题', () => {
		console.log('1212')
	})

	this.$Confirm('内容', '标题', () => {
		console.log('确定')
	}, () => {
		console.log('取消')
	})

	this.$modal({
		text: '文字',
		title: '标题',
		verticalButtons: true, // 按钮方向，默认false
		buttons: [{
			text:'取消',
			bold: true, // 可选 设置为true会加粗按钮文本
			onClick() { // 可选
				console.log('弹窗关闭的时候响应')
			}
		}]
	})

```

### 带标题的加载指示器

```javascript

	this.$preloader()

	this.$preloader('diy title')

	this.$preloader.close()

```

### toast

```javascript

	this.$toast('操作失败')
	
	/**
	 * 文字
	 * x毫秒后消失
	 * 自定义的class
	 */
	this.$toast('操作失败', 3000, 'diyClassName1 diyClassName2')

```

### 操作表

你可以通过 color: "danger" 来指定按钮的文案为红色

或者通过 bg: "danger" 来指定按钮的背景为红色

```javascript

	let self = this
    
    let buttons1 = [{
      text: '请选择',
      label: true
    }, {
      text: '卖出',
      bold: true,
      color: 'danger',
      onClick: function () {
        self.$alert("你选择了“卖出“");
      }
    }, {
      text: '买入',
      onClick: function () {
        self.$alert("你选择了“买入“");
      }
    }]

    let buttons2 = [{
      text: '取消',
      bg: 'danger'
    }]

    let groups = [buttons1, buttons2]
    
    self.$actions(groups)

```


