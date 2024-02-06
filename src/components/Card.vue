<script setup>
import { defineProps } from "vue";

const { quizz } = defineProps(["quizz"]);
</script>

<template>
  <div class="card">
    <img :src="quizz.img" alt="" />
    <div class="card-text">
      <h2>{{ quizz.name }}</h2>
      <p>{{ quizz.questions.length }} questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-text {
  padding: 20px;
}

.card-text h2 {
  font-weight: bold;
}
</style>
