<template>
  <ms-page>
    <ms-bar-nav :title="$route.meta.title"> </ms-bar-nav>
    <ms-content>

      <div class="content-block">

        <p>
          <ms-button @click="clickAlert">alert</ms-button>
        </p>
        <p>
          <ms-button @click="clickAlert2">alert</ms-button>
        </p>

        <p>
          <ms-button @click="clickConfirm">confirm</ms-button>
        </p>
        <p>
          <ms-button @click="clickConfirm2">confirm</ms-button>
        </p>

        <p>
          <ms-button @click="clickModal">modal</ms-button>
        </p>

      </div>

    </ms-content>
  </ms-page>
</template>
<script>
  export default{
    methods: {
      clickAlert(e) {
        this.$alert('什么鬼', '标题', () => {
          this.$alert('哟来。。')
        })
      },
      clickAlert2(e) {
        this.$alert('什么鬼2', () => {
          console.log('1')
        })
      },
      clickConfirm(e) {
        this.$confirm('内容', '标题', () => {
          this.$alert('您点击了确定')
        }, () => {
          this.$alert('您点击了取消')
        })
      },
      clickConfirm2(e) {
        this.$confirm('内容', () => {
          this.$alert('您点击了确定')
        })
      },
      clickModal(e) {
        this.$modal({
          text: '这里是文字',
          title: '这里是标题',
          verticalButtons: true,
          buttons: [{
            text: '按钮1',
            bold: true
          }, {
            text: '按钮2',
            bold: true
          }, {
            text: '按钮3',
            bold: true
          }]
        })
      }
    }
  }
</script>