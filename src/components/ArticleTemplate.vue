<template>
  <div class="pb-[3em]">
    <div class="flex h-[2em] justify-center px-[0.5em]">
      <h1
        class="bg-brown-pastel-light px-[1em] text-center text-[1.7em] tracking-[0.2em] text-brown-pastel-darker"
      >
        {{ title }}
      </h1>
    </div>

    <div>
      <p v-if="text" class="py-[2em]">{{ text }}</p>
      <div
        v-if="images"
        class="m-auto flex w-[95%] flex-wrap justify-center pb-[2em] text-center text-[1.2em] project-img:w-[100%] project-img:flex-col"
      >
        <div
          v-for="image in images"
          :key="image.alt"
          class="mx-[1em] mt-[2em] w-[38%] border-[0.3em] border-white-pastel-light bg-white-default outline outline-[0.01px] outline-[#dddcdc] project-img:mx-0 project-img:w-[100%]"
        >
          <a :href="image.link" target="_blank"
            ><img
              :src="require(`../assets/images/${image.src}`)"
              :alt="image.alt"
          /></a>
          <h2 class="p-[1em] font-semibold">
            {{ image.caption }}
          </h2>
        </div>
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
