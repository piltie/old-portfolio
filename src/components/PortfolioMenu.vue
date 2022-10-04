<template>
  <header
    class="sticky top-0 z-10 flex flex-row-reverse items-center justify-between border-[0.01px] border-[#dddcdc] bg-white-pastel-light text-[1.4em] font-semibold tracking-wide text-brown-pastel-dark md:grid md:grid-cols-[minmax(4em,_1fr)_9fr_minmax(4em,_1fr)]"
  >
    <button type="button" class="flex min-w-[4em] justify-center">
      <SunIcon class="w-[1.2em]" />
    </button>

    <nav>
      <ul class="flex justify-center">
        <li v-for="(option, index) in menu" :key="option.name">
          <a
            :class="[index > 0 ? 'hidden md:block' : '', 'block px-7 py-5']"
            :href="option.href"
            >{{ option.name }}</a
          >
        </li>
      </ul>
    </nav>
    <button class="hidden justify-center md:flex" type="button">
      <i class="fa-solid fa-paw"></i>
    </button>
    <button type="button" class="flex min-w-[4em] justify-center md:hidden">
      <Bars3Icon class="w-[1.2em]" />
    </button>
  </header>
</template>

<script>
import { SunIcon, Bars3Icon } from "@heroicons/vue/24/outline";

export default {
  name: "PortfolioMenu",
  components: { SunIcon, Bars3Icon },
  data() {
    return {
      menu: [
        {
          name: "home",
          href: "#home",
        },
        {
          name: "sobre",
          href: "#sobre",
        },
        {
          name: "experiência",
          href: "#experiencia",
        },
        {
          name: "projetos",
          href: "#projetos",
        },
      ],
    };
  },
};
</script>
