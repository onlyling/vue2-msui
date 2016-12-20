<template>
  <label class="ms-label-switch">
    <input type="checkbox"
      :checked="selfModel"
      @change="$emit('change', $event)"
      v-model="model"
      >
    <div class="checkbox"></div>
  </label>
</template>
<script>
  
  export default {
    name: 'ms-switch',
    // props: ['value', 'label'],
    props: {
      value: Boolean,
      label: String
    },
    data() {
      return {
        selfModel: false
      }
    },
    computed: {
      model: {
        get() {
          return this.selfModel
        },
        set(val) {
          if (this.value !== undefined) {
            this.$emit('input', val)
          } else {
            this.selfModel = val
          }
        }
      }
    },
    created() {
      this.selfModel = this.value
    }
  }

</script>

<style lang="less">
  @import './switch.less';
</style>