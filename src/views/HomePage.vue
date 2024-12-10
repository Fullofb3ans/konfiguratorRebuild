<template>
    <div class="engine-selector content-container">
        <div class="engine-selector__grid">
            <div class="engine-selector__item" v-for="item in engines" :key="item.id">
                <div class="engine-card engine-card--glass" @click="router.push({ name: 'EnginePage' })">
                    <img :src="item.imgSrc" class="engine-card__image" alt="..." />
                    <div class="engine-card__body">
                        <h5 class="engine-card__title">{{ item.title }}</h5>
                        <p class="engine-card__description">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const engines = [
    {
        id: 1,
        title: "Клапан предохранительный",
        imgSrc: "/imgs/pp.jpg",
        description: `Защита оборудования от
        недопустимого повышения давления
        посредством сброса среды в
        отводящий трубопровод.x`,
    },
];
</script>
