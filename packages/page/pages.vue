<template>
  <div
    class="page-group"
    :class="{
      'with-panel-right-reveal': openRight,
      'with-panel-left-reveal': openLeft
      }"
    >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ms-pages',
    props: {
      panelopen: Boolean,
      paneldir: String
    },
    computed: {
      openRight() {
        return (this.paneldir == 'right') ? this.panelopen : false
      },
      openLeft() {
        return (this.paneldir == 'left') ? this.panelopen : false
      }
    }
  }
</script>
<style lang="less">

  .page {
    transition: 400ms;
    transition-property: transform;
  }

  .with-panel-left-reveal {
    .page {
      transform: translate3d(12rem, 0, 0);
    }
    .panel-reveal {
      left: 0;
    }
  }

  .with-panel-right-reveal {
    .page {
      transform: translate3d(-12rem, 0, 0);
    }
    .panel-reveal {
      right: 0;
    }
  }

</style>