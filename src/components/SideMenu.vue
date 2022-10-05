<template>
  <nav
    class="absolute z-40 min-h-[100%] w-[12em] border-r-[0.01px] border-[#dddcdc] bg-white-pastel-light"
  >
    <ul class="flex flex-col justify-center">
      <li v-for="(option, index) in menu" :key="option.name">
        <a
          :class="[index == 0 ? 'hidden' : '', 'block px-7 py-5']"
          :id="option.name"
          :href="option.href"
          >{{ option.name }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "ArticleTemplate",
  props: {
    menu: { Array },
  },
};
</script>
