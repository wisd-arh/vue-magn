<template lang="pug">
.registration
    .registration-form
        .registration-form__title Регистрация
        .registration-form__hint Уже есть аккаунт?
        a.registration-form__hint-link(href="#") Войти

        .registration-form__inputs
            .registration-form__input
                label.registration-form__input-label Имя
                input.input.registration-form__input-input(:placeholder="form.name.placeholder" v-model="form.name.value")

            .registration-form__input
                label.registration-form__input-label Еmail
                input.input.registration-form__input-input(type="email" placeholder="Введите ваш email")

            .registration-form__input
                label.registration-form__input-label Номер телефона
                input.input.registration-form__input-input(type="tel" placeholder="Введите номер телефона")

            .registration-form__input
                label.registration-form__input-label Язык
                select.input.registration-form__input-input(placeholder="Язык")
                    option(value="ru") Русский
                    option(value="en") Английский
                    option(value="cn") Китайский
                    option(value="sp") Испанский

            .registration-form__signup
                input.registration-form__input-input(type="checkbox")
                label.registration-form__input-label Принимаю 
                    a условия 
                    | использования

        button.button.registration-form__button(
            @click.prevent="checkForm"
        ) Зарегистрироваться
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            form: {
                name: {
                    value: "",
                    placeholder: "Введите Ваше имя",
                    error: "Validation error message",
                    preg: "/A-Za-zА-Яа-яёЁ -/",
                    showError: false,
                },
                email: {
                    value: "",
                    placeholder: "Введите Ваше имя",
                    error: "Введено не корректное значение",
                    preg: "/A-Za-zА-Яа-яёЁ -/",
                    showError: false,
                },
                phone: {
                    value: "",
                    placeholder: "Введите Ваше имя",
                    error: "Введено не корректное значение",
                    preg: "/A-Za-zА-Яа-яёЁ -/",
                    showError: false,
                }

            }
        }
    },
    methods: {
        checkForm() {
            Object.keys(this.form).forEach((key) => {
                if (!this.form[key].value.match(this.form[key].preg))
                    this.form[key].showError = true
                else this.form[key].showError = false
            })
        },
    }
}
</script>