<template>
  <nav class="bar bar-tab">
    <router-link v-for="item in nav" class="tab-item" :to="item.url" active-class="active">
      <span :class="['icon', getIcon(item.icon)]"></span>
      <span class="tab-label" v-html="item.text"></span>
      <span class="badge" v-show="item.badge >= 1" v-html="item.badge"></span>
    </router-link>
  </nav>
</template>
<script>
  export default {
    name: 'ms-bar-tab',
    props: {
      nav: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      getIcon(icon) {
        return 'icon-' + icon
      }
    }
  }
</script>