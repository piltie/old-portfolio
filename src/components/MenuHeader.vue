<template>
  <div
    class="bg-white-pastel-light font-JosefinSlab font-semibold text-[1.2em] shadow-[0_2px_1.8px_-2px_#cfcfcf] text-brown-pastel-dark grid grid-cols-[minmax(200px,_1fr)_minmax(450px,_9fr)_minmax(200px,_1fr)] items-center"
  >
    <div class="flex justify-center ml-16 min-w-[6em]">
      <div>
        <button class="flex" type="button">
          <SunIcon class="w-[1.2em] hover:text-brown-pastel-medium" />
        </button>
      </div>
    </div>
    <nav>
      <ul class="flex justify-center">
        <li>
          <a class="block px-7 py-6 hover:text-brown-pastel-medium" href="#home"
            >Home</a
          >
        </li>
        <li>
          <a
            class="block px-7 py-6 hover:text-brown-pastel-medium"
            href="#sobre"
            >Sobre</a
          >
        </li>
        <li>
          <a
            class="block px-7 py-6 hover:text-brown-pastel-medium"
            href="#experiencia"
            >Experiência</a
          >
        </li>
      </ul>
    </nav>

    <div class="flex flex-nowrap justify-between mr-16 w-[6.5em]">
      <a
        href="https://github.com/piltie"
        target="_blank"
        class="hover:text-brown-pastel-medium flex items-center"
        ><i class="fa-brands fa-github"></i
      ></a>
      <a href="#footer" class="hover:text-brown-pastel-medium"
        ><AtSymbolIcon class="w-[1.1em]"
      /></a>
      <a
        href="https://www.linkedin.com/in/sarah-carla-souza-31166b207"
        target="_blank"
        class="hover:text-brown-pastel-medium flex items-center"
        ><i class="fa-brands fa-linkedin"></i
      ></a>
    </div>
  </div>
</template>

<script>
import { SunIcon, AtSymbolIcon } from "@heroicons/vue/24/outline";

export default {
  name: "MenuHeader",
  components: { SunIcon, AtSymbolIcon },
};
</script>
