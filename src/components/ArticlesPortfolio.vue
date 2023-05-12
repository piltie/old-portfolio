<template>
  <div
    v-for="article in articles"
    :key="article.title"
    :id="article.title"
    class="animate__animated animate__fadeInUp pt-[6em]"
  >
    <div class="flex justify-center">
      <h1
        class="text-center text-[2.1em] text-brown-pastel-dark dark:text-[#F7CCAC]"
      >
        {{ article.title }}
      </h1>
    </div>

    <div>
      <p
        v-if="article.text"
        :id="`${article.title}Texto`"
        class="py-[2em] text-center text-[1.2em] font-semibold text-[#7c7b7b] dark:text-[#aaa7a7]"
      ></p>
      <div
        v-if="article.images"
        class="m-auto flex w-[95%] flex-wrap justify-center pb-[2em] text-center text-[1.2em] project-img:w-[100%] project-img:flex-col"
      >
        <div
          v-for="image in article.images"
          :key="image.alt"
          class="mx-[1em] mt-[2em] w-[38%] border-[0.3em] border-white-pastel-light bg-white-default outline outline-[0.01px] outline-[#dddcdc] dark:border-brown-pastel-darkest dark:bg-brown-pastel-darkest dark:outline-[#815B5B] project-img:mx-0 project-img:w-[100%]"
        >
          <a :href="image.link" target="_blank"
            ><img
              :src="require(`../assets/images/${image.src}`)"
              :alt="image.alt"
          /></a>
          <h2 class="p-[1em] text-[1.2em] text-[#888787] dark:text-[#cfc4c4]">
            {{ image.caption }}
          </h2>
        </div>
      </div>
    </div>
    <hr class="dark:border-[#815B5B]" />
  </div>
</template>

<script>
export default {
  name: "ArticlesPortfolio",
  data() {
    return {
      articles: [
        {
          title: "SOBRE",
          text: "Sou uma desenvolvedora com sede de aprendizado, e estudante de Sistemas de Informação.<br>Comecei a desenvolver tanto em front-end quanto em back-end na segunda metade de 2021, adentrando o mundo d C# e ASP.NET (MVC, Web APIs REST), além de linguagens voltadas para web (Javascript e HTML/CSS), juntamente com SQL (Oracle e SQL Server) na área de banco de dados. Em 2022, entrei de cabeça em frameworks de front-end (Vue e React -Typescript-), assim como o css (Tailwind e Bootstrap). Também comecei a estudar Entity Framework, MongoDB, PostgreSQL (C/ Sequelize) e Dockers.<br>Em quesito de técnicas de desenvolvimento e afins, estou estudando Metodologia Ágil e TDD.",
        },
        {
          title: "EXPERIÊNCIA",
          text: "Em janeiro de 2021 iniciei minha graduação no curso de S.I, na UniFOA. Em setembro do mesmo ano, comecei um estágio como programadora, também na UniFOA, e atualmente trabalho na mesma como desenvolvedora web full stack júnior, desenvolvendo sistemas webs/APIs em .NET com o Razor pages (apliquei também React/Vue em um projeto ou outro), com base de dados Oracle e SQL Server (utilizando git e azure para armazenar os repositórios), e também dando manutenção em sistemas legado (ASP clássico/VBScript).<br />A maioria dos meus projetos de trabalho são para sistemas internos da empresa ,mas no meu tempo livre me esforço para enriquecer meu portfólio pessoal.",
        },
        {
          title: "PROJETOS",
          images: [
            {
              src: "molang.png",
              alt: "Molang",
              caption: "html, css e javascript",
              link: "https://github.com/piltie/E-commerce-website",
            },
            {
              src: "gatteria.png",
              alt: "Gatteria",
              caption: "vue e tailwind css",
              link: "https://github.com/piltie/E-commerce-website-Vue-",
            },
            {
              src: "embreve.png",
              alt: "Em breve",
              caption: "react e asp.net core mvc",
            },
            {
              src: "embreve.png",
              alt: "Em breve",
              caption: "angular e asp.net core mvc",
            },
            {
              src: "embreve.png",
              alt: "Em breve",
              caption: " asp.net core web api",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.articles.forEach((article) => {
        if (article.text) {
          var test = document.getElementById(`${article.title}Texto`);
          console.log(test);
          test.innerHTML = article.text;
        }
      });
    });
  },
};
</script>
