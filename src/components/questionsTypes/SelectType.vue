<template>
    <div class="card-header">
        <h5 class="mb-0">{{ question.id }}) {{ question.name }}</h5>
    </div>
    <div class="card-body">
        <div class="card-body__select__wrapper">
            <select @change="sendFormBack({ [question.inputName]: $event.target.value })"
                    :name="question.inputName"
                    :id="question.inputName"
                    class="card-body__select">
                <option disabled
                        selected
                        value="">Выберите из списка</option>
                <option :value="typeof answer == 'object' ? answer.value : answer"
                        v-for="answer in question.answers"
                        :key="question.answers.indexOf(answer)">
                    {{ typeof answer == "object" ? answer.name : answer }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    props: ["question"],
    emits: ["sendFormBack"],
    setup(props, { emit }) {
        const sendFormBack = (radioValue) => {
            emit("sendFormBack", radioValue);
        };
        return {
            sendFormBack,
        };
    },
};
</script>
