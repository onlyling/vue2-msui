import Pages from 'packages/page/pages.vue'
import Page from 'packages/page/page.vue'
import Panel from 'packages/page/panel.vue'
import Content from 'packages/page/content.vue'
import ContentBlockTitle from 'packages/page/contentBlockTitle.vue'

import BarNav from 'packages/bar/barNav.vue'
import BarTab from 'packages/bar/barTab.vue'

import Button from 'packages/button/button.vue'
import ButtonsGroup from 'packages/button/buttons-group.vue'
import ButtonsTab from 'packages/button/buttons-tab.vue'

import TabsPane from 'packages/tabs/tabsPane.vue'
import Tabs from 'packages/tabs/tabs.vue'

import ListBlock from 'packages/lists/listBlock.vue'
import ListBlockItem from 'packages/lists/listBlockItem.vue'
import ListBlockItemMedia from 'packages/lists/listBlockItemMedia.vue'
import ListBlockItemInput from 'packages/lists/listBlockItemInput.vue'

import Card from 'packages/card/card.vue'

import Swiper from 'packages/swiper/swiper.vue'

import Iscroll from 'packages/iscroll/iscroll.vue'

import Input from 'packages/input/input.vue'
import Switch from 'packages/input/switch.vue'
import Checkbox from 'packages/input/checkbox.vue'

import Modal from 'packages/modal/index'
import Preloader from 'packages/preloader/index'
import Toast from 'packages/toast/index'

import Device from 'packages/device'


const install = function (Vue, opts = {}) {
  if (install.installed) {
    return
  }

  Vue.component(Pages.name, Pages)
  Vue.component(Page.name, Page)
  Vue.component(Panel.name, Panel)
  Vue.component(ContentBlockTitle.name, ContentBlockTitle)

  Vue.component(BarNav.name, BarNav)
  Vue.component(BarTab.name, BarTab)

  Vue.component(Content.name, Content)

  Vue.component(Button.name, Button)
  Vue.component(ButtonsGroup.name, ButtonsGroup)
  Vue.component(ButtonsTab.name, ButtonsTab)

  Vue.component(TabsPane.name, TabsPane)
  Vue.component(Tabs.name, Tabs)

  Vue.component(ListBlock.name, ListBlock)
  Vue.component(ListBlockItem.name, ListBlockItem)
  Vue.component(ListBlockItemMedia.name, ListBlockItemMedia)
  Vue.component(ListBlockItemInput.name, ListBlockItemInput)

  Vue.component(Card.name, Card)

  Vue.component(Swiper.name, Swiper)

  Vue.component(Iscroll.name, Iscroll)

  Vue.component(Input.name, Input)
  Vue.component(Switch.name, Switch)
  Vue.component(Checkbox.name, Checkbox)

  Vue.prototype.$modal = Modal
  Vue.prototype.$alert = Modal.alert
  Vue.prototype.$confirm = Modal.confirm

  Vue.prototype.$confirm = Modal.confirm

  Vue.prototype.$preloader = Preloader

  Vue.prototype.$toast = Toast

  Device.init()
  Vue.prototype.$device = Device.device


}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  version: '0.0.1',
  install
}