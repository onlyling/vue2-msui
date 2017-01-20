<template>
  <div class="modal" :class="{'modal-in': value}" style="display: block;" :style="{'margin-top': marginTop + 'px'}">
    <div class="modal-inner">
      <div class="modal-title" v-if="title" v-text="title"> </div>
      <div class="modal-text" v-if="text" v-text="text"> </div>
    </div>
    <div class="modal-buttons" :class="{'modal-buttons-vertical': verticalButtons}">
      <span class="modal-button" v-for="item in buttons" v-text="item.text" @click="item.onClick" :class="{'modal-button-bold': item.bold}"> </span>
    </div>
  </div>
</template>
<script>

import Popup from '../popup'

  export default {
    name: 'ms-modal',
    mixins: [Popup],
    props: {
      title: String,
      text: String,
      buttons: Array,
      verticalButtons: {
        type: Boolean,
        default: false
      },
      marginTop: {
        type: Number,
        default: 0
      }
    }
  }
</script>