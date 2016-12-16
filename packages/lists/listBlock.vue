<template>
  <div class="ms-list-block" :class="{'media-list': isMedia || isCheck, 'inset': isInset}">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'ms-list-block',
    props: {
      isMedia: Boolean,
      isCheck: Boolean,
      isInset: Boolean
    }
  }
</script>
<style lang="less">
  @import './lists.less';
</style>