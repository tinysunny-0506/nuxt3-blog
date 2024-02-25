<template>
  <section class="hero bg-gray-100 py-10">
    <div class="container flex items-center">

      <!-- Image -->
      <div class="w-[200px] relative h-[200px] mr-5 rounded overflow-hidden shadow-md">
        <img src="~/assets/img/elon.png" alt="avatar" class="w-full h-full absolute object-cover">
      </div>
      <!-- Hearder Text -->

      <div>
        <h1 class="text-4xl font-bold mb-2">Elon's Musk</h1>
        <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br> Minus reiciendis quas ab facilis,
          reprehenderit
          accusamus!
        </p>
        <a href="https://baike.baidu.com/item/%E5%9F%83%E9%9A%86%C2%B7%E9%A9%AC%E6%96%AF%E5%85%8B/3776526"
          class="btn bg-sky-500 text-sky-50 py-2 px-4 rounded inline-block hover:bg-sky-600 duration-200">Let's
          connect</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>


defineProps<{
  title: string
}>()
</script>
