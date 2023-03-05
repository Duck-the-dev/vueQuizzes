<script setup lang="ts">
defineProps({
  title: String,
  questionsNum: Number,
  imgPath: String,
})
</script>

<template>
  <main class="container">
    <div
      class="card card-compact mx-auto w-96 max-w-fit bg-base-100 text-center shadow-xl"
    >
      <figure class="cursor-pointer">
        <img class="h-64 w-96 object-cover" :src="imgPath" :alt="title" />
      </figure>
      <div class="card-body">
        <h2 class="text-2xl font-bold">{{ title }}</h2>
        <p class="text-md">{{ questionsNum }} questions</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* img {
  object-fit: cover;
  width: 24rem;
  height: 16rem;
} */
</style>
