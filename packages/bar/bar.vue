<template>
  <div class="ms-bar" :class="[
    type === 'nav' ? 'ms-bar-nav' : 'ms-bar-tab'
  ]">

    <h1 v-if="type === 'nav'" class="title">{{title}}</h1>

    <router-link v-if="type === 'bar'" v-for="item in nav" class="tab-item" :to="item.url" active-class="active">
      <span :class="['icon', getIcon(item.icon)]"></span>
      <span class="tab-label" v-html="item.text"></span>
      <span class="badge" v-show="item.badge >= 1" v-html="item.badge"></span>
    </router-link>

  </div>
</template>
<script>
  export default {
    name: 'msBar',
    props: {
      type: {
        type: String,
        default: 'nav'
      },
      title: String,
      nav: {
        type: Array,
        default () {
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
<style lang="less">

  @import '../assets/base.less';

  .ms-bar {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 10;
    height: @bar-base-height;
    padding-right: @bar-side-spacing;
    padding-left: @bar-side-spacing;
    background-color: #f7f7f8;
    .hairline(bottom, @border-default-color);
    -webkit-backface-visibility: hidden; // Make sure the bar is visible when a modal animates in.
            backface-visibility: hidden;
  }
  .ms-bar-footer {
    bottom: 0;
    .hairline(top, @border-default-color);
    .hairline-remove(bottom);
  }
  .ms-bar-nav {
    top: 0;
  }
  .title {
    position: absolute;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0 (-@bar-side-spacing);
    font-size: @font-size-default;
    font-weight: @font-weight;
    line-height: @bar-base-height;
    color: @color-text;
    text-align: center;
    white-space: nowrap;
    a {
      color: inherit;
    }
  }

  .ms-bar-tab {
    bottom: 0;
    width: 100%;
    height: @bar-tab-height;
    padding: 0;
    table-layout: fixed;
    .hairline(top, @border-default-color);
    .hairline-remove(bottom);

    // Navigational tab (Nested to be more specific for the icons in tab-items)
    .tab-item {
      position: relative;
      display: table-cell;
      width: 1%;
      height: @bar-tab-height;
      color: #929292;
      text-align: center;
      vertical-align: middle;

      // Active states for the tab bar
      &.active,
      &:active {
        color: @color-primary;
      }

      // Activity badge on an icon
      .badge {
        position: absolute;
        top: .1rem;
        left: 50%;
        z-index: 100;
        height: .8rem;
        min-width: .8rem;
        padding: 0 .2rem;
        font-size: .6rem;
        line-height: .8rem;
        color: white;
        vertical-align: top;
        background: red;
        border-radius: .5rem;
        margin-left: .1rem;
      }

      // Tab icon
      .icon {
        top: 0.05rem;
        //width: 1.2rem;
        height: 1.2rem;
        font-size: 1.2rem;
        line-height: 1.2rem;
        padding-top: 0;
        padding-bottom: 0;

        // Make the text smaller if it's used with an icon '
        ~ .tab-label {
          display: block;
          font-size: 0.55rem;
          position: relative;
          top: 0.15rem;
        }
      }
    }
  }
</style>