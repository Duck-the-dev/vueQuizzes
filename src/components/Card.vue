<script setup lang="ts">
defineProps({
  title: String,
  questions: Number,
  img: String,
})

// let imgPath =
//   'https://raw.githubusercontent.com/Duck-the-dev/vueQuizzes/main/src/assets/' +
//   props.title +
//   '.webp'
</script>

<template>
  <div class="card card-compact mx-auto w-96 max-w-fit bg-base-100 text-center shadow-xl">
    <figure class="cursor-pointer">
      <img :src="img" :alt="title" />
    </figure>
    <div class="card-body">
      <h2 class="text-2xl font-bold">{{ title }}</h2>
      <p class="text-md">{{ questions }} questions</p>
    </div>
  </div>
</template>

<style scoped></style>
