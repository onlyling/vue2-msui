const MODAL_DEFAULT = {
  modalStack: true,
  modalButtonOk: '确定',
  modalButtonCancel: '取消',
  modalPreloaderTitle: '加载中',
  defaultButtons: [{
    text: '确定',
    bold: true
  }]
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

const defaultCallBack = (instance, cb) => {

  if (currentMsg) {

    return function () {

      cb && cb()

      // instance.value = false
      // popup中有对value = false 进行阻断，避免多次关闭，造成modal报错
      // 貌似这样并不优雅，但是close是公共方法，也没啥问题
      instance.close()

    }

  }

}

const showNextMsg = () => {

  if (!instance) {
    initInstance()
  }

  if (msgQueue.length > 0) {

    currentMsg = msgQueue.shift()

    let options = currentMsg.options

    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        if (prop === 'buttons') {
          options[prop].forEach((obj, i) => {
            obj.onClick = defaultCallBack(instance, obj.onClick)
          })
        }
        instance[prop] = options[prop]
      }
    }

    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {

      instance.marginTop = -(instance.$el.offsetHeight / 2)

      instance.value = true

    })

  }

}

const Modal = (options) => {

  let opt = options || {}

  let title = opt.title || ''
  let text = opt.text || ''
  let verticalButtons = opt.verticalButtons || ''
  let buttons = (opt.buttons && !!opt.buttons.length) ? opt.buttons : MODAL_DEFAULT.defaultButtons

  msgQueue.push({
    options: {
      title,
      text,
      verticalButtons,
      buttons
    }
  })

  showNextMsg()

}

Modal.alert = (text, title, callbackOk) => {
  if (typeof title === 'function') {
    callbackOk = title
    title = ''
  }
  return Modal({
    text: text || '',
    title: title,
    buttons: [{
      text: MODAL_DEFAULT.modalButtonOk,
      bold: true,
      onClick: callbackOk
    }]
  })
}

Modal.confirm = (text, title, callbackOk, callbackCancel) => {
  if (typeof title === 'function') {
    callbackCancel = callbackOk
    callbackOk = title
    title = ''
  }
  return Modal({
    text: text || '',
    title: title,
    buttons: [{
      text: MODAL_DEFAULT.modalButtonCancel,
      bold: true,
      onClick: callbackCancel
    }, {
      text: MODAL_DEFAULT.modalButtonOk,
      bold: true,
      onClick: callbackOk
    }]
  })
}

Modal.closeModal = () => {

  instance.close()
  msgQueue = []
  currentMsg = null

}

export default Modal