<script setup lang="ts">
import Card from './Card.vue'
import Math from '../assets/Math.webp'
import Biology from '../assets/Biology.webp'
import Chemistry from '../assets/Chemistry.webp'
import Physics from '../assets/Physics.webp'
import History from '../assets/History.webp'
import Psychology from '../assets/Psychology.webp'
</script>

<template>
  <h1 class="container mx-auto mb-8 mt-2 text-center text-5xl font-extrabold">quizzes</h1>

  <div class="grid grid-flow-row gap-5 sm:grid-cols-3 md:grid-cols-3">
    <Card title="Math" :questions="15" :img-path="Math" />
    <Card title="Biology" :questions="15" :img-path="Biology" />
    <Card title="Chemistry" :questions="15" :img-path="Chemistry" />
    <Card title="Physics" :questions="15" :img-path="Physics" />
    <Card title="History" :questions="15" :img-path="History" />
    <Card title="Psychology" :questions="15" :img-path="Psychology" />
  </div>
</template>

<style scoped></style>
