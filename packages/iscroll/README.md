# 滚动组件

> 感觉是一个并没有什么使用的东西。

## 接口

* `scrollbars` 是否显示滚动条
* `startY` 起始位置
* `pullToRefresh` 下拉刷新的函数 必许参数 next 数据更新后执行`next()`
* `ptrDistance` 下拉刷新的距离(px)
* `infiniteToRefresh` 到列表尾部的函数 必许参数 next 数据更新后执行`next()`

## 瞎逼逼

滑动的不是很流畅，也不是特别卡顿。比不上原生的滚动，所以，感觉是一个并没有什么使用的东西。

通过监听`touchstart`、`touchmove`、`touchend`三个事件，修改列表的`translate`

通过开始滑动和结束滑动的时间差，以及已滑动的距离，判断是否快速滑动，快速移动，已现有的速度，延续移动下去。额外新增的移动距离等于`速度 * 动画时间`

超过临界点，增加阻力，释放的时候，回归到临界点。

并没有什么很有用的功能，竟然写了这么多代码，无奈。

### 开发过程

最开始有做过类似的demo（[vue-scroll-component](https://github.com/onlyling/some-demo/tree/master/vue-scroll-component)），以为照着抄就好了，谁知道在真机上玩，好卡哟，没法，js动画不怎么会，参考了`加班狗`微信端的列表滑动，他们用的是原生滚动，不过，左边侧边栏和demo相似。原来他们在过渡的时候用的是CSS的方式，嘿嘿，抄~

抄过来后，过渡确实不卡顿了，但是，延续性滑动就很怪异。

继续抄。

看到[vue-sell](https://github.com/ustbhuangyi/vue-sell)这个项目的滑动好丝滑，看看怎么实现的呢，新插件[better-scroll](https://github.com/ustbhuangyi/better-scroll)，[看代码](https://github.com/ustbhuangyi/better-scroll/blob/master/src/util/momentum.js)，大概就是通过计算速度，通过速度额外再加点移动距离。

纯粹的抄过来，完全不适用，好吧，抄一个速度，自己倒腾一个额外的距离。

反正，不是很卡了，感觉还算流畅，就是比不上原生。

现在，怎么才能让`下拉刷新`和`无限滚动`的函数，用起来优雅点。

