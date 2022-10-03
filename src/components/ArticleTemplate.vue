<template>
  <div class="pb-[3em]">
    <div class="flex h-[2em] justify-center px-[0.5em]">
      <h1
        class="bg-brown-pastel-light px-[1em] text-center text-[1.7em] font-semibold tracking-[0.2em] text-brown-pastel-darker"
      >
        {{ title }}
      </h1>
    </div>

    <div class="py-[2em]">
      <p v-if="text">{{ text }}</p>
      <div
        v-if="images"
        class="m-auto flex w-[100%] flex-wrap justify-between project-img:flex-col"
      >
        <img
          v-for="image in images"
          :key="image.alt"
          :src="require(`../assets/images/${image.src}`)"
          :alt="image.alt"
          class="w-[48%] border-[0.3em] border-white-pastel-light pb-0 outline outline-[0.01px] outline-[#dddcdc] project-img:w-[100%] project-img:pb-[2em]"
        />
      </div>
    </div>
    <hr class="py-[1em]" />
  </div>
</template>

<script>
export default {
  name: "ArticleTemplate",
  props: {
    title: { String },
    text: { String, Boolean },
    images: { Array, Boolean },
  },
};
</script>
