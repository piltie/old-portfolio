<template>
  <div><Menu /></div>
  <div><Home /></div>
</template>

<script>
import Menu from "./components/MenuHeader.vue";
import Home from "./components/HomeBody.vue";

export default {
  name: "App",
  components: {
    Menu,
    Home,
  },
};
</script>
