<template>
  <div class="card-header">
    <h5 class="mb-0">{{ props.props.id }}) {{ props.props.name }}</h5>
  </div>
  <div class="card-body">
    <div class="form-group">
      <div class="custom-select-wrapper">
        <select
          @change="sendFormBack"
          :name="props.props.inputName"
          :id="props.props.inputName"
          v-model="formDataLocal[props.props.inputName]"
          class="custom-select"
        >
          <option disabled value="">Выберите из списка</option>
          <option
            :value="typeof answer == 'object' ? answer.value : answer"
            v-for="answer in props.props.answers"
            :key="props.props.answers.indexOf(answer)"
          >
            {{ typeof answer == 'object' ? answer.name : answer }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['props', 'formData'])
const emits = defineEmits(['sendFormBack'])
import { reactive } from 'vue'

const formDataLocal = reactive({
  ...props.formData
})

function sendFormBack() {
  emits('sendFormBack', formDataLocal)
}
</script>

<style scoped>
.custom-select-wrapper {
  position: relative;
}

.custom-select {
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 30px 8px 12px;
  width: 100%;
  font-size: 16px;
  color: #333;
  cursor: pointer;
}

.custom-select:focus {
  outline: none;
  border-color: #f5821f;
  box-shadow: 0 0 0 2px #f5831f69;
}
</style>
