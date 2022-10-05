<template>
  <header
    class="m-auto mt-[5em] flex justify-center bg-brown-pastel-light py-[3em] px-[2em] text-[1.3em] font-semibold tracking-wide text-brown-pastel-dark"
  >
    <div
      class="flex h-[15.5em] min-w-[19.8em] flex-col items-center justify-between md:min-w-[21em]"
    >
      <img class="self-top w-[6em]" src="../assets/images/logo.png" />
      <div
        class="flex h-[12.5em] flex-col flex-wrap justify-between text-center"
      >
        <div class="flex h-[9.5em] flex-col flex-wrap justify-between">
          <h1 class="font-JosefinSans text-[1.2em]">CONTATO</h1>

          <div class="flex flex-col">
            <button
              type="button"
              class="flex justify-center py-[0.2em] text-[1em]"
            >
              <PaperClipIcon
                class="mr-[0.2em] ml-[-0.1em] w-[0.8em] self-center"
              />
              currículo (PDF)
            </button>
            <a
              href="https://github.com/piltie"
              target="_blank"
              class="py-[0.2em] text-[1em]"
              ><i class="fa-solid fa-code-branch mr-[0.2em] text-[0.8em]"></i
              >github.com/piltie</a
            >
            <a
              href="https://www.linkedin.com/in/sarahcarlasouza"
              target="_blank"
              class="py-[0.2em] text-[1em]"
              ><i class="fa-brands fa-linkedin mr-[0.2em] text-[0.8em]"></i
              >linkedin.com/in/sarahcarlasouza</a
            >
            <div class="flex justify-center py-[0.2em] text-[1em]" id="EMAIL">
              <EnvelopeIcon
                class="mr-[0.2em] ml-[-0.1em] w-[0.8em] self-center"
              />
              sarahcarlasouza.info@gmail.com
            </div>
          </div>
        </div>
        <p class="mt-[0.5em] text-[0.7em]">
          © {{ new Date().getFullYear() }} Portfólio | Criado por Sarah Carla
          Souza.
        </p>
      </div>
    </div>
  </header>
</template>

<script>
import { EnvelopeIcon } from "@heroicons/vue/20/solid";
import { PaperClipIcon } from "@heroicons/vue/20/solid";

export default {
  name: "FooterPortfolio",
  components: { EnvelopeIcon, PaperClipIcon },
};
</script>
