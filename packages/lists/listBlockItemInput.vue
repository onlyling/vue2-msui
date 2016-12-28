<template>
  <li class="item-content">
    <div class="item-media" v-if="!!icon"><i class="icon" :class="['icon-'+icon]"></i></div>
    <div class="item-inner">
      <div class="item-title label" v-if="!!label" v-text="label"></div>
      <div class="item-input">
        <slot></slot>
      </div>
    </div>
  </li>
</template>
<script>
  export default {
    name: 'ms-list-block-item-input',
    props: {
      label: String,
      icon: String
    },
    methods: {
      hanlderClick(e){
        this.$emit('click', e)
      }
    }
  }
</script>