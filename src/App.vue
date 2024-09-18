<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";


export default {
  data() {
    return {

    }
  },

  components: {
    AppHeader,
    AppMain,
  }

}
</script>

<template>

  <body>
    <AppHeader />
    <AppMain />

  </body>

</template>

<style lang="scss">
@use "bootstrap/scss/bootstrap.scss" as *;
@use "./styles/generics.scss" as *;
</style>
