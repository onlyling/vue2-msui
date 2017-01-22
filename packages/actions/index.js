import Vue from 'vue'
import actionsVue from './actions.vue'

const ModalConstructor = Vue.extend(actionsVue)

let currentAction, instance
let actionQueue = []

const initInstance = () => {
  instance = new ModalConstructor({
    el: document.createElement('div')
  })
}

const defaultCallBack = (instance, cb) => {

  if (currentAction) {

    return function () {

      cb && cb()

      // instance.value = false
      // popup中有对value = false 进行阻断，避免多次关闭，造成modal报错
      // 貌似这样并不优雅，但是close是公共方法，也没啥问题
      instance.close()

    }

  }

}

const showNextAction = () => {

  if (!instance) {
    initInstance()
  }

  if (actionQueue.length > 0) {

    currentAction = actionQueue.shift()

    let options = currentAction.options

    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        if (prop === 'groups') {
          options[prop].forEach((group, index) => {

            group.forEach((obj, i) => {

              if (!!!obj.label) {

                obj.onClick = defaultCallBack(instance, obj.onClick)

              } else {
                obj.onClick = () => {}
              }

            })

          })

        }

        instance[prop] = options[prop]
      }
    }

    // 避免zIndex=-1
    instance['ClosezIndexStatic'] = true

    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {

      setTimeout(() => {
        instance.value = true
      }, 0)

    })

  }

}

const Action = (groups) => {

  if (!Array.isArray(groups)) {
    return
  }

  actionQueue.push({
    options: {
      groups
    }
  })

  showNextAction()

}

export default Action