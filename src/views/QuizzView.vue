<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

// Data
import quizzes from "../data/quizzes.json";

// Components
import QuizzHeader from "../components/QuizzHeader.vue";
import Question from "../components/Question.vue";

const route = useRoute();

const quizzId = parseInt(route.params.id);

const quizz = quizzes.find((quizz) => quizz.id === quizzId);

const currentQuestion = ref(0);
</script>

<template>
  <QuizzHeader />
  <Question :question="quizz.questions[currentQuestion]" />
</template>

<style scoped></style>
