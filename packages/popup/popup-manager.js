/**
 * 所有弹出层的管理 
 *
 * 灵感来源 https://github.com/ElemeFE/vue-popup/blob/master/src/popup-manager.js
 *
 * <div class="modal-overlay"></div> 遮罩层
 * 
 */

const getModal = () => {

  let modalDom = document.querySelector('.modal-overlay')

  if (!!!modalDom) {

    modalDom = document.createElement('div')
    modalDom.className = 'modal-overlay'

    document.getElementsByTagName('body')[0].appendChild(modalDom)


  }

  return modalDom

}

const instances = {}

const PopupManager = {
  zIndex: 2100,
  overlayStack: [],
  nextZIndex() {
    return this.zIndex++
  },
  register(id, instance) {
    if (id && instance) {
      instances[id] = instance
    }
  },
  deregister(id) {
    if (id) {
      instances[id] = null
      delete instances[id]
    }
  },
  getInstance(id) {
    return instances[id]
  },
  modalStack: [],
  openModal(id, zIndex, dom) {

    const modalStack = this.modalStack

    for (let i = 0, j = modalStack.length; i < j; i++) {
      const item = modalStack[i]
      if (item.id === id) {
        return
      }
    }

    const modalDom = getModal()

    modalDom.classList.add('modal-overlay-visible')

    if (zIndex) {
      modalDom.style.zIndex = zIndex;
    }

    this.modalStack.push({
      id: id,
      zIndex: zIndex
    })

  },
  closeModal(id) {

    const modalStack = this.modalStack
    const modalDom = getModal()

    if (modalStack.length - 1 == 0) {
      modalDom.classList.remove('modal-overlay-visible')
    }

    modalStack.pop()

  }
}

export default PopupManager