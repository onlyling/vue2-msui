<script>
  export default {
    name: 'ms-tabs',
    props: {
      type: String,
      activeName: String
    },
    data() {
      return {
        children: null,
        activeTab: null,
        currentName: '', // 与子组件的name有关系
        panes: []
      }
    },
    watch: {
      activeName: {
        handler(val) {
          this.currentName = val
        }
      }
    },
    methods: {
      handleTabClick(tab, event) {
        if (tab.disabled) {
          return
        }
        this.currentName = tab.index
        this.$emit('tab-click', tab, event)
      }
    },
    mounted() {
      this.currentName = this.activeName || this.$children[0] && this.$children[0].index || '1'
      this.$nextTick(() => {
        this.$forceUpdate()
      })
    },
    render(h) {

      let {
        type,
        panes, // eslint-disable-line
        handleTabRemove,
        handleTabClick,
        currentName
      } = this

      const tabs = this.$children.map((tab, index) => {

        const _tab = h('button', {
          // ms-tab-link ms-button
          class: [
            'ms-tab-link',
            'ms-button',
            currentName === tab.index ? 'active' : '' // index 为子组件的name
          ],
          ref: 'tabs',
          refInFor: true,
          on: {
            click: (e) => {
              handleTabClick(tab, e)
            }
          }
        }, [
          tab.labelContent ? tab.labelContent.call(this._renderProxy, h) : tab.label
        ])

        return _tab

      })

      return (
        <div class="ms-tabs">
          <div class="ms-buttons-tab">
            {tabs}
          </div>
          <div class="content-block">
            {this.$slots.default}
          </div>
        </div>
      )

    }
  }
</script>