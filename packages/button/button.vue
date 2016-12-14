<template>
  <button :disabled="disabled" class="ms-button"
    @click="handleClick"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
        type ? 'ms-button-' + type : '',
        size ? 'ms-button-' + size : '',
        { 
          'ms-button-fill': fill,
          'ms-button-round': round,
          'disabled': disabled
        }
      ]"
    >
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'ms-button',
    props: {
      type: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      size: String,
      fill: Boolean,
      round: Boolean,
      disabled: Boolean,
      autofocus: Boolean
    },
    methods: {
      handleClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>
<style lang="less">
  
@import './buttons.less';


</style>