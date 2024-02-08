<script setup>
import { defineProps } from "vue";

const { progression, currentQuestionIndex, questionsCount } = defineProps(["progression", "currentQuestionIndex", "questionsCount"]);
</script>

<template>
  <header>
    <h4>Question {{ currentQuestionIndex }} / {{ questionsCount }}</h4>
    <div class="progression-bar">
      <div class="progression" :style="{ width: progression }"></div>
    </div>
  </header>
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
  height: 100%;
  background-color: #4caf50;
  border-radius: 5px;
}
</style>
