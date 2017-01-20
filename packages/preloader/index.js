import Vue from 'vue'
import modalPreloader from './preloader.vue'

const ModalConstructor = Vue.extend(modalPreloader)

let currentPreloader, preloaderInstance
let preloaderQueue = []

const initPreloaderInstance = () => {
  preloaderInstance = new ModalConstructor({
    el: document.createElement('div')
  })
}

const showNextPreloader = () => {

  if (!preloaderInstance) {
    initPreloaderInstance()
  }

  if (preloaderQueue.length > 0) {

    currentPreloader = preloaderQueue.shift()

    let options = currentPreloader.options

    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        console.log(options[prop])
        preloaderInstance[prop] = options[prop]
      }
    }

    document.body.appendChild(preloaderInstance.$el)

    Vue.nextTick(() => {

      preloaderInstance.marginTop = -(preloaderInstance.$el.offsetHeight / 2)

      preloaderInstance.value = true

    })

  }

}

const showPreloader = (title) => {

  preloaderQueue.push({
    options: {
      title: title || '加载中'
    }
  })

  showNextPreloader()

}

showPreloader.close = () => {

  preloaderInstance.close()
  preloaderQueue = []
  currentPreloader = null

}

export default showPreloader