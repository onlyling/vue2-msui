<template>
  <div class="actions-modal" :class="{'modal-in': value}">

    <div class="actions-modal-group" v-for="group in groups">

      <span
        v-for="item in group"
        @click="item.onClick"
        :class="[
          item.label ? 'actions-modal-label' : 'actions-modal-button',
          item.bold ? 'actions-modal-button-bold' : '',
          item.color ? 'color-' + item.color : '',
          item.bg ? 'bg-' + item.bg : ''
        ]"
        v-text="item.text"
        ></span>

    </div>

  </div>
</template>
<script>

import Popup from '../popup'

  export default {
    name: 'ms-actions',
    mixins: [Popup],
    props: {
      groups: {
        type: Array,
        default: function(){
          return []
        }
      }
    }
  }
</script>