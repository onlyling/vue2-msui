<template>
  <div class="tab-pane" v-show="show && $slots.default">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ms-tab-pane',
    props: {
      label: String,
      name: String,
      labelContent: Function
    },
    computed: {
      show() {
        // 父级的name和当前name对比
        return this.$parent.currentName === this.index
      }
    },
    destroyed() {

      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
      }

      const panes = this.$parent.panes

      if (panes) {
        panes.splice(this, panes.indexOf(this));
      }

    },
    watch: {
      name: {
        immediate: true,
        handler(val) {
          // 把组件的name转变为index
          this.index = val
        }
      }
    }
  }
</script>