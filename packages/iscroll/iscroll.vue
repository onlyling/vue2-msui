<template>
  <div class="ms-iscroll">
    <div class="ms-iscroll-content" :style="{ 'transition-duration': scrollTopDuration + 'ms', 'transform': 'translate(0, ' + scrollTop + 'px) translateZ(0)'}">
      <slot></slot>
      <div class="infinite-scroll-preloader" v-if="!!infiniteToRefresh">
        <div class="preloader"></div>
      </div>
    </div>
    <div class="ms-iscroll-bar" v-if="scrollbars" :style="{'transition-duration': barTopDuration + 'ms', 'top': barTop + 'px'}"></div>
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
        scrollTopDuration: 600,
        barTopDuration: 600,
        barHideTimer: null,
        scrollTopTimer: null,
        showPTR: false,
        loading: false,
        pullToRefreshLoading: false,
        infiniteToRefreshLoading: false
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

          if (this.pullToRefreshLoading == true) {
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
      let MOVE_TIME = 0

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
          MOVE_TIME = (new Date()).getTime()
          self.scrollTopDuration = 0
          self.barTopDuration = 0
        }

      }

      self.moveHandler = (event) => {

        // 解决手机上滑动卡顿
        event.preventDefault()

        if (event.targetTouches.length === 1) {

          const _touch = event.targetTouches[0]
          let moved = _touch.pageY - START_Y
          let scrollTop = START_STATIC_Y + moved
          
          // 临界点的一些判断
          if (scrollTop > 0) {

            scrollTop = Math.floor(scrollTop / 2)

            if (self.pullToRefreshLoading) {
              scrollTop = 0
            }

          }

          let maxY = -self.listMaxScrollTop
          if ( scrollTop < -self.listMaxScrollTop) {

            scrollTop = -self.listMaxScrollTop + Math.floor((scrollTop + self.listMaxScrollTop) / 3 * 2)

          }

          self.scrollTop = scrollTop

          self.scrollTopDuration = 0
          self.barTopDuration = 0

        }

      }

      self.endHandler = (event) => {

        if (event.changedTouches.length === 1) {

          self.scrollTopDuration = 600
          self.barTopDuration = 600
          
          const _touch = event.changedTouches[0]
          let moved = _touch.pageY - START_Y
          let scrollTop = START_STATIC_Y + moved
          const _time = (new Date()).getTime() - MOVE_TIME

          // 快速滑动
          if (scrollTop < 0 && scrollTop >= -self.listMaxScrollTop) {
            
            self.setTransition(_time, moved)

          }

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
      setScrollTop(SPACE_Y, direction, critical = true) {
        /**
         * SPACE_Y 间隔距离
         * direction 方向 true 上 false 下
         * critical 是否是临界点 默认true
         */

        if (this.pullToRefreshLoading) {
          return
        }

        let self = this
        let TARGET_Y = self.scrollTop - SPACE_Y

        if (direction && TARGET_Y > 0) {
          TARGET_Y = 0
        }

        if (!direction && TARGET_Y < -self.listMaxScrollTop) {
          TARGET_Y = -self.listMaxScrollTop
        }

        self.scrollTop = TARGET_Y

      },
      setBarTop() {

        let self = this
        let barTop = -(+(self.scrollTop / self.listMaxScrollTop * self.barMaxTop).toFixed(3))

        if (barTop <= 0) {
          barTop = 0
        }

        if (barTop >= self.barMaxTop) {
          barTop = self.barMaxTop
        }

        self.barTop = barTop

      },
      setTransition(times, moved) {

        let self = this
        let SPACE_Y = 0
        let _distance = moved >= 0
        let _moved = Math.abs(moved)

        if (times <= 100 && _moved <= 400) {
          SPACE_Y = self.boxHeight * 2.5
        }

        if (times <= 200 && _moved <= 400) {
          SPACE_Y = self.boxHeight * 2
        }

        if (times <= 250 && _moved <= 400) {
          SPACE_Y = self.boxHeight * 1.5
        }

        if (times <= 300 && _moved <= 400) {
          SPACE_Y = self.boxHeight
        }

        SPACE_Y = Math.floor(SPACE_Y) * Math.pow(-1, _distance ? 1 : 2)

        self.setScrollTop(SPACE_Y, _distance, false)

      },
      PullToRefresh() {
        let self = this
        self.scrollTop = self.$el.querySelector('.ms-pull-to-refresh').offsetHeight

        if (self.pullToRefreshLoading) {
            return
        } else {
          self.pullToRefreshLoading = true
          self.pullToRefresh(() => {
            self.pullToRefreshLoading = false
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
    .ms-iscroll-bar{ position: absolute; width: 4px; height: 3rem; border-radius: 2px; right: 0; top: 0; background-color: #000; opacity: 0; transition: all .5s; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      &.active{ opacity: .4;}
    }
    .ms-iscroll-content{ overflow: hidden; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);}
    .ms-pull-to-refresh{ position: absolute; width: 100%; top: 0; left: 0;
      &.down .pull-to-refresh-arrow{ transform: rotate(180deg);}
      &.loading{
        .pull-to-refresh-arrow{ visibility: hidden; transition-duration: 0s;}
        .preloader{ visibility: visible;}
      }
    }
  }
</style>