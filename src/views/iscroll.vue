<template>

  <ms-page>
    <ms-bar-nav :title="$route.meta.title"></ms-bar-nav>

    <ms-content>

      <ms-iscroll :fade-scrollbars="false" :pull-to-refresh="pullToRefresh" :infinite-to-refresh="infiniteToRefresh">
        <ms-list-block>
          <ms-list-block-item v-for="item in list" title="sheme" after="此处是文本内容..." icon="home" @click.native="goHome"></ms-list-block-item>
        </ms-list-block>
      </ms-iscroll>

    </ms-content>
  </ms-page>

</template>
<script>
  export default {
    data() {
      return {
        list: new Array(20)
      }
    },
    methods: {
      goHome() {
        this.$router.push({path: '/'})
      },
      pullToRefresh(next) {
        setTimeout(() => {
          this.list = new Array(20)
          console.log('下拉刷新')
          next()
        }, 2000)
      },
      infiniteToRefresh(next) {
        setTimeout(() => {
          this.list = this.list.concat(new Array(20))
          console.log('无限加载')
          next()
        }, 2000)
      }
    }
  }
</script>