<script setup>
const props = defineProps(['props', 'formData'])
const emits = defineEmits(['sendFormBack'])
console.log(props.props.answers)
console.log(props.formData)
import { reactive, ref, computed } from 'vue'

const none = ref(true)
const needToShow = computed(() => {
  return none.value
})

const formDataLocal = reactive({
  ...props.formData
})

function sendFormBack() {
  emits('sendFormBack', formDataLocal)
}
</script>

<template>
  <div class="card-header">
    <h5 class="mb-0">{{ props.props.id }}) {{ props.props.name }}</h5>
  </div>
  <div class="card-body">
    <div v-for="question in props.props.answers" :key="question.value" class="form-check">
      <input
        @change="sendFormBack"
        :name="props.props.inputName"
        :type="props.props.type"
        :id="props.props.inputName + question.value"
        :value="question.value"
        v-model="formDataLocal[props.props.inputName]"
        class="form-check-input"
      />
      <label :for="props.props.inputName + question.value" class="form-check-label">{{
        question.name
      }}</label>
      <div
        v-if="formDataLocal.constructiveScheme"
        class="imgWrapper"
        @mouseleave="none = true"
        @mouseenter="none = false"
      >
        <img
          class="schemeImg"
          :src="`/public/img/ep4-scheme-${formDataLocal.constructiveScheme}.png`"
          alt=""
        />
        <img
          class="schemeCaption"
          :class="{ none: needToShow }"
          :src="'/public/img/schemeCaption.png'"
        />
      </div>
      <div v-if="question.hiddenInput" :class="{ none: question.hiddenInput.none }">
        <input
          :type="'text'"
          @input="sendFormBack"
          :name="question.hiddenInput.name"
          :placeholder="question.hiddenInput.placeholder"
          v-model="formDataLocal[question.hiddenInput.name]"
        />
      </div>
      <div v-if="question.info && question.hiddenInfo == false">
        <div class="info-container">
          <div class="info-content">
            {{ question.info }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imgWrapper {
  position: relative;
  max-width: 650px;
  max-height: 600px;
  object-fit: cover;
  margin: auto;
}
.schemeImg {
  width: 100%;
}
.schemeCaption {
  border: 2px solid #b1b1b1;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(148 148 148 / 9%);
  color: #fff;
  padding: 20px;
  text-align: center;
  z-index: 99999999999;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  /* width: 70%; */
  box-shadow: 0 0 20px rgba(124, 124, 124, 0.471);
}

@media (max-width: 768px) {
  .schemeCaption {
    display: none !important;
  }
}

.none {
  display: none;
}

.img-wrapper {
  max-width: 650px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.img-scale {
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
}

.img-wrapper:hover .img-scale {
  transform: scale(1.1);
  filter: brightness(0.7);
}

.img-caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.img-wrapper:hover .img-caption {
  opacity: 1;
}

input[type='text'] {
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 0;
  padding: 8px 0;
  font-size: 16px;
  transition: border-color 0.3s ease;
  width: max-content;
}
input:focus {
  outline: none;
  border-color: #4c4c4c;
}

input::placeholder {
  color: #aaa;
}

.info-content {
  z-index: 1;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.info-container:hover .info-content {
  display: block;
}
</style>
