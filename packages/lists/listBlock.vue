<template>
  <div class="ms-list-block">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'ms-list-block'
  }
</script>
<style lang="less">
  @import './lists.less';
</style>