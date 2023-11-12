import React from "react";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm.js";

function Login({submitHandler}) {
    return (
        <>
            <AuthorizationForm
                name="login"
                tittle="Рады видеть!"
                button="Войти"
                text="Ещё не зарегистрированы?"
                textLink="Регистрация"
                signLink="/signup"
                submitHandler={submitHandler}
            />
        </>
    );
}

export default Login;