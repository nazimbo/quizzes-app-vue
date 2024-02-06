<script setup>
import { ref, watch } from "vue";
import q from "./data/quizzes.json";

const quizzes = ref(q);
const search = ref("");

watch(search, (newVal) => {
  const filteredQuizzes = q.filter((quizz) => quizz.name.toLowerCase().includes(newVal.toLowerCase()));
  quizzes.value = filteredQuizzes;
});
</script>

<template>
  <div class="container">
    <header>
      <h1>Quizzes</h1>
      <input v-model.trim="search" type="text" placeholder="Search" />
    </header>
    <div class="cards">
      <div v-for="quizz in quizzes" class="card">
        <img :src="quizz.img" alt="" />
        <div class="card-text">
          <h2>{{ quizz.name }}</h2>
          <p>{{ quizz.questions.length }} questions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-size: 40px;
  font-weight: bold;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 200px;
}

/* CARDS */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

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
