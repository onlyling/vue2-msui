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

        <p>
          <ms-button @click="clickActions">actions</ms-button>
        </p>

        <p>
          <ms-button @click="clickPopup">popup</ms-button>
        </p>

      </div>

    </ms-content>

    <ms-popup :show="showPopup">
      <div class="content-block">
        <p>Services</p>
        <p><a class="close-popup" @click="clickPopup">Close popup</a></p>
        <p>Lorem ipsum dolor ...</p>
      </div>
    </ms-popup>

  </ms-page>
</template>
<script>
  export default{
    data() {
      return {
        showPopup: false
      }
    },
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
      },
      clickActions() {

        let self = this
        
        let buttons1 = [{
          text: '请选择',
          label: true
        }, {
          text: '卖出',
          bold: true,
          color: 'danger',
          onClick: function () {
            self.$alert("你选择了“卖出“");
          }
        }, {
          text: '买入',
          onClick: function () {
            self.$alert("你选择了“买入“");
          }
        }]

        let buttons2 = [{
          text: '取消',
          bg: 'danger'
        }]

        let groups = [buttons1, buttons2]
        
        this.$actions(groups)
      },
      clickPopup() {
        this.showPopup = !this.showPopup
      }
    }
  }
</script>