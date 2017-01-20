export default (msg, duration, extraclass) => {

  let toastDom = document.createElement('div')
  toastDom.className = 'modal toast'
  toastDom.innerHTML = msg
  toastDom.style.display = 'block'

  if (extraclass) {

    extraclass.split(' ').forEach((str, i) => {

      toastDom.classList.add(str)

    })

  }

  document.body.appendChild(toastDom)

  setTimeout(() => {
    toastDom.style.marginLeft = -(toastDom.offsetWidth / 2) + 'px'
    toastDom.style.marginTop = -(toastDom.offsetHeight / 2) + 'px'

    toastDom.classList.add('modal-in')
  }, 5)

  setTimeout(() => {
    toastDom.classList.remove('modal-in')
    toastDom.classList.add('modal-out')
    setTimeout(() => {
      document.body.removeChild(toastDom)
    }, 200)
  }, duration || 2000)


}