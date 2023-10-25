import React from "react";
import { NavLink } from 'react-router-dom';
import Header from "../Header/Header.js";

function Profile() {
    return (
        <>
        <Header/>
        <main className="profile">
            <p className="profile__welcome-text">Привет, Роман</p>
            <form className="profile__form">
                <fieldset className="profile__form-wrapper">
                    <div className="profile__input-name-wrapper">
                        <label className="profile__input-label">Имя</label>
                        <input className="profile__input"
                            type="text"
                            name="name"
                            id="profile__name"
                            placeholder="Имя"
                            minLength="2"
                            maxLength="30"
                            required
                        />
                    </div>

                    <div className="profile__input-email-wrapper">
                        <label className="profile__input-label">E-mail</label>
                        <input className="profile__input"s
                            type="email"
                            name="email"
                            id="profile__email"
                            placeholder="Email"
                            autoComplete="email"
                            minLength="6"
                            required
                            pattern="[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,4}"
                        />
                    </div>
                </fieldset>
            </form>
            <button className="profile__btn-save" type="button">Редактировать</button>
            <NavLink to="/" className="profile__logout">Выйти из аккаунта</NavLink>
        </main>
         </>
    );
}

export default Profile;