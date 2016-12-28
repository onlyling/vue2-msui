<template>
  <button :disabled="disabled" class="button"
    @click="handleClick"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
        type ? 'button-' + type : '',
        size ? 'button-' + size : '',
        { 
          'button-fill': fill,
          'button-round': round,
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
<style>
  button.button{width: 100%;}
</style>