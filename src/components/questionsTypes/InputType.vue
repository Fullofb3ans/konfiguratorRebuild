<template>
    <div class="form-group">
        <div class="card-header">
            <h5 class="mb-0">{{ question.id }}) {{ question.name }}</h5>
        </div>
        <div class="card-body">
            <div class="form-check card-body__input__wrapper">
                <input class="card-body__input"
                       :name="question.inputName"
                       @input="sendFormBack({ [question.inputName]: $event.target.value })" />
            </div>
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
        }
        return {
            sendFormBack
        }
    }
}
</script>