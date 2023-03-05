<script setup lang="ts">
import Card from './Card.vue'
import Math from '../assets/Math.webp'
import Biology from '../assets/Biology.webp'
import Chemistry from '../assets/Chemistry.webp'
import Physics from '../assets/Physics.webp'
import History from '../assets/History.webp'
import Psychology from '../assets/Psychology.webp'
import NoQuiz from './NoQuiz.vue'
import q from '../data/data.json'
import { ref, watch } from 'vue'

const quizzes = ref(q)
const search = ref('')
watch(search, () => {
  quizzes.value = q.filter((quiz) => quiz.name.toLowerCase().includes(search.value))
})

const images: { [key: string]: any } = {
  Math: Math,
  Biology: Biology,
  Chemistry: Chemistry,
  Physics: Physics,
  History: History,
  Psychology: Psychology,
}
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
    <Card
      v-for="quiz in quizzes"
      :key="quiz.id"
      :title="quiz.name"
      :questions-num="quiz.questions.length"
      :img-path="images[quiz.name]"
    />
  </div>
  <NoQuiz v-show="quizzes.length == 0" />
</template>

<style scoped></style>
