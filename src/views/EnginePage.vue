<template>
    <EngineMark />
    <div class="summary">
        <div class="summary__container"
             :class="{ 'summary__container--open': showAutoParams }">
            <div v-for="item in mainQuestions"
                 :key="item.id"
                 class="summary__card card mb-4">
                <div class="summary__radio-wrapper"
                     v-if="item.type == 'radio'">
                    <RadioType :question="item"
                               @sendFormBack="getInfoToObject" />
                </div>
                <div class="summary__checkbox-wrapper"
                     v-if="item.type == 'checkbox'">
                    <CheckboxType :question="item"
                                  @sendFormBack="getInfoToObject" />
                </div>
                <div class="summary__select-wrapper"
                     v-else-if="item.type == 'select'">
                    <SelectType :question="item"
                                @sendFormBack="getInfoToObject" />
                </div>
                <div class="summary__number-wrapper"
                     v-else-if="item.type == 'number'">
                    <TextType :question="item"
                              @sendFormBack="getInfoToObject" />
                </div>
            </div>
        </div>
        <transition name="slide">
            <AutoParams @closeCalcParams="showAutoParams = false"
                        v-if="showAutoParams"
                        :questions="autoParamsChanged" />
            <ArrowLeft v-else
                       @click="showAutoParams = true"
                       class="summary__arrow-icon" />
        </transition>
    </div>
    <Passport :showAutoParams="showAutoParams" />
</template>

<script>
import { ref, computed } from "vue";

import ArrowLeft from "@/assets/icons/ArrowLeft.vue";
import EngineMark from "../components/enginePage/EngineMark.vue";
import Passport from "../components/enginePage/FormEndPassport.vue";
import SelectType from "../components/questionsTypes/SelectType.vue";
import TextType from "../components/questionsTypes/TextType.vue";
import CheckboxType from "../components/questionsTypes/CheckboxType.vue";
import RadioType from "../components/questionsTypes/RadioType.vue";
import AutoParams from "../components/enginePage/AutoParams.vue";

import questionsPp from "@/assets/staticJsons/questionBank.json";
import routesToParams from "@/assets/staticJsons/routesToParams.json";
import autoParams from '@/assets/staticJsons/autoParams.json';

import Api from "@/utils/Api";

import { checkBeforeFetchParam } from "@/utils/checkBeforeFetchParam";

export default {
    components: {
        EngineMark,
        Passport,
        SelectType,
        TextType,
        CheckboxType,
        RadioType,
        AutoParams,
        ArrowLeft
    },
    setup() {
        const mainQuestions = computed(() => questionsPp.filter((item) => item.type !== "auto"));

        const autoParamsChanged = ref(autoParams);

        const showAutoParams = ref(true);

        const answers = ref([]);

        const getInfoToObject = (data) => {
            let key = Object.keys(data)[0];

            if (!Object.keys(answers.value).includes(key)) {
                answers.value = {
                    ...answers.value,
                    [key]: data[key],
                };
            } else if (answers.value[key] == data[key]) {
                delete answers.value[key];
            }
            else {
                answers.value[key] = data[key];
            }
        };

        const callback = async (arrayTarget) => {
            autoParamsChanged.value.find((item) => item.inputName == arrayTarget).isLoading = true;
            const response = await Api.get(routesToParams.execution);
            autoParamsChanged.value.find((item) => item.inputName == Object.keys(response)[0]).value = Object.values(response)[0];
            autoParamsChanged.value.find((item) => item.inputName == arrayTarget).isLoading = false;
        }

        const calcTemperature = ['execution', 'workingMode'];

        checkBeforeFetchParam(calcTemperature, answers, callback, 'coverMaterial');

        return {
            showAutoParams,
            mainQuestions,
            answers,
            calcTemperature,
            getInfoToObject,
            autoParams,
            autoParamsChanged,
        }
    }
}
</script>
