<template>

  <ms-page>
    <ms-bar-nav :title="$route.meta.title"></ms-bar-nav>

    <ms-content>

      <ms-iscroll>
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
        list: new Array(200)
      }
    },
    methods: {
      goHome() {
        this.$router.push({path: '/'})
      }
    }
  }
</script>