<template>
  <ms-page>
    <ms-bar-nav :title="$route.meta.title" :back="false"></ms-bar-nav>
    <ms-bar-tab :nav="nav"></ms-bar-tab>
    <ms-content>
      <div class="content-block">
        这里是content
        <div style="height: 800px"></div>
      </div>
    </ms-content>
  </ms-page>
</template>
<script>
  export default {
    data() {
      return {
        nav: [{
          text: '首页',
          icon: 'home',
          url: 'home',
          badge: 0
        }, {
          text: '分类',
          icon: 'star',
          url: 'list',
          badge: 0
        }, {
          text: '购物车',
          icon: 'cart',
          url: 'cart',
          badge: 1
        }, {
          text: '我的',
          icon: 'me',
          url: 'user',
          badge: 0
        }]
      }
    },
    mounted(){
      // console.log(this.$route)
    }
  }
</script>