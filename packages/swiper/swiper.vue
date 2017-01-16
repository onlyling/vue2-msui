<template>
  <div class="ms-swiper">

    <ul class="imglist" :style="{ width: maxWidth + 'px', transform: 'translate3d(' + tLeft + 'px, 0, 0)'}">

      <li v-for="item in imglist" class="li-img" :style="{ width: winWidth + 'px'}">
          
          <router-link
            :to="item.link"
            :tag="!!item.link ? 'a' : 'div'"
            >
              <img class="" :src="item.imgUrl">
            </router-link>

      </li>
      
    </ul>

    <ul class="dots" v-if="dots">
      <li v-for="(item, i) in imglist" :class="{active: i == imgIndex}"></li>
    </ul>

  </div>
</template>
<script>
  export default {
    name: 'ms-swiper',
    props: {
      imglist: Array,
      dots: Boolean
    },
    data() {
      return {
        winWidth: 0,
        maxWidth: 0,
        imgIndex: 0,
        tLeft: 0
      }
    },
    mounted() {
      
      var self = this
      self.winWidth = window.innerWidth
      self.winHalfWidth = Math.floor(self.winWidth / 2)
      self.maxWidth = self.imglist.length * self.winWidth

      self.Dimglist = self.$el.querySelector('.imglist')

      let MOVED = 0
      let START_X = 0
      let START_LEFT = self.tLeft

      self.startHandler = (event) => {

        if (event.targetTouches.length === 1) {
          const _touch = event.targetTouches[0]
          START_X = _touch.pageX
          START_LEFT = self.tLeft
        }

      }

      self.moveHandler = (event) => {

        // 解决手机上滑动卡顿
        event.preventDefault()

        if (event.targetTouches.length === 1) {
          const _touch = event.targetTouches[0]
          MOVED = _touch.pageX - START_X

          let _left = START_LEFT + MOVED

          // 临界点判断
          if (_left > 0) {

            _left = Math.floor(_left / 3 * 2)

          }

          let maxX = -(self.maxWidth - self.winWidth)
          if (_left < maxX) {

            _left = maxX + Math.floor((_left - maxX) / 3 * 2)

          }

          self.tLeft = _left
        }

      }

      self.endHandler = (event) => {

        if (event.changedTouches.length === 1) {
          const _touch = event.changedTouches[0]
          MOVED = _touch.pageX - START_X

          // 位移的绝对值是否超过了一半，决定了是否前后位移
          if ((Math.abs(MOVED) - self.winHalfWidth / 3 * 2) >= 0) {
            self.imgIndex += ((START_LEFT - self.tLeft) >= 0) ? 1 : -1
            // 修正坐标
            if (self.imgIndex < 0) {
              self.imgIndex = 0
            }
            // 修正坐标
            if (self.imgIndex > self.imglist.length - 1) {
              self.imgIndex = self.imglist.length - 1
            }
          }

          // 归零
          let TARGET_X = -(self.imgIndex * self.winWidth)
          let SPACE_X = +((TARGET_X - self.tLeft) / 15).toFixed(3)
          let SPACE_TIME = 0
          self.timer = () => {

            if(SPACE_TIME >= 15){
              self.tLeft = TARGET_X
              return;
            }
            self.tLeft += SPACE_X
            SPACE_TIME++

            setTimeout(self.timer, 16)

          }

          self.timer()
          
        }

      }

      self.$el.addEventListener('touchstart', self.startHandler, false)
      self.$el.addEventListener('touchmove', self.moveHandler, false)
      self.$el.addEventListener('touchend', self.endHandler, false)

    },
    destroyed() {
      this.$el.removeEventListener('touchstart', this.startHandler)
      this.$el.removeEventListener('touchmove', this.moveHandler)
      this.$el.removeEventListener('touchend', this.endHandler)
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