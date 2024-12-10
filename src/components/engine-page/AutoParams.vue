<template>
    <div class="auto-params-wrapper">
        <div class="content auto-params__content">
            <p>Автоматический подсчет</p>
            <div class="container auto-params">
                <div v-for="item in questions"
                     :key="item.id"
                     class="card auto-params__card mb-4">
                    <div class="form-group">
                        <div class="card-header">
                            <h5 class="mb-0">{{ item.name }}</h5>
                        </div>
                        <div class="auto-params__card-body card-body">
                            <div class="inputPlace auto-params__input-wrapper">
                                <input v-if="!item.isLoading"
                                       disabled
                                       class="auto-params__input"
                                       :name="item.inputName"
                                       :value="item.value" />
                                <div v-else
                                     class="auto-params__input-loader"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="auto-params__close-icon__wrapper">
            <Cancel @click="closeCalcParams"
                    class="auto-params__close-icon" />
        </div>
    </div>
</template>

<script>
import Cancel from "@/assets/icons/Cancel.vue";
export default {
    props: {
        questions: {
            type: Array,
            required: true
        }
    },
    components: {
        Cancel,
    },
    emits: ["closeCalcParams"],
    setup(props, { emit }) {

        return {
            closeCalcParams: () => emit("closeCalcParams"),
            isLoading: false,
        }
    }
}
</script>
