<script setup lang="ts">
import Card from './Card.vue'
import NoQuiz from './NoQuiz.vue'
import q from '../data/data.json'
import { ref, watch } from 'vue'

const quizzes = ref(q)
const search = ref('')

watch(search, () => {
  quizzes.value = q.filter(
    (quiz) =>
      quiz.name.toLowerCase().includes(search.value) || quiz.name.includes(search.value)
  )
})
</script>

<template>
<div class="container mx-auto mb-8 mt-2">
    <header>
      <h1 class="mx-auto mb-8 mt-2 text-center text-5xl font-extrabold">quizzes</h1>
      <input

        v-model.trim="search"
        type="text"
        placeholder="Search"
        class="input-bordered input w-full max-w-xs"
      />
    </header>
  </div>


  <div class="grid grid-flow-row gap-5 sm:grid-cols-3 md:grid-cols-3">
    <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
  </div>
  <NoQuiz v-show="quizzes.length == 0" />
</template>

<style scoped></style>
