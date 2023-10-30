import React from "react";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm.js";

function Login() {
    return (
        <>
            <AuthorizationForm 
                  tittle="Рады видеть!"
                  button="Войти"
                  text = "Ещё не зарегистрированы?"
                  textLink= "Регистрация"
                  signLink="/signup"
            />
        </>
    );
}

export default Login;