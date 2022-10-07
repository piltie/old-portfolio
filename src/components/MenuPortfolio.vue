<template>
  <header
    class="sticky top-0 z-10 flex items-center justify-between border-b-[0.01px] border-[#dddcdc] bg-white-pastel-light text-[1.5em] font-semibold tracking-wide text-brown-pastel-dark menu-md:grid menu-md:grid-cols-[minmax(7em,_1fr)_9fr_minmax(7em,_1fr)]"
  >
    <div class="hidden menu-md:flex menu-md:flex-row-reverse">
      <img class="w-[4em] justify-center" src="../assets/images/logo.png" />
    </div>
    <div id="socorro" class="flex min-w-[4em] justify-end menu-md:hidden">
      <button type="button" v-on="{ click: toggleSideMenu }">
        <div id="barsIcon">
          <Bars3Icon class="w-[1.2em]" />
        </div>
        <div id="arrowIcon" class="hidden">
          <ArrowLeftCircleIcon class="w-[1.2em]" />
        </div>
      </button>
    </div>

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
            v-on="index == 0 ? { click: toggleSideMenu } : {}"
            >{{ option.name }}</a
          >
        </li>
      </ul>
    </nav>
    <button type="button" class="flex min-w-[4em]">
      <SunIcon class="w-[1.2em]" />
    </button>
  </header>
  <div
    id="sideMenuBackground"
    class="fixed h-[100vh] w-[100vw] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:block after:bg-black-pastel after:opacity-0 after:transition-opacity after:duration-300 after:ease-in after:content-[''] menu-md:invisible"
  ></div>
  <nav
    id="sideMenu"
    class="fixed z-40 hidden h-[100vh] w-[70vw] items-start justify-between border-r-[0.01px] border-[#dddcdc] bg-white-pastel-light px-[3em] pt-[2em] menu-md:invisible"
  >
    <ul class="flex flex-col justify-center">
      <li v-for="(option, index) in menu" :key="option.name">
        <a
          :class="[
            index == 0 ? 'hidden' : '',
            'block px-7 py-5 text-[1.5em] font-semibold text-brown-pastel-dark ',
          ]"
          :id="`${option.name}sideBar`"
          :href="option.href"
          v-on="{ click: toggleSideMenu }"
          >{{ option.name }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import {
  SunIcon,
  Bars3Icon,
  ArrowLeftCircleIcon,
} from "@heroicons/vue/24/outline";

export default {
  name: "MenuPortfolio",
  components: { SunIcon, ArrowLeftCircleIcon, Bars3Icon },
  mounted() {
    this.$nextTick(() => {
      const sideMenu = document.getElementById("sideMenu");
      const barsIcon = document.getElementById("barsIcon");
      const arrowIcon = document.getElementById("arrowIcon");

      sideMenu.addEventListener("animationend", (e) => {
        const menu = e.target;

        if (menu.classList.contains("animate__slideOutLeft")) {
          menu.classList.remove("animate__animated", "animate__slideOutLeft");
          barsIcon.classList.remove("hidden");
          arrowIcon.classList.add("hidden");
          sideMenu.classList.add("hidden");

          return;
        }

        sideMenu.classList.remove("animate__animated", "animate__slideInLeft");
      });

      // Adds smoothness to the scrolling transition
      this.menu.forEach((el) => {
        const teste = document.getElementById(el.name);
        const teste2 = document.getElementById(`${el.name}sideBar`);

        teste.addEventListener("click", (e) => {
          const sideMenu = document.getElementById("sideMenu");
          e.preventDefault();
          if (e.target.id != "home" || sideMenu.classList.contains("hidden")) {
            const target = document.getElementById(e.target.id.toUpperCase());

            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
        teste2.addEventListener("click", (teste) => {
          teste.preventDefault();
          if (sideMenu.classList.contains("animate__animated")) {
            return;
          }
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
    toggleSideMenu(e) {
      const sideMenu = document.getElementById("sideMenu");
      const barsIcon = document.getElementById("barsIcon");
      const arrowIcon = document.getElementById("arrowIcon");
      const background = document.getElementById("sideMenuBackground");

      if (
        !sideMenu.classList.contains("animate__slideInLeft") ||
        !sideMenu.classList.contains("animate__slideOutLeft")
      ) {
        if (sideMenu.classList.contains("hidden") && e.target.id != "home") {
          barsIcon.classList.add("hidden");
          arrowIcon.classList.remove("hidden");

          background.classList.remove("after:opacity-0");
          background.classList.add("after:opacity-25", "z-30");

          sideMenu.classList.remove("hidden");
          sideMenu.classList.add("animate__animated", "animate__slideInLeft");

          document.body.style.overflow = "hidden";

          return;
        }

        if (!sideMenu.classList.contains("hidden") && e.target.tagName == "A") {
          let target = document.getElementById(
            e.target.id.toUpperCase().replace("SIDEBAR", "")
          );
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        sideMenu.classList.add("animate__animated", "animate__slideOutLeft");
      }

      if (sideMenu.classList.contains("animate__slideOutLeft")) {
        background.classList.remove("after:opacity-25", "z-30");
        background.classList.add("after:opacity-0");
        document.body.style.overflow = "auto";
      }
    },
  },
};
</script>
