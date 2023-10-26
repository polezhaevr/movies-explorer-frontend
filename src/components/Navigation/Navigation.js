import React from "react";
import { NavLink } from 'react-router-dom';

function Navigation({ isNavigationOpened, handleCloseNavigationClick }) {
  return (
    <div className={`navigation${isNavigationOpened ? " navigation_opened" : ""}`}>
      <div className="navigation__container">
        <button className="navigation__close-button" type="button" onClick={handleCloseNavigationClick} />
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink className={({ isActive }) =>
                `navigation__item-link${isActive ? " navigation__item-link_active" : ""}`}
                to="/"
                rel="noreferrer">
                Главная
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink className={({ isActive }) =>
                `navigation__item-link${isActive ? " navigation__item-link_active" : ""}`}
                to="/movies"
                rel="noreferrer">
                Фильмы
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink className={({ isActive }) =>
                `navigation__item-link${isActive ? " navigation__item-link_active" : ""}`}
                to="/saved-movies"
                rel="noreferrer">
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>

          <NavLink className="navigation__item-link navigation__item-link_container"
            to="/profile"
            rel="noreferrer">
            <p className="navigation__item-text">Аккаунт</p>
            <div className="navigation__item-avatar-profile-container"></div>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;