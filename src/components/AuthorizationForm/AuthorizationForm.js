import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from "../../images/logo.png"

function AuthorizationForm({ tittle, button, text, textLink, signLink }) {
    const location = useLocation();
    return (
        <main className="authorization">
            <NavLink to="/" className="authorization__link">
                <img src={logo} alt="Логотип" className="authorization__logo" />
            </NavLink>
            <h2 className="authorization-form__title">{tittle}</h2>
            <form className="authorization__form">
                <label className={`authorization__label ${location.pathname === "/signin"
                    ? " authorization__label_none"
                    : ""
                    }`} htmlFor="name">Имя</label>
                <input
                    className={`authorization__input ${location.pathname === "/signin"
                        ? " authorization__input_none"
                        : ""
                        }`}
                    type="text"
                    name="name"
                    id="authorization__name"
                    placeholder="Имя"
                    autoComplete="given-name"
                    minLength="2"
                    maxLength="30"
                    required
                />

                <label className="authorization__label" htmlFor="email">E-mail</label>
                <input
                    className="authorization__input"
                    type="email"
                    name="email"
                    id="authorization__email"
                    placeholder="Email"
                    autoComplete="email"
                    minLength="6"
                    required
                    pattern="[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,4}"
                />

                <label className="authorization__label" htmlFor="password">Пароль</label>
                <input
                    className="authorization__input"
                    type="password"
                    name="password"
                    id="authorization-form__password"
                    placeholder="Пароль"
                    required
                />

                <button
                    className={`authorization__btn  ${location.pathname === "/signin"
                        ? " authorization__btn_position"
                        : ""
                        }`}
                    type="submit"
                >{button}</button>

                <div className="authorization__link-container">
                    <p className="authorization__link-text">{text}</p>
                    <NavLink to={signLink} className="authorization__link">{textLink}</NavLink>
                </div>
            </form>
        </main>
    )
}
export default AuthorizationForm;  