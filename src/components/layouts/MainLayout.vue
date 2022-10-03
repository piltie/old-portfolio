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
  </div>
</template>

<script>
import Menu from "../MenuHeader.vue";
import Home from "../HomeBody.vue";
import Article from "../ArticleTemplate.vue";

export default {
  name: "App",
  components: {
    Menu,
    Home,
    Article,
  },
  data() {
    return {
      articles: [
        {
          title: "SOBRE",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec volutpat ex, sed sodales risus. Sed libero odio, porttitor eget hendrerit non, sollicitudin a quam. Cras consequat, tortor vel congue lacinia, enim nisi ultrices augue, a imperdiet metus lacus et nulla. Sed interdum vitae dolor in dapibus. Cras vulputate convallis ligula, at semper velit tempus vitae. Fusce ac lacus vel ligula euismod dapibus. Fusce sit amet placerat orci. Vestibulum vel orci libero. Vestibulum nec vehicula elit, nec fermentum justo. Mauris vulputate augue nec massa pellentesque, id ultricies risus rutrum. Sed rutrum ligula non libero elementum, ac bibendum nunc posuere. Phasellus non lobortis turpis. Ut iaculis urna convallis est vulputate iaculis. Sed nec convallis sem.",
        },
        {
          title: "EXPERIÊNCIA",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec volutpat ex, sed sodales risus. Sed libero odio, porttitor eget hendrerit non, sollicitudin a quam. Cras consequat, tortor vel congue lacinia, enim nisi ultrices augue, a imperdiet metus lacus et nulla. Sed interdum vitae dolor in dapibus. Cras vulputate convallis ligula, at semper velit tempus vitae. Fusce ac lacus vel ligula euismod dapibus. Fusce sit amet placerat orci. Vestibulum vel orci libero. Vestibulum nec vehicula elit, nec fermentum justo. Mauris vulputate augue nec massa pellentesque, id ultricies risus rutrum. Sed rutrum ligula non libero elementum, ac bibendum nunc posuere. Phasellus non lobortis turpis. Ut iaculis urna convallis est vulputate iaculis. Sed nec convallis sem.",
        },
        {
          title: "PROJETOS",
          images: [
            {
              src: "molang.png",
              alt: "Molang",
            },
            {
              src: "gatteria.png",
              alt: "Gatteria",
            },
          ],
        },
      ],
    };
  },
};
</script>
