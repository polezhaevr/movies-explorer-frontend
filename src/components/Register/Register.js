import React from "react";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm.js";

function Register() {
    return (
        <>
            <AuthorizationForm
                  tittle="Добро пожаловать!"
                  button="Зарегистрироваться"
                  text = "Уже зарегистрированы?"
                  textLink= "Войти"
                  signLink="/signin"
            />
        </>
    );
}

export default Register;