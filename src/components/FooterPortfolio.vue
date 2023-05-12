<template>
  <footer
    class="m-auto mt-[5em] flex justify-center bg-brown-pastel-light py-[3em] text-[1.3em] font-semibold tracking-wide text-brown-pastel-dark dark:bg-[#594545] dark:text-[#F7CCAC] footer-sm:text-[1em] menu-md:text-[1.2em]"
  >
    <div class="flex h-[17em] w-[100%] flex-col items-center justify-between">
      <img
        class="self-top block w-[6em] dark:hidden"
        src="../assets/images/logo.png"
      />
      <img
        class="self-top hidden w-[6em] dark:block"
        src="../assets/images/logo-dark.png"
      />
      <div class="flex h-[14em] flex-col flex-wrap justify-between text-center">
        <div class="flex h-[12em] flex-col flex-wrap justify-between">
          <h1 class="text-[1.2em]">CONTATO</h1>

          <div class="flex flex-col">
            <a
              href="./Curriculo.pdf"
              target="_blank"
              class="flex justify-center py-[0.2em] text-[1em]"
            >
              <PaperClipIcon
                class="mr-[0.2em] ml-[-0.1em] w-[0.8em] self-center"
              />
              currículo (PDF)
            </a>
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
  </footer>
</template>

<script>
import { EnvelopeIcon } from "@heroicons/vue/20/solid";
import { PaperClipIcon } from "@heroicons/vue/20/solid";

export default {
  name: "FooterPortfolio",
  components: { EnvelopeIcon, PaperClipIcon },
};
</script>
