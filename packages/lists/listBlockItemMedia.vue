<template>
  <li>

    <router-link
      class="item-content"
      :to="{path: link}"
      :tag="!!link ? 'a' : 'div'"
      :class="{'item-link': isLink}"
      >

      <div class="item-media" v-if="!!imgUrl"><img :src="imgUrl" :style="{width: imgWidth}"></div>

      <div class="item-inner">

        <div class="item-title-row">
          <div class="item-title" v-text="title"></div>
          <div class="item-after" v-text="rightText"></div>
        </div>

        <div class="item-subtitle" v-text="subTitle"></div>

        <div class="item-text" v-if="!!text" v-text="text"></div>

      </div>

    </router-link>

  </li>
</template>
<script>
  export default {
    name: 'ms-list-block-item-media',
    props: {
      title: String,
      subTitle: String,
      text: String,
      isLink: Boolean,
      rightText: String,
      imgUrl: String,
      imgWidth: {
        type: String,
        default: '4rem'
      },
      link: String
    }
  }
</script>