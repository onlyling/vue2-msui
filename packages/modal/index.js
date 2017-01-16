const MODAL_DEFAULT = {
  modalStack: true,
  modalButtonOk: '确定',
  modalButtonCancel: '取消',
  modalPreloaderTitle: '加载中'
}

import Vue from 'vue'
import modalVue from './modal.vue'

const ModalConstructor = Vue.extend(modalVue)

let currentMsg, instance
let msgQueue = []

const initInstance = () => {
  instance = new ModalConstructor({
    el: document.createElement('div')
  })
}

const showNextMsg = () => {

  if (!instance) {
    initInstance();
  }

  if (msgQueue.length > 0) {

    currentMsg = msgQueue.shift()

    let options = currentMsg.options

    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        instance[prop] = options[prop]
      }
    }

    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
      instance.show = true
      instance.marginTop = -(instance.$el.offsetHeight / 2)
      setTimeout(() => {
        instance.modalIn = true
      }, 5)
    })

  }

}

const Modal = (options) => {

  let opt = options || {}
  let title = opt.title || ''
  let text = opt.text || ''
  let buttons = opt.buttons

  msgQueue.push({
    options: {
      title,
      text,
      buttons
    }
  })

  showNextMsg()

}

Modal.alert = (text, title, callback) => {
  if (typeof title === 'function') {
    callback = title
    title = ''
  }
  return Modal({
    title: title,
    text: text,
    buttons: [{
      text: MODAL_DEFAULT.modalButtonOk,
      bold: true,
      onClick: callback
    }]
  })
}

export default Modal