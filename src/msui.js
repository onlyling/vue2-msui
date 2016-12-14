import Page from 'packages/page/page.vue'
// import Bar from 'packages/bar/bar.vue'
import BarNav from 'packages/bar/barNav.vue'
import BarTab from 'packages/bar/barTab.vue'

import Content from 'packages/content/content.vue'

import Button from 'packages/button/button.vue'
import ButtonsGroup from 'packages/button/buttons-group.vue'
import ButtonsTab from 'packages/button/buttons-tab.vue'

import TabsPane from 'packages/tabs/tabsPane'
import Tabs from 'packages/tabs/tabs'

import Input from 'packages/input/input.vue'


const install = function (Vue, opts = {}) {
  if (install.installed) {
    return
  }

  Vue.component(Page.name, Page)
  // Vue.component(Bar.name, Bar)
  Vue.component(BarNav.name, BarNav)
  Vue.component(BarTab.name, BarTab)

  Vue.component(Content.name, Content)

  Vue.component(Button.name, Button)
  Vue.component(ButtonsGroup.name, ButtonsGroup)
  Vue.component(ButtonsTab.name, ButtonsTab)

  Vue.component(TabsPane.name, TabsPane)
  Vue.component(Tabs.name, Tabs)

  Vue.component(Input.name, Input)

}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  version: '0.0.1',
  install,
  Input
}
