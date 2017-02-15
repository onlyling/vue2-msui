<template>
  <div class="ms-swiper" ref="imgs">

    <ul class="imglist" :style="{ width: maxWidth + 'px'}">

      <li v-for="item in imgList" class="li-img" :style="{ width: winWidth + 'px'}">

        <router-link
          :to="item.link"
          :tag="!!item.link ? 'a' : 'div'"
          >
          <img :src="item.imgUrl">
        </router-link>

      </li>

    </ul>

    <ul class="dots" v-if="dots">
      <li v-for="(item, i) in imgList" :class="{active: i == imgIndex}"> </li>
    </ul>

  </div>
</template>
<script>

  import BScroll from 'better-scroll'

  export default {
    name: 'ms-swiper',
    props: {
      imgList: Array,
      dots: {
        type: Boolean,
        default: false
      },
      snapLoop: {
        type: Boolean,
        default: false
      },
      snapSpeed: {
        type: Number,
        default: 400
      }
    },
    data() {
      return {
        winWidth: 0,
        maxWidth: 0,
        imgIndex: 0
      }
    },
    mounted() {
      
      var self = this
      self.winWidth = window.innerWidth
      self.maxWidth = (self.imgList.length + (self.snapLoop ? 2 : 0)) * self.winWidth

      self.$nextTick(() => {

        self.imgs = new BScroll(self.$refs.imgs, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: true,
          snapLoop: self.snapLoop,
          snapSpeed: self.snapSpeed
        })

        self.imgs.on('scrollEnd', function() {
          self.imgIndex = self.imgs.getCurrentPage().pageX - (self.snapLoop ? 1 : 0)
        })

      })

    },

    destroyed() {
      this.imgs.destroy()
    }
  }
</script>
<style lang="less">
  
  .ms-swiper{ width: 100%; height: 16rem; overflow: hidden; background-color: #fff; position: relative;
    ul{ padding: 0; margin: 0; list-style: none; overflow: hidden;}
    .li-img { float: left; height: 100%; overflow: hidden;
      a { display: block;}
      img { max-width: 100%; max-height: 100%; display: block; margin: 0 auto;}
    }
    .dots{ text-align: center; margin-top: -1rem; z-index: 5; position: absolute; width: 100%;
      li{ display: inline-block; width: .5rem; height: .5rem; border-radius: .25rem; background-color: #000; margin: 0 .2rem; opacity: .2;
        &.active{ background-color: #007aff; opacity: 1;}
      }
    }
  }

</style>