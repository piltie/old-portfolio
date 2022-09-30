<template>
  <div
    class="md:py-[7em] py-[3em] font-JosefinSlab text-[1.12em] text-brown-pastel-dark"
  >
    <div
      class="flex md:flex-row flex-col m-auto w-[21.5em] justify-between animate__animated animate__fadeInUp"
    >
      <div clas="rounded-full">
        <img
          class="m-auto w-[8em] rounded-full outline outline-[0.01px] outline-[#dddcdc] border-[0.3em] border-white-pastel-light after:content-[''] after:rounded-full after:border-red-500 after:border-[3em]"
          src="../assets/images/sarah.jpg"
        />
      </div>
      <div
        class="flex flex-col self-center justify-between h-[6em] md:pt-0 pt-[1em] md:text-start text-center"
      >
        <div>
          <h1 class="font-bold h-[1.7em]">sarah</h1>
          <h2 class="font-medium">desenvolvedora & artista.</h2>
        </div>
        <div class="flex justify-between w-[6em] md:self-start self-center">
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
    </div>
  </div>
</template>

<script>
import { AtSymbolIcon } from "@heroicons/vue/24/outline";

export default {
  name: "MenuHeader",
  components: { AtSymbolIcon },
};
</script>
