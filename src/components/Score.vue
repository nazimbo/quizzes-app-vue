<script setup>
import { defineProps } from "vue";

const { correctAnswersCount, questionsCount } = defineProps(["correctAnswersCount", "questionsCount"]);
</script>
<template>
  <div class="score">
    <h1>Score</h1>
    <p>{{ correctAnswersCount }} / {{ questionsCount }}</p>
  </div>
  <router-link to="/" class="back-link">
    <i class="fas fa-arrow-left"></i>
    <span>Back</span>
  </router-link>
</template>

<style scoped>
.score {
  margin-top: 20px;
  text-align: center;
}

.score h1 {
  font-size: 30px;
  font-weight: bold;
}

.score p {
  font-size: 20px;
  font-weight: bold;
}

.back-link {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  text-decoration: none;
}

.back-link i {
  margin-right: 5px;
}

.back-link span {
  font-size: 20px;
  font-weight: bold;
}

.back-link:hover {
  text-decoration: underline;
}
</style>
