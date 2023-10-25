import { useEffect, useState } from 'react';
import logo from "../../../src/images/logo-main.png"
import { NavLink, useLocation } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";

function Header() {
  const location = useLocation();
  const [matches, setMatches] = useState(window.matchMedia('(max-width: 940px)').matches);
  const [isNavigationOpened, setIsNavigationOpened] = useState(false);

  useEffect(() => {
    window
      .matchMedia('(max-width: 940px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  function onHamburgerClick() {
    setIsNavigationOpened(true);
  }

  function onCloseNavigationClick() {
    setIsNavigationOpened(false);
  }



  return (
    <header className={`header${location.pathname === "/" ? " header_background-blue" : ""}`}>
      <ul className="header__list">
        <li className="header__item">
          <NavLink className="header__item-link header__item-link_logo"
            to="/"
            rel="noreferrer">
            <img className="header__item-logo"
              src={logo}
              alt="Логотип сайта"></img>
          </NavLink>
        </li>

        <li className="header__item ">
          <NavLink className={({ isActive }) =>
            `header__item-link${isActive ? " header__item-link_active" : ""}`}
            to="/movies"
            rel="noreferrer">
            Фильмы
          </NavLink>
          <NavLink className={({ isActive }) =>
            `header__item-link${isActive ? " header__item-link_active" : ""}`}
            to="/saved-movies"
            rel="noreferrer">
            Сохранённые фильмы
          </NavLink>
        </li>

        <li className="header__item">
          <NavLink className="header__item-link header__item-link_container"
            to="/profile"
            rel="noreferrer">
            <p className="header__item-text">Аккаунт</p>
            <div className="header__item-avatar-profile-container"></div>
          </NavLink>
        </li>

        <li className="header__item">
          <NavLink className="header__item-link"
            to="/signup"
            rel="noreferrer">
            Регистрация
          </NavLink>
          <NavLink className="header__item-link header__item-link_green-btn"
            to="/signin"
            rel="noreferrer">
            Войти
          </NavLink>
        </li>
        <li className="header__item">
          <button type="button" className={`header__btn-burger${location.pathname === "/" ? " header__btn-burger_blue" : ""}`}
            onClick={onHamburgerClick}></button>
        </li>
      </ul>
      {matches &&
        <Navigation isNavigationOpened={isNavigationOpened} handleCloseNavigationClick={onCloseNavigationClick} />
      }
    </header>
  );
}

export default Header;