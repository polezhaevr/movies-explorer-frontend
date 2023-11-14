import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from "../Header/Header.js";
import { CurrentUser } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/editValidationForm.js';

function Profile({ isLoggedIn, handleLogout, onUpdateUser }) {
    const currentUser = React.useContext(CurrentUser);
    const { values, handleChange, errors, isValid, setValues } = useFormWithValidation();
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [isSuccessMessageShow, setIsSuccessMessageShow] = useState(false);
    const isButtonUnable = isValid && (values.name !== currentUser.name || values.email !== currentUser.email);

    React.useEffect(() => {
        setValues(currentUser);
    }, [currentUser, setValues]);

    console.log(isButtonUnable);

    function handleBlockForm() {
        setIsEditingProfile(true);
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleBlockForm();
        onUpdateUser(values)
            .then(() => {
                setIsEditingProfile(false);
                setIsSuccessMessageShow(true); 

            })
            .catch(() => {
                setIsSuccessMessageShow(false); 
                setIsEditingProfile(false);
                alert('Такой email в базе уже есть')
              })
    }

    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <main className="profile">
                <p className="profile__welcome-text">Привет, {currentUser.name}!</p>
                <form className="profile__form" name="profile__data" onSubmit={handleSubmit} >
                    <fieldset className="profile__form-wrapper" disabled={isEditingProfile}>
                        <div className="profile__input-name-wrapper">
                            <label className="profile__input-label">Имя</label>
                            <input className="profile__input"
                                type="text"
                                name="name"
                                id="profile__name"
                                placeholder="Имя"
                                minLength="2"
                                maxLength="30"
                                autoComplete="given-name"
                                required
                                defaultValue={currentUser.name}
                                onChange={handleChange}
                            />
                        </div>
                        <span className="profile__input-error">{errors.name}</span>
                        <div className="profile__input-email-wrapper">
                            <label className="profile__input-label">E-mail</label>
                            <input className="profile__input"
                                defaultValue={currentUser.email}
                                type="email"
                                name="email"
                                id="profile__email"
                                placeholder="Email"
                                autoComplete="email"
                                minLength="6"
                                required
                                pattern="[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,4}"
                                onChange={handleChange}
                            />
                        </div>
                        <span className="profile__input-error">{errors.email}</span>
                    </fieldset>
                </form>
                <>
                    <span className="profile__ok-message">{isSuccessMessageShow && "Профиль успешно обновлён"}</span>
                    <button className="profile__btn-save"
                        type="submit"
                        onClick={handleSubmit}
                        disabled={!isValid || !isButtonUnable}
                    >Редактировать</button>
                    <NavLink to="/" className="profile__logout" onClick={handleLogout}>Выйти из аккаунта</NavLink>

                </>
            </main >
        </>
    );
}

export default Profile;