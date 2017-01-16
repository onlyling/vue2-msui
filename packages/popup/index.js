import PopupManager from './popup-manager'

let idSeed = 1

const getDOM = function (dom) {
  if (dom.nodeType === 3) {
    dom = dom.nextElementSibling || dom.nextSibling
    getDOM(dom)
  }
  return dom
}

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: true
    }
  },
  beforeMount() {

    this._popupId = 'popup-' + idSeed++;

    PopupManager.register(this._popupId, this)

  },
  beforeDestroy() {

    PopupManager.deregister(this._popupId)

    PopupManager.closeModal(this._popupId)

  },
  data() {
    return {
      opened: false,
      rendered: false
    }
  },
  watch: {
    value(val) {

      console.log('popup-val:' + val)

      if (val) {
        if (!this.rendered) {
          this.rendered = true
          this.$nextTick(() => {
            this.open()
          })
        } else {
          this.open()
        }
      } else {
        this.close()
      }

    }
  },
  methods: {
    open() {

      if (!this.rendered) {
        this.rendered = true
      }
      this.doOpen()
    },
    doOpen() {

      if (this.opened) {
        return
      }

      this.$emit('input', true)

      const dom = getDOM(this.$el)

      const modal = this.modal

      if (modal) {
        PopupManager.openModal(this._popupId, PopupManager.nextZIndex(), dom)
      }

      dom.style.zIndex = PopupManager.nextZIndex()

      this.opened = true

    },
    close() {
      this.doClose()
    },
    doClose() {

      if (!this.value) {
        return
      }

      this.value = false
      this.opened = false

      this.$emit('input', false)

      PopupManager.closeModal(this._popupId)

    }
  }

}