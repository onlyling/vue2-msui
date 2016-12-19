<template>
  <label class="label-checkbox">
    <input type="checkbox"
      :checked="selfModel"
      @change="$emit('change', $event)"
      v-model="model"
      :value="label"
      >
    <i class="icon icon-form-checkbox"></i>
    <span v-text="label"></span>
  </label>
</template>
<script>
  export default {
    name: 'ms-checkbox',
    props: {
      value: [String, Array],
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
    },
    mounted() {
      console.log(this.$el.getElementsByTagName('input')[0].checked)
    }
  }
</script>