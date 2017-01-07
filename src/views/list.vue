<template>
  <ms-page>
    <ms-bar-nav :title="$route.meta.title"></ms-bar-nav>
    <ms-content>

      <ms-content-block-title>图标、标题和副标题</ms-content-block-title>
      <ms-list-block>
        <ms-list-block-item v-for="item in new Array(200)" title="sheme" after="此处是文本内容..." icon="home"></ms-list-block-item>
      </ms-list-block>

      <ms-content-block-title>标题和副标题</ms-content-block-title>
      <ms-list-block>
        <ms-list-block-item v-for="item in [1,2,3]" title="sheme" after="此处是文本内容..."></ms-list-block-item>
      </ms-list-block>

      <ms-content-block-title>带箭头</ms-content-block-title>
      <ms-list-block>
        <ms-list-block-item v-for="item in [1,2,3]" title="sheme" after="此处是文本内容..." :isLink="true"></ms-list-block-item>
      </ms-list-block>

      <ms-content-block-title>曲目</ms-content-block-title>
      <ms-list-block :isMedia="true">
        <ms-list-block-item-media v-for="item in [1,2,3]" title="主标题" subTitle="副标题" text="此处是文本内容..." rightText="$12.43" imgUrl="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" link="home" :isLink="true"></ms-list-block-item-media>
      </ms-list-block>

      <ms-content-block-title>邮件</ms-content-block-title>
      <ms-list-block :isMedia="true">
        <ms-list-block-item-media v-for="item in [1,2,3]" title="主标题" subTitle="副标题" text="此处是文本内容..." rightText="14::54" link="home" :isLink="true"></ms-list-block-item-media>
      </ms-list-block>

      <ms-content-block-title>邮件</ms-content-block-title>
      <ms-list-block :isMedia="true">
        <ms-list-block-item-media v-for="item in [1,2,3]" title="主标题" subTitle="此处是文本内容..." imgUrl="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" imgWidth="2.2rem" link="home" :isLink="true"></ms-list-block-item-media>
      </ms-list-block>

      <ms-content-block-title>嵌入式</ms-content-block-title>
      <ms-list-block :isMedia="true" :isInset="true">
        <ms-list-block-item-media v-for="item in [1,2,3]" title="主标题" subTitle="此处是文本内容..." imgUrl="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" imgWidth="2.2rem" link="home" :isLink="true"></ms-list-block-item-media>
      </ms-list-block>

    </ms-content>
  </ms-page>
</template>