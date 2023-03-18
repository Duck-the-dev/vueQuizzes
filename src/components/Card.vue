<script setup lang="ts">
import Math from '../assets/Math.webp'
import Biology from '../assets/Biology.webp'
import Chemistry from '../assets/Chemistry.webp'
import Physics from '../assets/Physics.webp'
import History from '../assets/History.webp'
import Psychology from '../assets/Psychology.webp'

const images: { [key: string]: any } = {
  Math: Math,
  Biology: Biology,
  Chemistry: Chemistry,
  Physics: Physics,
  History: History,
  Psychology: Psychology,
}


const { quiz } = defineProps(['quiz'])
</script>

<template>
  <main class="container">
    <div
      class="card card-compact mx-auto w-96 max-w-fit bg-base-100 text-center shadow-xl"
    >
      <figure>
        <img
          class="btn-ghost no-animation btn h-64 w-96 object-cover"
          :src="images[quiz.name]"
          :alt="quiz.name"
        />
      </figure>
      <div class="card-body">
        <h2 class="text-2xl font-bold">{{ quiz.name }}</h2>
        <p class="text-md">{{ quiz.questions.length }} questions</p>
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
