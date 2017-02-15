<template>
  <div class="ms-iscroll" ref="iscroll">
    <div class="ms-iscroll-content" ref="iscrollContent">
      <slot></slot>
      <div class="infinite-scroll-preloader" v-if="!!infiniteToRefresh">
        <div class="preloader"></div>
      </div>
    </div>
    <div class="pull-to-refresh-layer ms-pull-to-refresh" v-show="showPTR" :class="[PTRClassName]">
      <div class="preloader"></div>
      <div class="pull-to-refresh-arrow"></div>
    </div>
  </div>
</template>
<script>

  import BScroll from 'better-scroll'

  export default {
    name: 'ms-iscroll',
    props: {
      startY: {
          type: Number,
          default: 0
        },
        pullToRefresh: Function,
        infiniteToRefresh: Function
    },
    data() {
      return {
        showPTR: false, // 是否显示下拉刷新的提示
        PTRClassName: [], // 下拉刷新时的状态class
        pullToRefreshLoading: false, // 下拉刷新加载中状态
        loading: false // 是否在加载数据
      }
    },
    mounted() {

      let self = this

      self.scroll = new BScroll(self.$refs.iscroll, {
        probeType: 1
      })

      self.scroll.on('scroll', (pos) => {

        if (pos.y > 10) {
          self.showPTR = true

          if (pos.y > 55) {
            self.PTRClassName = 'down'

            if (pos.y > 85) {
              self.PTRClassName = 'loading'
              self.pullToRefreshLoading = true
            } else {
              self.PTRClassName = 'down'
              self.pullToRefreshLoading = false
            }

          } else {
            self.PTRClassName = ''
            self.pullToRefreshLoading = false
          }

        } else {
          self.showPTR = false
          self.PTRClassName = ''

          if (pos.y <= -(self.$refs.iscrollContent.offsetHeight - self.$refs.iscroll.offsetHeight - 150)) {
            self.InfiniteToRefresh()
          }

        }

      })

      self.scroll.on('scrollEnd', () => {

        if (!self.pullToRefreshLoading) {
          self.showPTR = false
          self.PTRClassName = ''
        } else {
          self.showPTR = true
          self.PTRClassName = 'loading'
          // 加载数据
          this.PullToRefresh()
        }

      })

    },
    destroyed() {
      this.scroll.destroy()
    },
    methods: {
      PullToRefresh() {

        let self = this

        if (self.loading) {
          return
        }

        self.loading = true

        self.pullToRefresh(() => {

          self.showPTR = false
          self.PTRClassName = ''
          self.loading = false

          self.$nextTick(() => {
            self.scroll.refresh()
          })

        })

      },
      InfiniteToRefresh() {
        let self = this

        if (self.loading) {
          return
        }

        self.loading = true

        self.infiniteToRefresh(() => {
          self.loading = false
          self.$nextTick(() => {
            self.scroll.refresh()
          })
        })

      }
    }
  }
</script>
<style lang="less">
  .ms-iscroll{ position: relative; background-color: #f5f5f5; height: 100%; overflow: hidden;
    .ms-iscroll-bar{ position: absolute; width: 4px; height: 3rem; border-radius: 2px; right: 0; top: 0; background-color: #000; opacity: 0; transition: all .5s; transition-timing-function: ease-out;
      &.active{ opacity: .4;}
    }
    .ms-iscroll-content{ overflow: hidden; transition-timing-function: ease-out;}
    .ms-pull-to-refresh{ position: absolute; width: 100%; top: 0; left: 0;
      &.down .pull-to-refresh-arrow{ transform: rotate(180deg);}
      &.loading{
        .pull-to-refresh-arrow{ visibility: hidden; transition-duration: 0s;}
        .preloader{ visibility: visible;}
      }
    }
  }
</style>