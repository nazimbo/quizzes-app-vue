<template>
  <div class="container">
    <header>
      <h1>Quizzes</h1>
      <input type="text" placeholder="Search" />
    </header>
    <div class="cards">
      <div class="card">
        <img src="https://www.open.edu.au/-/media/blog/2023/03-march/careers-in-maths.jpg?h=477&iar=0&w=715&rev=47f96a32d6b4449993d9b33e5d8e7f05&extension=webp&hash=285AEAB654D4E0C839D4BEDA2991F915" alt="" />
        <div class="card-text">
          <h2>Quiz 1</h2>
          <p>Questions: 10</p>
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
  margin: 0;
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
