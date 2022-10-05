<template>
  <header
    class="sticky top-0 z-10 flex items-center justify-between border-b-[0.01px] border-[#dddcdc] bg-white-pastel-light text-[1.4em] font-semibold tracking-wide text-brown-pastel-dark menu-md:grid menu-md:grid-cols-[minmax(7em,_1fr)_9fr_minmax(7em,_1fr)]"
  >
    <div class="hidden menu-md:flex menu-md:flex-row-reverse">
      <img class="w-[4em] justify-center" src="../assets/images/logo.png" />
    </div>
    <button
      type="button"
      @click="toggleSideMenu"
      class="flex min-w-[4em] justify-end menu-md:hidden"
    >
      <Bars3Icon class="w-[1.2em]" />
    </button>
    <nav>
      <ul class="flex justify-center">
        <li v-for="(option, index) in menu" :key="option.name">
          <a
            :class="[
              index > 0 ? 'hidden menu-md:block' : '',
              'block px-7 py-5',
            ]"
            :id="option.name"
            :href="option.href"
            >{{ option.name }}</a
          >
        </li>
      </ul>
    </nav>
    <button type="button" class="flex min-w-[4em]">
      <SunIcon class="w-[1.2em]" />
    </button>
  </header>
  <nav
    id="sideMenu"
    class="fixed top-0 z-40 hidden h-[100vh] w-[25em] items-start justify-between border-r-[0.01px] border-[#dddcdc] bg-white-pastel-light pl-[3em] pt-[2em]"
  >
    <div class="flex w-[20em] items-start justify-between">
      <ul class="flex flex-col justify-center">
        <li v-for="(option, index) in menu" :key="option.name">
          <a
            :class="[index == 0 ? 'hidden' : '', 'block px-7 py-5']"
            :id="option.name"
            :href="option.href"
            >{{ option.name }}</a
          >
        </li>
      </ul>
      <button type="button" id="closeButton" class="">
        <XMarkIcon class="w-[1.2em]" />
      </button>
    </div>
  </nav>
</template>

<script>
import { SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

export default {
  name: "MenuPortfolio",
  components: { SunIcon, XMarkIcon, Bars3Icon },
  mounted() {
    this.$nextTick(() => {
      const button = document.getElementById("closeButton");

      button.addEventListener("click", () => {
        const sideMenu = document.getElementById("sideMenu");

        sideMenu.classList.add("hidden");
        sideMenu.classList.add("remove");
        document.body.style.overflow = "auto";
      });

      // Adds smoothness to the scrolling transition
      this.menu.forEach((el) => {
        const teste = document.getElementById(el.name);

        teste.addEventListener("click", (teste) => {
          teste.preventDefault();
          const target = document.getElementById(el.href);
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    });
  },
  data() {
    return {
      menu: [
        {
          name: "home",
          href: "HOME",
        },
        {
          name: "sobre",
          href: "SOBRE",
        },
        {
          name: "experiência",
          href: "EXPERIÊNCIA",
        },
        {
          name: "projetos",
          href: "PROJETOS",
        },
      ],
    };
  },
  methods: {
    toggleSideMenu() {
      const sideMenu = document.getElementById("sideMenu");

      sideMenu.classList.remove("hidden");
      sideMenu.classList.add("flex");
      document.body.style.overflow = "hidden";
    },
  },
};
</script>
