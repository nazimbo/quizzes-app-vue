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
      <div class="answer">
        <p>Paris</p>
      </div>
      <div class="answer">
        <p>London</p>
      </div>
      <div class="answer">
        <p>Berlin</p>
      </div>
      <div class="answer">
        <p>Madrid</p>
      </div>
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
  margin-top: 20px;
}

.answer {
  margin-top: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f5f5f5;
  cursor: pointer;
}

.answer p {
  font-size: 20px;
  font-weight: bold;
  color: #000;
}

.answer:hover {
  background-color: #ddd;
}
</style>
