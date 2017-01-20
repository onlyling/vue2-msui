<template>
  <ms-page>
    <ms-bar-nav :title="$route.meta.title"> </ms-bar-nav>
    <ms-content>

      <div class="content-block">

        <p>
          <ms-button @click="clickPreloader">preloader</ms-button>
        </p>

        <p>
          <ms-button @click="clickPreloader2">preloader</ms-button>
        </p>

        <p>
          <ms-button @click="clickToast">toast</ms-button>
        </p>

      </div>

    </ms-content>
  </ms-page>
</template>
<script>
  export default{
    methods: {
      clickPreloader(e) {
        this.$preloader()
        setTimeout(() => {
          this.$preloader.close()
        }, 2000)
      },
      clickPreloader2() {
        this.$preloader('diy')
        setTimeout(() => {
          this.$preloader.close()
        }, 2000)
      },
      clickToast() {
        this.$toast('测试')
      }
    }
  }
</script>