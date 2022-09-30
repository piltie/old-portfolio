<template>
  <div
    class="flex flex-row-reverse justify-between bg-white-pastel-light font-JosefinSlab tracking-wide font-semibold text-[1.15em] border-[#dddcdc] border-[0.01px] text-brown-pastel-dark md:grid md:grid-cols-[minmax(4em,_1fr)_9fr_minmax(4em,_1fr)] items-center"
  >
    <div class="flex justify-center min-w-[4em]">
      <button type="button">
        <SunIcon class="w-[1.2em] hover:text-brown-pastel-medium" />
      </button>
    </div>
    <nav>
      <ul class="flex justify-center">
        <li>
          <a class="block px-7 py-5 hover:text-brown-pastel-medium" href="#home"
            >home</a
          >
        </li>
        <li v-if="windowWidth >= mdWidth">
          <a
            class="block px-7 py-5 hover:text-brown-pastel-medium"
            href="#sobre"
            >sobre</a
          >
        </li>
        <li v-if="windowWidth >= mdWidth">
          <a
            class="block px-7 py-5 hover:text-brown-pastel-medium"
            href="#experiencia"
            >experiência</a
          >
        </li>
      </ul>
    </nav>
    <div class="flex justify-center" v-if="windowWidth >= mdWidth">
      <button class="flex" type="button">
        <i class="fa-solid fa-paw hover:text-brown-pastel-medium"></i>
      </button>
    </div>
    <div class="flex justify-center min-w-[4em]" v-if="windowWidth < mdWidth">
      <button type="button">
        <Bars3Icon class="w-[1.2em] hover:text-brown-pastel-medium" />
      </button>
    </div>
  </div>
</template>

<script>
import { SunIcon, Bars3Icon } from "@heroicons/vue/24/outline";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

export default {
  name: "MenuHeader",
  components: { SunIcon, Bars3Icon },
  data() {
    return {
      windowWidth: window.innerWidth,
      mdWidth: 0,
    };
  },
  mounted() {
    const fullConfig = resolveConfig(tailwindConfig);
    const mdWidth = parseInt(fullConfig.theme.screens.md.replace("px", ""));
    this.mdWidth = mdWidth;

    this.$nextTick(() => {
      window.onresize = () => {
        this.windowWidth = window.innerWidth;
      };
    });
  },
};
</script>
