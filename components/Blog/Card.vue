<template>
  <div class="col-span-1 shadow-lg">
    <!-- Blog Image -->

    <div v-if="image" class="w-full h-[180px] relative">
      <img :src="image" alt="Blog Thumbnail" class="w-full h-full absolute object-cover">
    </div>

    <!-- Blog Contents -->

    <ClientOnly>
      <div class="p-5">
        <h3 class="text-xl font-semibold mb-3">{{ title }}</h3>
        <p v-if="excerpt" class="text-sm mb-3" v-html="excerpt"></p>
        <NuxtLink :to="`/${slug}`" class="text-sky-400 text-sm">Read More</NuxtLink>
      </div>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>

defineProps<{
  title: string
  image: string
  excerpt?: string
  slug: string
}>()

</script>
