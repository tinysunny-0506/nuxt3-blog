<template>
  <nav class="bg-gray-900 text-white py-5">
    <div class="container flex justify-between">
      <NuxtLink to="/" class="logo text-xl font-bold">
        Elon's Blog
      </NuxtLink>
      <ul class="inline-flex gap-4 items-center">
        <li>
          <NuxtLink to="/" class="hover:text-sky-500">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/categories" class="hover:text-sky-500">Categories</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>

</script>
