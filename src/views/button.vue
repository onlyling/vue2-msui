<template>
  <ms-page>
    <ms-bar-nav :title="$route.meta.title"></ms-bar-nav>
    <ms-content>

      <div class="content-block">

        <p><ms-button @click="clickAlert">usual Button</ms-button></p>

        <p><ms-button type="light" @click="clickAlert">light Button</ms-button></p>

        <p><ms-button type="dark" @click="clickAlert">dark Button</ms-button></p>

        <p><ms-button type="success" @click="clickAlert">success Button</ms-button></p>

        <p><ms-button type="warning" @click="clickAlert">warning Button</ms-button></p>

        <p><ms-button :disabled="true" @click="clickAlert">disabled Button</ms-button></p>

        <p><ms-button :round="true" @click="clickAlert">round Button</ms-button></p>

        <p><ms-button size="big" @click="clickAlert">big Button</ms-button></p>

        <p><ms-button :round="true" size="big" @click="clickAlert">big round Button</ms-button></p>

      </div>

      <div class="content-block">

        <p><ms-button :fill="true">usual Button</ms-button></p>

        <p><ms-button type="light" :fill="true">light Button</ms-button></p>

        <p><ms-button type="dark" :fill="true">dark Button</ms-button></p>

        <p><ms-button type="success" :fill="true">success Button</ms-button></p>

        <p><ms-button type="warning" :fill="true">warning Button</ms-button></p>

        <p><ms-button :disabled="true" :fill="true">disabled Button</ms-button></p>

        <p><ms-button :round="true" :fill="true">round Button</ms-button></p>

        <p><ms-button size="big" :fill="true">big Button</ms-button></p>

        <p><ms-button :round="true" size="big" :fill="true">big round Button</ms-button></p>

      </div>

      <div class="content-block">

        <p>
          <ms-buttons-group>
            <ms-button>usual Button</ms-button>
            <ms-button>usual Button</ms-button>
            <ms-button>usual Button</ms-button>
          </ms-buttons-group>
        </p>

        <p>
          <ms-buttons-group>
            <ms-button class="active">usual Button</ms-button>
            <ms-button>usual Button</ms-button>
            <ms-button>usual Button</ms-button>
          </ms-buttons-group>
        </p>

        <p>
          <ms-buttons-group>
            <ms-button>usual Button</ms-button>
            <ms-button class="active">usual Button</ms-button>
            <ms-button>usual Button</ms-button>
          </ms-buttons-group>
        </p>

        <p>
          <ms-buttons-group>
            <ms-button :round="true">usual Button</ms-button>
            <ms-button :round="true">usual Button</ms-button>
            <ms-button :round="true">usual Button</ms-button>
          </ms-buttons-group>
        </p>

        <p>
          <ms-buttons-group>
            <ms-button :round="true">usual Button</ms-button>
            <ms-button :round="true" class="active">usual Button</ms-button>
            <ms-button :round="true">usual Button</ms-button>
          </ms-buttons-group>
        </p>

        <p>
          <ms-buttons-group>
            <ms-button :round="true">usual Button</ms-button>
            <ms-button :round="true">usual Button</ms-button>
            <ms-button :round="true" class="active">usual Button</ms-button>
          </ms-buttons-group>
        </p>

      </div>

      <div class="content-block">
        
        <ms-buttons-tab :nav="buttonTabs"></ms-buttons-tab>

      </div>

    </ms-content>
  </ms-page>
</template>
<script>
  export default{
    data() {
      return {
        buttonTabs: [{
          text: '文字1',
          active: true
        }, {
          text: '文字2',
          active: false
        }, {
          text: '文字2',
          active: false
        }]
      }
    },
    methods: {
      clickAlert(e){
        this.$alert(e.target.innerHTML)
      }
    }
  }
</script>