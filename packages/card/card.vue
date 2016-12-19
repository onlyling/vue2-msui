<template>

  <div class="ms-card">

    <div v-if="!!imgUrl" valign="bottom" class="card-header color-white no-border no-padding">
      <img class="card-cover" :src="imgUrl" :alt="imgAlt">
    </div>

    <div class="card-header" v-if="!!title" v-text="title"></div>

    <div class="card-content">
      <div v-if="!!imgAlt" class="card-content-inner">
        <p class="color-gray" v-text="imgAlt"></p>
        <p v-text="text"></p>
      </div>
      <div v-else class="card-content-inner" v-text="text"></div>
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
      title: String,
      imgUrl: String,
      imgAlt: String
    }
  }
</script>
<style lang="less">
  @import './cards.less';
</style>