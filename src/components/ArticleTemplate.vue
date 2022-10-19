<template>
  <div class="pt-[6em]" :id="title">
    <div class="flex justify-center">
      <h1
        class="text-center text-[2.1em] text-brown-pastel-dark dark:text-[#F7CCAC]"
      >
        {{ title }}
      </h1>
    </div>

    <div>
      <p
        v-if="text"
        :id="`${title}Texto`"
        class="py-[2em] text-[1.2em] font-semibold text-[#7c7b7b] dark:text-[#aaa7a7] menu-md:text-[1em]"
      ></p>
      <div
        v-if="images"
        class="m-auto flex w-[95%] flex-wrap justify-center pb-[2em] text-center text-[1.2em] project-img:w-[100%] project-img:flex-col"
      >
        <div
          v-for="image in images"
          :key="image.alt"
          class="mx-[1em] mt-[2em] w-[38%] border-[0.3em] border-white-pastel-light bg-white-default outline outline-[0.01px] outline-[#dddcdc] dark:border-brown-pastel-darkest dark:bg-brown-pastel-darkest dark:outline-[#815B5B] project-img:mx-0 project-img:w-[100%]"
        >
          <a :href="image.link" target="_blank"
            ><img
              :src="require(`../assets/images/${image.src}`)"
              :alt="image.alt"
          /></a>
          <h2 class="p-[1em] text-[1em] text-[#888787] dark:text-[#cfc4c4]">
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
  name: "ArticleTemplate",
  props: {
    title: { String },
    text: { String, Boolean },
    images: { Array, Boolean },
  },
  mounted() {
    if (this.text) {
      var test = document.getElementById(`${this.title}Texto`);
      test.innerHTML = this.text;
    }
  },
};
</script>
