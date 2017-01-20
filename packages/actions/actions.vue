<template>
  <div class="actions-modal modal-in">
    <div class="actions-modal-group">
      <span class="actions-modal-label">请选择</span>
      <span class="actions-modal-button actions-modal-button-bold color-danger">卖出</span>
      <span class="actions-modal-button">买入</span>
    </div>
    <div class="actions-modal-group">
      <span class="actions-modal-button bg-danger">取消</span>
    </div>
  </div>
</template>
<script>

import Popup from '../popup'

  export default {
    name: 'ms-modal',
    mixins: [Popup],
    props: {
      groups: {
        type: Array,
        default: function(){
          return []
        }
      },
      marginTop: {
        type: Number,
        default: 0
      }
    }
  }
</script>