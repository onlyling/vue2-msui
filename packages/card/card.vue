<template>

  <div class="ms-card">

    <div class="card-header" v-if="!!title" v-text="title"></div>

    <div class="card-content">
      <div class="card-content-inner" v-text="text"></div>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>

  </div>

</template>
<script>
  export default {
    name: 'ms-card',
    props: {
      text: String,
      title: String
    }
  }
</script>
<style lang="less">
  @import './cards.less';
</style>