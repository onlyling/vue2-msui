
# 图标轮播
> 看起来像那么一回事了

依赖 [better-scroll](https://github.com/ustbhuangyi/better-scroll)

## 如何使用

``` html
    
    <ms-swiper
        :img-list="imglist"
        :dots="true"
        :snap-loop="true" 
        :snap-speed="800"></ms-swiper>

```

``` javascript

    export default {
        data() {
          return {
            imglist: [{
              imgUrl: '//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg',
              link: {
                path: '/'
              }
            }, {
              imgUrl: '//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i4/TB10rkPGVXXXXXGapXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg',
              link: {
                path: '/'
              }
            }, {
              imgUrl: '//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1kQI3HpXXXXbSXFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg',
              link: {
                path: '/'
              }
            }]
          }
        }
      }

```

## 接口

* `img-list`: 轮播图片的数组，每个子数据有`imgUrl`、`link`两个属性，`link`非必要
* `dots`: 是否开启图片下方的小点点，默认否
* `snap-loop`: 是否开启无限循环，默认否
* `snap-speed`: 切换的过渡时间，默认 400 ms
