<template>
  <div class="bg-white-pastel-medium dark:bg-[#3A3845]">
    <Menu />
    <Home />
    <main class="m-auto w-[80%]">
      <Articles />
    </main>
    <Footer />
  </div>
</template>

<script>
import Menu from "./components/MenuPortfolio.vue";
import Home from "./components/HomePortfolio.vue";
import Footer from "./components/FooterPortfolio.vue";
import Articles from "./components/ArticlesPortfolio.vue";

export default {
  name: "App",
  components: {
    Menu,
    Home,
    Articles,
    Footer,
  },
};
</script>
