<script setup lang="ts">
import Card from './Card.vue'
</script>

<template>
  <h1 class="container mx-auto mb-8 mt-2 text-center text-5xl font-extrabold">Love</h1>

  <div class="grid grid-flow-row gap-5 sm:grid-cols-3 md:grid-cols-3">
    <Card title="Math" :questions="15" />
    <Card title="Biology" :questions="15" />
    <Card title="Chemistry" :questions="15" />
    <Card title="Physics" :questions="15" />
    <Card title="History" :questions="15" />
    <Card title="Psychology" :questions="15" />
  </div>
</template>

<style scoped></style>
