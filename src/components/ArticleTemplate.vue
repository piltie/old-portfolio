<template>
  <div class="pt-[6em]" :id="title">
    <div class="flex justify-center">
      <h1
        class="text-center font-JosefinSans text-[2.5em] font-semibold text-brown-pastel-dark"
      >
        {{ title }}
      </h1>
    </div>

    <div>
      <p v-if="text" class="py-[2em] text-[1.1em] font-semibold text-[#7c7b7b]">
        {{ text }}
      </p>
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
          <h2 class="p-[1em] text-[1em] font-medium text-[#888787]">
            {{ image.caption }}
          </h2>
        </div>
      </div>
    </div>
    <hr />
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
