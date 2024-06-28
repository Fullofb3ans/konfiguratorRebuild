<script setup>
const engines = [
  {
    id: 1,
    title: 'Электроприводы неполноповоротные серии ЭПН',
    imgSrc: './src/imgs/epn.png',
    description: 'Используются для автоматизации дископоворотых затворов и шаровых кранов.'
  },
  {
    id: 2,
    title: 'Электроприводы многообортные серии ЭП4',
    imgSrc: './src/imgs/ep4.png',
    description: 'Применяются для автоматизации задвижек и клапанов.'
  },
  {
    id: 3,
    title: 'Электроприводы ЭП4 в комбинации с редукторами серии РН',
    imgSrc: './src/imgs/reductorEp4.png',
    description:
      'Комбинация с редуктором позволяет повысить крутящий момент привода до необходимых значений.'
  },
  {
    id: 4,
    title: 'Электроприводы классической линейки многообортные по ТУ 26-07-015-89',
    imgSrc: './src/imgs/classicEp.png',
    description: 'Используются для комплектации запорной промышленной трубопроводной арматуры.'
  },
  {
    id: 5,
    title: 'Внешний интеллектуальный модуль управления ВИМУ',
    imgSrc: './src/imgs/vimu.png',
    description: 'Предназначен для настройки и управления приводами.'
  }
]
</script>
<template>
  <div class="container py-5">
    <div class="grid-container">
      <div class="grid-item" v-for="item in engines" :key="item.id">
        <div class="card glass-card">
          <img :src="item.imgSrc" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  /* padding-top: 50px; */
}

.grid-item {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 410px;
}

.card {
  max-width: 100%;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.glass-card {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-img-top {
  padding: 10px;
  width: 100%;
  height: 200px;
  object-fit: contain;
}

.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  font-size: 16px;
  color: #666;
  flex-grow: 1;
}
</style>
