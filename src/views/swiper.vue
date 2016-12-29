<template>

  <ms-page>
    <ms-bar-nav :title="$route.meta.title"></ms-bar-nav>

    <ms-content>

      <ms-swiper :imglist="imglist"></ms-swiper>

    </ms-content>
  </ms-page>

</template>
<script>
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
</script>