<template>
  <div
    id="#home"
    class="animate__animated animate__fadeInUp m-auto flex w-[21.5em] flex-col justify-between py-[3em] text-[1.12em] text-brown-pastel-dark md:flex-row md:py-[8em]"
  >
    <img
      class="m-auto w-[8em] rounded-full border-[0.3em] border-white-pastel-light outline outline-[0.01px] outline-[#dddcdc] md:m-0"
      src="../assets/images/sarah.jpg"
    />

    <div
      class="flex h-[6em] flex-col justify-between self-center pt-[1em] text-center md:pt-0 md:text-start"
    >
      <div>
        <h1>sarah</h1>
        <h2>desenvolvedora & artista.</h2>
      </div>
      <div class="flex w-[6em] justify-between self-center md:self-start">
        <a href="https://github.com/piltie" target="_blank"
          ><i class="fa-brands fa-github flex"></i
        ></a>
        <a href="#footer"><AtSymbolIcon class="w-[1.1em]" /></a>
        <a
          href="https://www.linkedin.com/in/sarah-carla-souza-31166b207"
          target="_blank"
          ><i class="fa-brands fa-linkedin flex"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import { AtSymbolIcon } from "@heroicons/vue/24/outline";

export default {
  name: "PortfolioHome",
  components: { AtSymbolIcon },
};
</script>
