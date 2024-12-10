<template>
    <div class="summary">
        <div class="summary__container"
             :class="{ 'summary__container--open': props.showAutoParams }">
            <div class="summary__card card mb-4">
                <div class="card-header">
                    <h5 class="mb-0">Дополнительные требования:</h5>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <textarea class="form-control"
                                  style="height: 150px; resize: none"
                                  name="addReqarea"
                                  id="addReqarea"></textarea>
                    </div>
                </div>
            </div>

            <div class="passport-block">

                <div class="summary__card card mb-4"
                     v-for="item in passport.rows.slice(0, 2)"
                     :key="item.id">
                    <div class="card-header">
                        <h5 class="mb-0"> {{ item.name }}</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <input :placeholder="item.placeHolder"
                                   v-model="passport[item.model]"
                                   class="form-control" />
                        </div>
                    </div>
                </div>

                <div class="summary__card card mb-4"
                     v-for="item in passport.rows.slice(2, 5)"
                     :key="item.id">
                    <div class="card-header">
                        <h5 class="mb-0"> {{ item.name }}</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <input :type="item.type"
                                   :placeholder="item.placeHolder"
                                   v-model="passport[item.model]"
                                   class="form-control" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
const props = defineProps(['showAutoParams']);

const passport = reactive({
    organization: "",
    fio: "",
    number: "",
    email: "",
    numbersOfEp: "",
    rows: [
        {
            id: 1,
            model: "organization",
            name: "Организация:",
            placeHolder: "Введите организацию",
            type: "text",
        },
        { id: 2, model: "fio", name: "Контактное лицо:", placeHolder: "Введите ФИО", type: "text" },
        { id: 3, model: "number", name: "Телефон:", placeHolder: "Введите телефон", type: "number" },
        { id: 4, model: "email", name: "Email:", placeHolder: "Введите почту", type: "email" },
        {
            id: 5,
            name: "Кол-во приводов:",
            model: "numbersOfEp",
            placeHolder: "Введите кол-во",
            type: "number",
        },
    ],
});
</script>

<style>
.card {
    border: none;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.col-md-12 {
    padding-top: 10px;
}

/* .card-header {
    background-color: #f8f9fa;
    border-bottom: 1px solid var(--emk-brand-color);
} */
.summary {
    margin-bottom: 20px;
}

.summary__container {
    width: 100%;
}

.passport-block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 55px;
}

.form-control:focus {
    border-color: var(--emk-brand-color);
    box-shadow: 0 0 0 0.15rem rgb(253 43 13 / 25%);
}
</style>
