<template>
  <div class="modal modal-no-buttons" :class="{'modal-in': value}" style="display: block;" :style="{'margin-top': marginTop + 'px'}">
    <div class="modal-inner">
      <div class="modal-title" v-if="title" v-text="title"> </div>
      <div class="modal-text">
        <div class="preloader"> </div>
      </div>
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
      marginTop: {
        type: Number,
        default: 0
      }
    }
  }
</script>