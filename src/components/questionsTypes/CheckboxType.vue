<script setup>
const props = defineProps(['props', 'formData'])
const emits = defineEmits(['sendFormBack'])
console.log(props.props.answers)
console.log(props.formData)
import { reactive } from 'vue'

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
        v-model="formDataLocal[props.props.inputName + question.value]"
        class="form-check-input"
      />
      <label :for="props.props.inputName + question.value" class="form-check-label">{{
        question.name
      }}</label>
      <div v-if="question.hiddenInput" class="mb-3">
        <div v-for="row in question.hiddenInput" :key="row" class="form-group">
          <input
            @input="sendFormBack"
            v-model="formDataLocal[row.name]"
            :placeholder="row.placeholder"
            class="form-control hiddenInputs"
            :class="{ none: row.none }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hiddenInputs {
  width: 300px;
  padding: 10px;
  margin: 10px;
}

.none {
  display: none;
}
</style>
