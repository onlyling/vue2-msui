<template>
  <label class="label-checkbox">
    <input type="checkbox"
      :checked="selfModel"
      @change="$emit('input', selfModel)"
      v-model="selfModel"
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
    created() {
      this.selfModel = this.value
    }
  }
</script>