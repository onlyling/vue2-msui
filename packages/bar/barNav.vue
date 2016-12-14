<template>
  <header class="ms-bar ms-bar-nav">
    <a class="icon icon-left pull-left" v-if="back" @click="goBack"></a>
    <h1 class="title" v-html="title"></h1>
  </header>
</template>
<script>
  export default {
    name: 'ms-bar-nav',
    props: {
      title: String,
      back: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="less">
  @import './bar.less';
</style>