<template>
  <div class="bg-white-pastel-medium">
    <Menu />
    <Home />
    <main class="m-auto w-[80%]">
      <Article
        v-for="article in articles"
        :key="article.title"
        :title="article.title"
        :text="article.text ? article.text : false"
        :images="article.images ? article.images : false"
        class="animate__animated animate__fadeInUp"
      />
    </main>

    <Footer />
  </div>
</template>

<script>
import Menu from "./MenuPortfolio.vue";
import Home from "./HomePortfolio.vue";
import Footer from "./FooterPortfolio.vue";
import Article from "./ArticleTemplate.vue";

export default {
  name: "LayoutPortfolio",
  components: {
    Menu,
    Home,
    Article,
    Footer,
  },
  data() {
    return {
      articles: [
        {
          title: "SOBRE",
          text: "Sou uma Desenvolvedora Júnior com sede de aprendizado, além de ser estudante de Sistemas de Informação. Estou aprendendo na prática tecnologias web, tanto front-end quanto back-end. Comecei a desenvolver em ASP.NET MVC e Vue.js com Tailwind/Bootstrap 5, juntamente com Oracle/SQL Server no banco de dados.<br>Tenho também o pacote básico de linguagens de qualquer desenvolvedor web (Javascript, HTML5 e CSS), enquanto também lido com Python, SQL e C#.<br>Meu objetivo é me estabelecer nessa área web full stack, procurando sempre superar minhas metas.",
        },
        {
          title: "EXPERIÊNCIA",
          text: "Em janeiro de 2021 iniciei minha graduação no curso de S.I, na UniFOA. Em setembro do mesmo ano, comecei um estágio como programadora, também na UniFOA, e atualmente trabalho na mesma como desenvolvedora web full stack júnior, desenvolvendo sistemas webs/APIs em .NET + React/Vue.js com base de dados Oracle e SQL Server, e também dando manutenção em sistemas legado (ASP clássico/VBScript).",
        },
        {
          title: "PROJETOS",
          images: [
            {
              src: "molang.png",
              alt: "Molang",
              caption: "HTML5, CSS3 e Vanilla JS",
              link: "https://github.com/piltie/E-commerce-website",
            },
            {
              src: "gatteria.png",
              alt: "Gatteria",
              caption: "Vue 3 e Tailwind CSS",
              link: "https://github.com/piltie/E-commerce-website-Vue-",
            },
            {
              src: "embreve.png",
              alt: "Em breve",
              caption: "React e ASP .NET Core MVC",
            },
            {
              src: "embreve.png",
              alt: "Em breve",
              caption: "Angular e ASP .NET Core MVC",
            },
            {
              src: "embreve.png",
              alt: "Em breve",
              caption: "ASP .NET Core Web API",
            },
          ],
        },
      ],
    };
  },
};
</script>
