<template>
  <div
    id="HOME"
    class="animate__animated animate__fadeInUp m-auto flex w-[21.5em] flex-col justify-between py-[3em] pb-0 pt-[5em] text-[1.3em] text-brown-pastel-dark md:flex-row md:pt-[5em]"
  >
    <img
      class="m-auto w-[8em] rounded-full border-[0.3em] border-white-pastel-light outline outline-[0.01px] outline-[#dddcdc] md:m-0"
      src="../assets/images/sarah.jpg"
    />

    <div
      class="flex h-[6em] flex-col justify-between self-center pt-[1em] text-center md:pt-0 md:text-start"
    >
      <div>
        <h1 class="font-JosefinSans font-semibold">sarah</h1>
        <h2 class="font-semibold">desenvolvedora & artista.</h2>
      </div>
      <div class="flex w-[6em] justify-between self-center md:self-start">
        <a href="https://github.com/piltie" target="_blank"
          ><i class="fa-brands fa-github flex"></i
        ></a>
        <a href="EMAIL" id="email"><AtSymbolIcon class="w-[1.1em]" /></a>
        <a href="https://www.linkedin.com/in/sarahcarlasouza" target="_blank"
          ><i class="fa-brands fa-linkedin flex"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import { AtSymbolIcon } from "@heroicons/vue/24/outline";

export default {
  name: "HomePortfolio",
  components: { AtSymbolIcon },
  mounted() {
    const teste = document.getElementById("email");

    teste.addEventListener("click", (teste) => {
      teste.preventDefault();
      const target = document.getElementById("EMAIL");
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  },
};
</script>
