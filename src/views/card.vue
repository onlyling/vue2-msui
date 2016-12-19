<template>
  <ms-page>
    <ms-bar-nav :title="$route.meta.title"></ms-bar-nav>
    <ms-content>

      <ms-content-block-title>简单卡片</ms-content-block-title>
      <ms-card text="什么东西什么东西什么东西什么东西什么东西什么东西什么东西什么东西"></ms-card>
      <ms-card title="标题" text="什么东西什么东西什么东西什么东西什么东西什么东西什么东西什么东西">
        <a slot="footer" class="link">赞</a>
        <a slot="footer" class="link">评论</a>
        <a slot="footer" class="link">更多</a>
      </ms-card>

      <ms-content-block-title>风格卡片</ms-content-block-title>
      <ms-card text="什么东西什么东西什么东西什么东西什么东西什么东西什么东西什么东西" imgUrl="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" imgAlt="发表于 2015/01/15">
        <a slot="footer" class="link">赞</a>
        <a slot="footer" class="link">评论</a>
        <a slot="footer" class="link">更多</a>
      </ms-card>

    </ms-content>
  </ms-page>
</template>