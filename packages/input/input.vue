<template>
  <div :class="[
    type === 'textarea' ? 'ms-textarea' : 'ms-input',
    size ? 'ms-input--' + size: '',
    {
      'is-disabled': disabled
    }
  ]">
    <input
      v-if="type != 'textarea'"
      class="ms-input-el"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength"
      :autocomplete="autoComplete"
      :autofocus="autofocus"
      :min="min"
      :max="max"
      :form="form"
      :value="value"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      >
    <textarea v-if="type === 'textarea'"></textarea>
  </div>
</template>
<script>
  export default {
    name: 'ms-input',
    props: {
      value: [String, Number],
      placeholder: [String, Number],
      size: String,
      readonly: Boolean,
      autofocus: Boolean,
      icon: String,
      disabled: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      name: String,
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      rows: {
        type: Number,
        default: 2
      },
      autoComplete: {
        type: String,
        default: 'off'
      },
      form: String,
      maxlength: Number,
      minlength: Number,
      max: {},
      min: {}
    },
    methods: {
      handleChange() {},
      handleFocus(e) {
        this.$emit('focus', e)
      },
      handleBlur(e) {
        this.$emit('blur', e)
      }
    }
  }
</script>