<script setup lang="ts">
defineProps({
  title: String,
  questions: Number,
  imgPath: String,
})
</script>

<template>
  <div class="card card-compact mx-auto w-96 max-w-fit bg-base-100 text-center shadow-xl">
    <figure class="cursor-pointer">
      <img :src="imgPath" :alt="title" />
    </figure>
    <div class="card-body">
      <h2 class="text-2xl font-bold">{{ title }}</h2>
      <p class="text-md">{{ questions }} questions</p>
    </div>
  </div>
</template>

<style scoped>
img {
  object-fit: cover;
  width: 24rem;
  height: 16rem;
}
</style>
