<script setup>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";

// Data
import quizzes from "../data/quizzes.json";

// Components
import QuizzHeader from "../components/QuizzHeader.vue";
import Question from "../components/Question.vue";
import Score from "../components/Score.vue";

const route = useRoute();

const quizzId = parseInt(route.params.id);
const quizz = quizzes.find((quizz) => quizz.id === quizzId);
const currentQuestionIndex = ref(0);
const questionsCount = quizz.questions.length;
const correctAnswersCount = ref(0);

const showScore = ref(false);

// const progression = ref(`${(currentQuestionIndex.value / questionsCount) * 100}%`);

// watch(currentQuestionIndex, () => {
//   progression.value = `${(currentQuestionIndex.value / questionsCount) * 100}%`;
// });

const progression = computed(() => `${(currentQuestionIndex.value / questionsCount) * 100}%`);

const onSelectAnswer = (isCorrect) => {
  const isLastQuestion = currentQuestionIndex.value === questionsCount - 1;

  if (isCorrect) {
    correctAnswersCount.value++;
  }

  if (isLastQuestion) {
    showScore.value = true;
  }

  currentQuestionIndex.value++;
};
</script>

<template>
  <!-- Go back home page -->

  <QuizzHeader :currentQuestionIndex="currentQuestionIndex" :questionsCount="questionsCount" :progression="progression" />

  <Question v-if="!showScore" :question="quizz.questions[currentQuestionIndex]" @selectAnswer="onSelectAnswer" />

  <Score v-else :correctAnswersCount="correctAnswersCount" :questionsCount="questionsCount" />
</template>

<style scoped></style>
