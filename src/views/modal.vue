<template>
  <ms-page>
    <ms-bar-nav :title="$route.meta.title"></ms-bar-nav>
    <ms-content>

      <div class="content-block">

        <p><ms-button @click="clickAlert">alert</ms-button></p>

      </div>

    </ms-content>
  </ms-page>
</template>
<script>
  export default{
    methods: {
      clickAlert(e){
        this.$alert('什么鬼', '标题', function(){
          console.log('1')
        })
      }
    }
  }
</script>