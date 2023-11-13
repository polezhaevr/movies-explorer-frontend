import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from "../../images/logo.svg"
import { useFormWithValidation } from '../../hooks/editValidationForm';

function AuthorizationForm({ name, tittle, button, text, textLink, signLink, submitHandler }) {
    const { values, handleChange, errors, isValid } = useFormWithValidation();
    const [errorMessage, setErrorMessageShow] = React.useState('');
    const location = useLocation();


    function handleSubmit(event) {
        event.preventDefault(); 
        setErrorMessageShow(true);
        submitHandler(values)
    }

    return (
        <main className="authorization">
            <NavLink to="/" className=" ">
                <img src={logo} alt="Логотип" className="authorization__logo" />
            </NavLink>
            <h1 className="authorization__title">{tittle}</h1>
            <form className="authorization__form" onSubmit={handleSubmit} name={`${name}-form`} onChange={handleChange}>
                {location.pathname === "/signup" ?
                    <>
                        <label className={`authorization__label ${location.pathname === "/signin"
                            ? " authorization__label_none"
                            : ""
                            }`} htmlFor="name" >Имя</label>
                        <input
                            className={`authorization__input ${location.pathname === "/signin"
                                ? " authorization__input_none"
                                : ""
                                }`}
                            type="text"
                            name="name"
                            id="authorization-form__name"
                            placeholder="Имя"
                            autoComplete="given-name"
                            minLength="2"
                            maxLength="30"
                            value={values.name ?? ''}
                            required
                            onChange={handleChange}
                        />
                        <span className="authorization__input-message-error">{errors.name}</span>
                    </>
                    : ""
                }
                <label className="authorization__label" htmlFor="email">E-mail</label>
                <input
                    className="authorization__input"
                    type="email"
                    name="email"
                    id="authorization__email"
                    placeholder="Email"
                    autoComplete="email"
                    minLength="6"
                    value={values.email ?? ''}
                    required
                    pattern="[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,4}"
                    onChange={handleChange}
                />
                <span className="authorization__input-message-error">{errors.email}</span>

                <label className="authorization__label" htmlFor="password">Пароль</label>
                <input
                    className="authorization__input authorization__input_pass-red"
                    type="password"
                    name="password"
                    id="authorization-form__password"
                    value={values.password ?? ''}
                    placeholder="Пароль"
                    minLength="8"
                    required
                    onChange={handleChange}
                />
                <span className="authorization__input-message-error">{errors.password}</span>

                {errorMessage &&
                    <span className="authorization__input-message-error">Что то пошло не так ...</span>
                }
                <button
                    className={`authorization__btn  ${location.pathname === "/signin"
                        ? " authorization__btn_position"
                        : ""
                        }`}
                    type="submit"
                    disabled={!isValid}
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