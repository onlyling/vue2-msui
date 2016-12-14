<template>
  <ms-page>
    <ms-bar-nav :title="$route.meta.title"></ms-bar-nav>
    <ms-content>
      <ms-tabs :active-name="activeName">
        <ms-tab-pane label="用户管理" name="first">用户管理</ms-tab-pane>
        <ms-tab-pane label="配置管理" name="second">配置管理</ms-tab-pane>
        <ms-tab-pane label="角色管理" name="third">角色管理</ms-tab-pane>
        <ms-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</ms-tab-pane>
      </ms-tabs>
      <br><br>
      <ms-tabs :active-name="activeName">
        <ms-tab-pane label="用户管理" name="first">用户管理</ms-tab-pane>
        <ms-tab-pane label="配置管理" name="second">配置管理</ms-tab-pane>
        <ms-tab-pane label="角色管理" name="third">角色管理</ms-tab-pane>
      </ms-tabs>
    </ms-content>
  </ms-page>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      }
    },
    mounted(){
      // console.log(this.$route)
    }
  }
</script>