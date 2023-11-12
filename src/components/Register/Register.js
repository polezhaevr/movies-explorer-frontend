import React from "react";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm.js";

function Register({submitHandler}) {
    return (
        <>
            <AuthorizationForm
                name="register"
                tittle="Добро пожаловать!"
                button="Зарегистрироваться"
                text="Уже зарегистрированы?"
                textLink="Войти"
                signLink="/signin"
                submitHandler={submitHandler}
            />
        </>
    );
}

export default Register;