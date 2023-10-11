import React from "react";
import logo from "../../../src/images/logo-main.png"


function Header() {
  return (
    <header className="header">
      <ul className="header__list">
        <li className="header__item">
          <a className="header__item-link header__item-link_logo"
            href="/"
            rel="noreferrer">
            <img className="header__item-logo"
              src={logo}
              alt="Логотип сайта"></img>
          </a>
        </li>

        <li className="header__item ">
          <a className="header__item-link"
            href="/movies"
            target="_blank"
            rel="noreferrer">
            Фильмы
          </a>
          <a className="header__item-link"
            href="/saved-movies"
            target="_blank"
            rel="noreferrer">
            Сохранённые фильмы
          </a>
        </li>

        <li className="header__item">
          <a className="header__item-link header__item-link_container"
            href="/profile"
            target="_blank"
            rel="noreferrer">
            <p className="header__item-text">Аккаунт</p>
            <div className="header__item-avatar-profile-container"></div>
          </a>
        </li>
      
        <li className="header__item">
          <a className="header__item-link"
            href="/signup"
            target="_blank"
            rel="noreferrer">
            Регистрация
          </a>
          <a className="header__item-link header__item-link_green-btn"
            href="/signin"
            target="_blank"
            rel="noreferrer">
            Войти
          </a>
        </li>

      </ul>

    </header>
  );
}

export default Header;