<script setup>
import { watchEffect, reactive, computed } from 'vue'

import EngineMark from '../components/EngineMark.vue'
import Passport from '../components/Passport.vue'
import SelectType from '../components/questionsTypes/SelectType.vue'
import InputType from '../components/questionsTypes/InputType.vue'
import CheckboxType from '../components/questionsTypes/CheckboxType.vue'
import RadioType from '../components/questionsTypes/RadioType.vue'
import questionsEp4 from '../questionBank.json'
const questions = reactive(questionsEp4)

import {
  getUpperLimit,
  getVpower,
  getRotationFrequency,
  getConstructiveScheme,
  getFlange
} from '../serverFetches.js'

const formData = reactive({})

function recieveSelectData(data) {
  console.log(data)
  console.log('отправил назад')

  // Скрытые инпут по цвету
  if (data.color) {
    questions[14].answers.map((item) => {
      if (item.hiddenInput !== undefined && data.color == 2) {
        console.log('1усл')
        item.hiddenInput.none = false
        console.log(data.color)
      } else if (item.hiddenInput !== undefined && data.color == 1) {
        console.log('2усл')
        item.hiddenInput.none = true
      }
    })
  }

  // скрытые инпуты по кабельным подключениям
  if (data.connectionForEp4) {
    questions[15].answers.map((item) => {
      if (data.connectionForEp4 == 1 && item.value == 1) {
        item.hiddenInfo = false
      } else if (data.connectionForEp4 == 2 && item.value == 2) {
        item.hiddenInfo = false
      } else item.hiddenInfo = true
    })
  }
  // скрытые инпуты по кабельным требованиям
  questions[16].answers.map((item) => {
    if (data.cabelsType0 && item.value == '0') {
      item.hiddenInput.map((item) => {
        item.none = false
      })
    } else if (data.cabelsType1 && item.value == '1') {
      item.hiddenInput.map((item) => {
        item.none = false
      })
    } else if (data.cabelsType2 && item.value == '2') {
      item.hiddenInput.map((item) => {
        item.none = false
      })
    } else if (data.cabelsType4 && item.value == '4') {
      item.hiddenInput.map((item) => {
        item.none = false
      })
    } else
      item.hiddenInput.map((item) => {
        item.none = true
      })
  })

  if (data.cabelsType0 && data.protCabelNum) {
    for (let i = 0; i < questionsEp4[16].answers[0].hiddenInput.length; i++) {
      i > 1 ? delete questionsEp4[16].answers[i].hiddenInput : ''
    }
    for (let i = 0; i < Number(data.protCabelNum); i++) {
      if (i <= 7) {
        questionsEp4[16].answers[0].hiddenInput.push({
          name: `protCabelInput${i}`,
          placeholder: 'Укажите диаметр по броне',
          none: false
        })
      } else alert('Не > 7')
    }
    console.log(questionsEp4[16])
  }

  Object.assign(formData, data)
}

const expression = computed(() => {
  return formData['closeNumbers'] / formData['closingTime']
})

watchEffect(async () => {
  const execution = formData.execution
  const connectionType = formData.connectionType
  questions[3].answers = await getUpperLimit(execution, connectionType)
})
watchEffect(async () => {
  const execution = formData.execution
  const connectionType = formData.connectionType
  const upperLimit = formData.upperLimit
  questions[4].answers = await getVpower(execution, connectionType, upperLimit)
})
watchEffect(async () => {
  const execution = formData.execution
  const connectionType = formData.connectionType
  const upperLimit = formData.upperLimit
  const vPower = formData.vPower
  const rotationFrequencyData = await getRotationFrequency(
    execution,
    connectionType,
    upperLimit,
    vPower,
    expression.value
  )
  questions[7].answers = rotationFrequencyData
})

watchEffect(async () => {
  const execution = formData.execution
  const connectionType = formData.connectionType
  const upperLimit = formData.upperLimit
  const vPower = formData.vPower
  const rotationFrequency = formData.rotationFrequency
  if ((execution, connectionType, upperLimit, vPower, rotationFrequency)) {
    const constructiveSchemeData = await getConstructiveScheme(
      execution,
      connectionType,
      upperLimit,
      vPower,
      rotationFrequency
    )
    console.log(constructiveSchemeData)
    questions[8].answers = constructiveSchemeData
  }
})

watchEffect(async () => {
  const execution = formData.execution
  const connectionType = formData.connectionType
  const upperLimit = formData.upperLimit
  const vPower = formData.vPower
  const rotationFrequency = formData.rotationFrequency
  const scheme = formData.constructiveScheme
  const constructiveSchemeData = await getFlange(
    execution,
    connectionType,
    upperLimit,
    vPower,
    rotationFrequency,
    scheme
  )
  console.log(constructiveSchemeData)
  questions[9].answers = constructiveSchemeData
})
</script>
<template>
  <EngineMark />
  <div class="container my-5" @click="console.log(questions), console.log(formData)">
    <div v-for="item in questions" :key="item.id" class="card mb-4">
      <!-- Радио -->
      <slot v-if="item.type == 'radio'">
        <RadioType @sendFormBack="recieveSelectData" :props="item" :formData="formData" />
      </slot>
      <slot v-if="item.type == 'checkbox'">
        <CheckboxType @sendFormBack="recieveSelectData" :props="item" :formData="formData" />
      </slot>
      <!-- селект -->
      <slot v-else-if="item.type == 'select'">
        <SelectType @sendFormBack="recieveSelectData" :props="item" :formData="formData" />
      </slot>
      <!-- инпут -->
      <slot v-else-if="item.type == 'number'">
        <InputType @sendFormBack="recieveSelectData" :props="item" :formData="formData" />
      </slot>
    </div>
    <Passport></Passport>
  </div>
</template>

<style scoped>
.card {
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.card-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #f5821f;
}

.form-check-input {
  margin-top: 0.25rem;
}

.form-check-label {
  font-weight: normal;
}

select {
  display: block;
  width: 100%;
  padding: 5px 2.5rem 5px 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

select:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-group {
  margin-bottom: 1rem;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
