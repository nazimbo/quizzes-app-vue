<script setup>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";

// Data
import quizzes from "../data/quizzes.json";

// Components
import QuizzHeader from "../components/QuizzHeader.vue";
import Question from "../components/Question.vue";

const route = useRoute();

const quizzId = parseInt(route.params.id);
const quizz = quizzes.find((quizz) => quizz.id === quizzId);
const currentQuestionIndex = ref(0);
const questionsCount = quizz.questions.length;
const correctAnswersCount = ref(0);

// const progression = ref(`${(currentQuestionIndex.value / questionsCount) * 100}%`);

// watch(currentQuestionIndex, () => {
//   progression.value = `${(currentQuestionIndex.value / questionsCount) * 100}%`;
// });

const progression = computed(() => `${(currentQuestionIndex.value / questionsCount) * 100}%`);

const onSelectAnswer = (isCorrect) => {
  if (isCorrect) {
    correctAnswersCount.value++;
  }
  currentQuestionIndex.value++;
};
</script>

<template>
  <QuizzHeader :currentQuestionIndex="currentQuestionIndex" :questionsCount="questionsCount" :progression="progression" />

  <Question :question="quizz.questions[currentQuestionIndex]" @selectAnswer="onSelectAnswer" />

  {{ correctAnswersCount }}
</template>

<style scoped></style>
