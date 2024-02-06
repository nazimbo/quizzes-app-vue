<script setup>
import { ref, watch } from "vue";
import q from "./data/quizzes.json";
import Card from "./components/Card.vue";

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
      <Card v-for="quizz in quizzes" :key="quizz.id" :quizz="quizz"></Card>
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

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
