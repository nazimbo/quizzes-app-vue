<script setup>
import { useRoute, useRouter, RouterView } from "vue-router";
import quizzes from "../data/quizzes.json";

const route = useRoute();
const router = useRouter();

const quizz = quizzes.find((quizz) => quizz.id === route.params.id);
</script>

<template></template>
