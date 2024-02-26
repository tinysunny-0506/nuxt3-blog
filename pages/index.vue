<template>
  <main>
    <PageHeader>
      <!-- Image -->
      <div class="w-[200px] relative h-[200px] mr-5 rounded overflow-hidden shadow-md hidden lg:block">
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
    </PageHeader>

    <!-- Blog -->
    <section class="container py-16">
      <div class="grid sm:grid-cols-3 gap-5">
        <BlogCard v-for="i in 9" :key="i" title="Elon Musk Title" excerpt="loremxxxx"
          image="https://shuji.tmwcn.com/upload/avatar/20220809/a_1660060460.jpg" slug="slug" />
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>

const { data } = await useFetch('https://api.jahid.dev/wp-json/wp/v2/posts')

console.log(data);

</script>
