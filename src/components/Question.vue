<script setup>
import { defineProps, defineEmits } from "vue";

const { question } = defineProps(["question"]);
const emit = defineEmits(["selectAnswer"]);

const emitSelectAnswer = (isCorrect) => {
  emit("selectAnswer", isCorrect);
};
</script>

<template>
  <div class="question">
    <h1>
      {{ question.text }}
    </h1>
  </div>
  <div class="answers">
    <div v-for="answer in question.options" :key="answer.id" class="answer" @click="emitSelectAnswer(answer.isCorrect)">
      <p>{{ answer.text }}</p>
    </div>
  </div>
</template>

<style scoped>
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
