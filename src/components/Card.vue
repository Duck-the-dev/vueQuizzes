<script setup lang="ts">
const props = defineProps({
  title: String,
  questions: Number,
})

let imgPath =
  'https://raw.githubusercontent.com/Duck-the-dev/vueQuizzes/62eb203cd3d8115683578a7b91fe5c4e49ce4d5a/src/assets/' +
  props.title +
  '.jpeg'
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

<style scoped></style>
