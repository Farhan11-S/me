<template>
  <div id="app">
    <MainCard />
    <particles-bg
      type="cobweb"
      :canvas="{ backgroundColor: '#0f3057', height: '150%' }"
      :bg="true"
    />
  </div>
</template>

<script>
import MainCard from "./components/MainCard";

export default {
  name: "App",

  components: {
    MainCard,
  },

  data: () => ({
    particl: true,
  }),
};
</script>

<style>
@media only screen and (min-width: 768px) {
  html,
  body {
    overflow: hidden;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>