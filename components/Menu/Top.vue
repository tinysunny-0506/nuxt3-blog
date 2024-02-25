<template>
  <nav class="bg-gray-900 text-white py-5">
    <div class="container flex justify-between">
      <NuxtLink to="/" class="logo text-xl font-bold">
        Nuxt Blog
      </NuxtLink>
      <ul class="inline-flex gap-4">
        <li>
          <NuxtLink to="/">首页</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/categories">分类</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>

</script>
