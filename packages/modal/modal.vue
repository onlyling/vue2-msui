<template>
  <transition name="a">
    <div class="modal" :class="{'modal-in': modalIn}" style="display: block;" :style="{'margin-top': marginTop + 'px'}">
      <div class="modal-inner">
        <div class="modal-title" v-if="title">这是自定义的标题!</div>
        <div class="modal-text" v-if="text">这是一段提示消息</div>
      </div>
      <div class="modal-buttons">
        <span class="modal-button" v-for="item in buttons" v-text="item.text" @click="item.onClick" :class="{'modal-button-bold': item.bold}"> </span>
      </div>
    </div>
  </transition>
</template>
<script>

import Popup from '../popup'

  export default {
    name: 'ms-modal',
    mixins: [Popup],
    props: {
      title: String,
      text: String,
      buttons: Array
    },
    data() {
      return {
        modalIn: false,
        marginTop: 0
      }
    },
    mounted(){
      this.$nextTick(() => {
        // console.log(this.buttons[0].callback)
      })
    }
  }
</script>

<style lang="less">
  

</style>