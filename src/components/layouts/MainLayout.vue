<template>
  <div class="bg-white-pastel-medium">
    <Menu />
    <Home />
  </div>
</template>

<script>
import Menu from "../MenuHeader.vue";
import Home from "../HomeBody.vue";

export default {
  name: "App",
  components: {
    Menu,
    Home,
  },
};
</script>
