<template>
  <ms-page>
    <ms-bar-nav :title="$route.meta.title"></ms-bar-nav>
    <ms-content>

      <ms-content-block-title>表单</ms-content-block-title>
      <ms-list-block>

        <ms-list-block-item-input label="sheme" icon="home">
          <input type="text" placeholder="Your name">
        </ms-list-block-item-input>

        <ms-list-block-item-input label="sheme">
          <input type="text" placeholder="Your name">
        </ms-list-block-item-input>

        <ms-list-block-item-input icon="home">
          <input type="text" placeholder="Your name">
        </ms-list-block-item-input>

        <ms-list-block-item-input label="开关组件">
          <ms-switch v-model="switchObj"></ms-switch>
        </ms-list-block-item-input>

        <ms-list-block-item-input label="复选">
          <ms-checkbox v-model="checkboxObj" label="1"></ms-checkbox>
        </ms-list-block-item-input>

      </ms-list-block>

      <div class="content-block">
        <ms-button :fill="true" @click="sure">确定</ms-button>
      </div>

    </ms-content>
  </ms-page>
</template>
<script>
  export default {
    data() {
      return {
        switchObj: true,
        checkboxObj: ['1'],
        checkboxObjs: ['1']
      }
    },
    methods: {
      sure() {
        console.log(this.switchObj)
        console.log(this.checkboxObj)
      }
    },
    watch: {
      checkboxObjs(val){
        console.log(this.checkboxObjs)
      }
    }
  }
</script>