<template>
  <div id="app">
	<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url(./css/base.less);
#app {
  font-family: "Lato", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

</style>
