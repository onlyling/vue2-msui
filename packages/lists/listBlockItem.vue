<template>
  <li class="item-content" :class="{'item-link': isLink}" @click="hanlderClick">
    <div class="item-media" v-if="!!icon"><i class="icon" :class="['icon-'+icon]"></i></div>
    <div class="item-inner">
      <div class="item-title" v-text="title"></div>
      <div class="item-after" v-text="after"></div>
    </div>
  </li>
</template>
<script>
  export default {
    name: 'ms-list-block-item',
    props: {
      title: String,
      after: String,
      icon: String,
      isLink: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      hanlderClick(e){
        this.$emit('click', e)
      }
    }
  }
</script>