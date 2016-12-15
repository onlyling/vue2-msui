<template>
  <ms-page>
    <ms-bar-nav :title="$route.meta.title"></ms-bar-nav>
    <ms-content>
      <ms-content-block-title>图标、标题和副标题</ms-content-block-title>
      <ms-list-block>
        <ms-list-block-item v-for="item in [1,2,3]" title="sheme" after="meisehnm" icon="home"></ms-list-block-item>
      </ms-list-block>
      <ms-content-block-title>标题和副标题</ms-content-block-title>
      <ms-list-block>
        <ms-list-block-item v-for="item in [1,2,3]" title="sheme" after="meisehnm"></ms-list-block-item>
      </ms-list-block>
      <ms-content-block-title>带箭头</ms-content-block-title>
      <ms-list-block>
        <ms-list-block-item v-for="item in [1,2,3]" title="sheme" after="meisehnm" :isLink="true"></ms-list-block-item>
      </ms-list-block>
    </ms-content>
  </ms-page>
</template>
<script>
  
</script>