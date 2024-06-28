<script setup>
const props = defineProps(['props', 'formData'])
const emits = defineEmits(['sendFormBack'])
// console.log(props.props)
import { reactive } from 'vue'

const formDataLocal = reactive({
  ...props.formData
})

function sendFormBack() {
  emits('sendFormBack', formDataLocal)
}
</script>
<template>
  <div class="form-group">
    <div class="card-header">
      <h5 class="mb-0">{{ props.props.id }}) {{ props.props.name }}</h5>
    </div>
    <div class="card-body">
      <div class="form-check inputPlace">
        <input
          class=""
          :type="props.props.type"
          :name="props.props.inputName"
          v-model="formDataLocal[props.props.inputName]"
          @input="sendFormBack"
          :placeholder="props.props.placeholder"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
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

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
