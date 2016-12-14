<template>
  <div class="ms-buttons-tab">
    <button class="ms-tab-link ms-button" v-for="item in nav" :class="{active: item.active}" @click="handleClick" v-html="item.text"></button>
  </div>
</template>
<script>
  export default {
    name: 'ms-buttons-tab',
    props: {
      nav: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      handleClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>