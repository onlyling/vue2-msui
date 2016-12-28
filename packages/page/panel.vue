<script>
  export default {
    name: 'ms-panel'
  }
</script>
<template>
  <div class="panel panel-reveal">
    <slot></slot>
  </div>
</template>
<style>
  .panel-reveal {
    display: block;
  }
</style>