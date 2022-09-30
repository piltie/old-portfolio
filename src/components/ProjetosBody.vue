<template>
  <div class="pb-[3em]">
    <div class="flex justify-center h-[2em] px-[0.5em]">
      <h1
        class="px-[1em] text-center font-JosefinSlab tracking-[0.2em] font-semibold text-[1.7em] text-brown-pastel-darker bg-brown-pastel-light"
      >
        PROJETOS
      </h1>
    </div>
    <div
      class="flex py-[2em] m-auto project-img:justify-center justify-between flex-wrap"
    >
      <div
        class="w-[50%] min-w-[25.2em] pr-[1em] project-img:pb-[2em] pb-0 project-img:pr-0"
      >
        <img
          class="m-auto outline outline-[0.01px] outline-[#dddcdc] border-[0.3em] border-white-pastel-light after:content-[''] after:rounded-full after:border-red-500 after:border-[3em]"
          src="../assets/images/molang.png"
        />
      </div>

      <div
        class="w-[50%] min-w-[25.2em] pb-0 project-img:pb-[2em] project-img:pl-0 pl-[1em]"
      >
        <img
          class="m-auto outline outline-[0.01px] outline-[#dddcdc] border-[0.3em] border-white-pastel-light after:content-[''] after:rounded-full after:border-red-500 after:border-[3em]"
          src="../assets/images/gatteria.png"
        />
      </div>
    </div>
    <hr class="py-[1em]" />
  </div>
</template>

<script>
export default {
  name: "ProjetosBody",
};
</script>
