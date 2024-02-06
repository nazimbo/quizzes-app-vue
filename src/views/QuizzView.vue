<script setup>
import { useRoute, useRouter, RouterView } from "vue-router";
import quizzes from "../data/quizzes.json";

const route = useRoute();
const router = useRouter();

const quizz = quizzes.find((quizz) => quizz.id === route.params.id);
</script>

<template>
  <div>
    <header>
      <h4>Question 1/3</h4>
      <div class="progression-bar">
        <div class="progression"></div>
      </div>
    </header>
    <div class="question">
      <h1>What is the capital of France?</h1>
    </div>
    <div class="answers">
      <button>Paris</button>
      <button>London</button>
      <button>Berlin</button>
      <button>Madrid</button>
    </div>
  </div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
}

header h4 {
  font-size: 20px;
  font-weight: bold;
}

.progression-bar {
  width: 80%;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  position: relative;
}

.progression {
  width: 33.33%;
  height: 100%;
  background-color: #4caf50;
  border-radius: 5px;
}

.question {
  margin-top: 20px;
}

.question h1 {
  font-size: 30px;
  font-weight: bold;
}

.answers {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f1f1f1;
  cursor: pointer;
}

button:hover {
  background-color: #ddd;
}

button:active {
  background-color: #ccc;
}
</style>
