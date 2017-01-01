<template>
  <div class="ms-iscroll">
    <div class="ms-iscroll-content" :style="{transform: 'translate3d(0, ' + scrollTop + 'px, 0)'}">
      <slot></slot>
      <div class="infinite-scroll-preloader" v-if="!!infiniteToRefresh">
        <div class="preloader"></div>
      </div>
    </div>
    <div class="ms-iscroll-bar" v-if="scrollbars" :style="{top: barTop + 'px'}"></div>
    <div class="pull-to-refresh-layer ms-pull-to-refresh" v-show="showPTR" :class="[PTRClassName]">
      <div class="preloader"></div>
      <div class="pull-to-refresh-arrow"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ms-iscroll',
    props: {
      scrollbars: {
        type: Boolean,
        default: true
      },
      fadeScrollbars: {
        type: Boolean,
        default: true,
      },
      startY: {
        type: Number,
        default: 0
      },
      pullToRefresh: Function,
      ptrDistance: {
        type: Number,
        default: 55
      },
      infiniteToRefresh: Function
    },
    data() {
      return {
        boxHeight: 0, // 最外层的高度，视觉高度
        listHeight: 0, // 列表高度
        barHeight: 0,
        barTop: 0,
        scrollTop: 0,
        barHideTimer: null,
        scrollTopTimer: null,
        showPTR: false,
        loading: false
      }
    },
    computed: {
      barMaxTop() {
        return this.boxHeight - this.barHeight
      },
      listMaxScrollTop() {
        return this.listHeight - this.boxHeight
      },
      PTRClassName() {
        if (!!this.pullToRefresh) {

          if (this.loading == true) {
            return 'loading'
          }

          if(this.scrollTop > 0 && this.scrollTop <= this.ptrDistance){
            return ''
          } else {
            return 'down'
          }

        } else {
          return ''
        }
      }
    },
    mounted() {
      // 初始化一些数据
      let self = this
      let domList = self.$el.querySelector('.ms-iscroll-content')
      let domBar = self.$el.querySelector('.ms-iscroll-bar')

      self.boxHeight = self.$el.offsetHeight
      self.barHeight = domBar.offsetHeight
      self.scrollTop = self.startY

      let MOVED = 0
      let START_Y = 0
      let START_STATIC_Y = 0

      self.startHandler = (event) => {

        if (event.targetTouches.length === 1) {
          const _touch = event.targetTouches[0]
          START_Y = _touch.pageY
          START_STATIC_Y = self.scrollTop
          if (scrollbars) {
            domBar.classList.add('active')
            clearTimeout(self.barHideTimer)
          }
          self.listHeight = domList.offsetHeight
        }

      }

      self.moveHandler = (event) => {

        if (event.targetTouches.length === 1) {

          if (self.loading) {
            return
          }

          const _touch = event.targetTouches[0]
          let moved = _touch.pageY - START_Y
          let scrollTop = START_STATIC_Y + moved
          
          // 临界点的一些判断
          if (scrollTop > 0) {

            scrollTop = Math.floor(scrollTop / 2)

          }

          let maxY = -(self.listHeight - self.boxHeight)
          if ( scrollTop < maxY) {

            scrollTop = maxY + Math.floor((scrollTop - maxY) / 3 * 2)

          }


          self.scrollTop = scrollTop

        }

      }

      self.endHandler = (event) => {

        if (event.changedTouches.length === 1) {

          if (self.loading) {
            return
          }
          
          const _touch = event.changedTouches[0]
          let moved = _touch.pageY - START_Y
          let scrollTop = START_STATIC_Y + moved
          
          // 临界点的一些判断
          if (scrollTop > 0) {

            if (scrollTop > self.ptrDistance) {

              scrollTop = Math.floor(scrollTop / 2)

              // 上拉刷新的一些操作来了
              !!self.pullToRefresh && self.PullToRefresh()

            }

            self.setScrollTop(scrollTop, true)

          }

          let maxY = -self.listMaxScrollTop
          if ( scrollTop < maxY) {

            scrollTop = maxY + Math.floor((scrollTop - maxY) / 3 * 2)

            self.infiniteToRefresh && self.InfiniteToRefresh()

            self.setScrollTop(scrollTop - maxY, false)

          }

          self.barHideTimer = setTimeout(() => {
            domBar.classList.remove('active')
          }, 2 * 1000)

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
    },
    watch: {
      scrollTop(newVal, oldVal) {
        let self = this

        self.setBarTop()

        if (self.pullToRefresh) {

          if (newVal > 0) {
            self.showPTR = true

          } else {
            self.showPTR = false
          }

        }
      }
    },
    methods: {
      setScrollTop(SPACE_X, direction) {

        let self = this
        let x = SPACE_X / 10
        let SPACE_TIME = 0

        self.scrollTopTimer = () => {
          if (SPACE_TIME >= 10) {
            self.scrollTop = direction ? 0 : -self.listMaxScrollTop
            return
          }

          self.scrollTop -= x
          SPACE_TIME ++

          setTimeout(self.scrollTopTimer, 16)

        }

        self.scrollTopTimer()

      },
      setBarTop() {

        let self = this
        let barTop = -(+(self.scrollTop / self.listMaxScrollTop * self.barMaxTop).toFixed(3))

        self.barTop = barTop

      },
      PullToRefresh() {
        let self = this
        setTimeout(() => {
          self.scrollTopTimer = null
        }, 0)
        self.scrollTop = self.$el.querySelector('.ms-pull-to-refresh').offsetHeight
        if (self.loading) {
            return
        } else {
          self.loading = true
          self.pullToRefresh(() => {
            self.loading = false
            self.scrollTop = 0
          })
        }
      },
      InfiniteToRefresh() {
        let self = this
        if (self.loading) {
          return
        } else {
          self.loading = true
          self.infiniteToRefresh(() => {
            self.loading = false
          })
        }
      }
    }
  }
</script>
<style lang="less">
  .ms-iscroll{ position: relative; background-color: #f5f5f5; height: 100%; overflow: hidden;
    .ms-iscroll-bar{ position: absolute; width: 4px; height: 2rem; border-radius: 2px; right: 0; top: 0; background-color: #000; opacity: 0; transition: opacity .5s;
      &.active{ opacity: .4;}
    }
    .ms-iscroll-content{ overflow: hidden;}
    .ms-pull-to-refresh{ position: absolute; width: 100%; top: 0; left: 0;
      &.down .pull-to-refresh-arrow{ transform: rotate(180deg);}
      &.loading{
        .pull-to-refresh-arrow{ visibility: hidden; transition-duration: 0s;}
        .preloader{ visibility: visible;}
      }
    }
  }
</style>