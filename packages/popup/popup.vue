<template>
  <div class="popup" :style="{display: showInput ? 'block' : 'none'}">
    <slot> </slot>
  </div>
</template>
<script>
  export default {
    name: 'ms-popup',
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    data() {
      let showInput = this.show
      return {
        showInput
      }
    },
    watch: {
      show(val) {

        var self = this

        if (val) {

          self.showInput = val

          self.$nextTick(() => {

            setTimeout(() => {
              self.$el.classList.add('modal-in')
            }, 0)

          })

        } else {

          self.$el.classList.remove('modal-in')
          self.$el.classList.add('modal-out')

          self.$nextTick(() => {

            setTimeout(() => {
              self.showInput = val
              self.$el.classList.remove('modal-out')
            }, 400)

          })

        }

      }
    }
  }
</script>