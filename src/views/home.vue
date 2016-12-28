<template>
  <ms-pages :panelopen="panelOpen" paneldir="left">

    <ms-page>
      <ms-bar-nav :title="$route.meta.title" :back="false">
        <a class="icon icon-me pull-left" slot="left" @click="togglePanel"></a>
      </ms-bar-nav>
      <ms-bar-tab :nav="nav"></ms-bar-tab>
      <ms-content>
        <ms-content-block-title>慢慢来吧，骚年。样式易复制，交互难复现。</ms-content-block-title>
        <ms-content-block-title>DEMO</ms-content-block-title>
        <ms-list-block>
          <ms-list-block-item v-for="item in demoList" :title="item.title" :after="item.progress" :isLink="true" @click="toGo(item.link)"></ms-list-block-item>
        </ms-list-block>
      </ms-content>
    </ms-page>

    <ms-panel>
      <div class="content-block">
        <p>这是一个侧栏</p>
        <p></p>
        <p><a href="javascript: void(0);" @click="togglePanel">关闭</a></p>
      </div>
    </ms-panel>

  </ms-pages>
</template>
<script>
  export default {
    data() {
      return {
        panelOpen: false,
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
        }],
        demoList: [{
          title: '按钮',
          progress: '70%',
          link: 'button'
        }, {
          title: '标签页',
          progress: '70%',
          link: 'tabs'
        }, {
          title: '列表',
          progress: '70%',
          link: 'list'
        }, {
          title: '表单',
          progress: '50%',
          link: 'form'
        }, {
          title: '卡片',
          progress: '70%',
          link: 'card'
        }, {
          title: '图标',
          progress: '100%',
          link: 'icon'
        }]
      }
    },
    methods: {
      toGo(link) {
        this.$router.push(link)
      },
      togglePanel() {
        this.panelOpen = !this.panelOpen
      }
    },
    mounted(){
      // console.log(this.$route)
    }
  }
</script>