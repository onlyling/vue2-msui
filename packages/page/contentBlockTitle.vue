<script>
  export default {
    name: 'ms-content-block-title',
    props: {
      tag: {
        type: String,
        default: 'div'
      }
    },
    render(h) {

      return h(
          this.tag,
          {
            'class': ['content-block-title']
          },
          this.$slots.default
        )

    }
  }
</script>