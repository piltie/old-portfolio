<template>
  <div class="bg-white-pastel-medium">
    <header
      class="flex flex-row-reverse justify-between bg-white-pastel-light font-JosefinSlab tracking-wide font-semibold text-[1.4em] border-[#dddcdc] border-[0.01px] text-brown-pastel-dark md:grid md:grid-cols-[minmax(4em,_1fr)_9fr_minmax(4em,_1fr)] items-center sticky top-0 z-10"
    >
      <Menu />
    </header>

    <Home id="#home" />
    <main class="w-[80%] m-auto animate__animated animate__fadeInUp">
      <Sobre />
      <Experiencia />
      <Projetos />
    </main>
  </div>
</template>

<script>
import Menu from "../MenuHeader.vue";
import Home from "../HomeBody.vue";
import Sobre from "../SobreBody.vue";
import Experiencia from "../ExperienciaBody.vue";
import Projetos from "../ProjetosBody.vue";

export default {
  name: "App",
  components: {
    Menu,
    Home,
    Sobre,
    Experiencia,
    Projetos,
  },
};
</script>
