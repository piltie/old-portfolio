<template>
  <div class="bg-white-pastel-medium">
    <Menu />
    <Home />
    <Sobre />
  </div>
</template>

<script>
import Menu from "../MenuHeader.vue";
import Home from "../HomeBody.vue";
import Sobre from "../SobreBody.vue";

export default {
  name: "App",
  components: {
    Menu,
    Home,
    Sobre,
  },
};
</script>
