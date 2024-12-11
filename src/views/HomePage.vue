<template>
    <div class="engine-selector content-container">
        <div class="engine-selector__grid">
            <div class="engine-selector__item"
                 v-for="item in homePageEngines"
                 :key="item.id">
                <div class="engine-card engine-card--glass"
                     @click="router.push({ name: 'EnginePage' })">
                    <!-- <img :src="item.imgSrc"
                         class="engine-card__image"
                         alt="..." /> -->
                    <div class="engine-card__image"
                         :style="{ backgroundImage: `url(${item.imgSrc})` }"></div>
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

<script>
import { useRouter } from "vue-router";
import homePageEngines from '@/assets/staticJsons/homePageEngines.json';
export default {
    setup() {
        const router = useRouter();
        return {
            router,
            homePageEngines
        }
    }
}

</script>