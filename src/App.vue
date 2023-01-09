<template>
  <div id="app">
    <HeaderComponent />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "app",
  components: {
    HeaderComponent,
  },
};
</script>

<style>
</style>