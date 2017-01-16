import PopupManager from './popup-manager'

let idSeed = 1

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    overlay: {
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
  watch: {
    show(val) {

      if (val) {
        this.open()
      } else {
        this.close()
      }

    }
  },
  methods: {
    open() {}
  }

}