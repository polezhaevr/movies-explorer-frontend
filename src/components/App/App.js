import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { CurrentUser } from "../../contexts/CurrentUserContext";
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import Profile from "../Profile/Profile.js";
import Register from "../Register/Register.js";
import NotFound from "../NotFound/NotFound.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Login from "../Login/Login.js";
import * as MainApi from '../../utils/MainApi';
import {
  MOVIE_TIMING,
  STORAGE_SAVED_MOVIES,
  STORAGE_SEARCH_QUERY,
  STORAGE_IS_SHORT_FILM
} from '../../utils/constants';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(!!localStorage.getItem('token'));
  const [currentUser, setCurrentUser] = React.useState({});
  const [addedMovies, setSavedMovies] = React.useState(JSON.parse(localStorage.getItem(STORAGE_SAVED_MOVIES)) || []);
  const [searchQuery, setSearchQuery] = React.useState(localStorage.getItem(STORAGE_SEARCH_QUERY) || '');
  const [isShortFilm, setIsShortFilm] = React.useState(
    JSON.parse(localStorage.getItem(STORAGE_IS_SHORT_FILM)) || false
  );
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (isLoggedIn) {
      MainApi.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch(console.error);
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      MainApi.verificationToken(token).then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject();
      })
        .then(() => {
          setIsLoggedIn(true);

          if (location.pathname === '/signin' || location.pathname === '/signup') {
            navigate('/movies', { replace: true });
          }
        })
        .catch(() => {
          setIsLoggedIn(false);
          localStorage.removeItem('token');
          console.error('Ошибка токена');
        })
    }
  }, [])

  function handleRegister(values, messageFalse) {
    return MainApi.registration(values)
      .then(() => {
        handleLogin({ email: values.email, password: values.password });
      })
      .catch(() => {
        console.error('Произошла ошибка');
        messageFalse(true);
      })
  }

  function handleLogin(values, messageFalse) {
    return MainApi.authorization(values)
      .then(data => {
        if (data['token']) {
          localStorage.setItem('token', data['token']);
          setIsLoggedIn(true);
          if (addedMovies.length === 0) {
            MainApi.getSavedMovies()
              .then((res) => {
                setSavedMovies(res);
                localStorage.setItem(STORAGE_SAVED_MOVIES, JSON.stringify(res));
              })
              .catch(console.error);
          }

          navigate('/movies', { replace: true });
        }
      })
      .catch(() => {
        console.error('Произошла ошибка');
        messageFalse(true);
      })
  }

  function handleLogout() {
    localStorage.clear();
    setIsLoggedIn(false);
    window.location.reload();
  }

  function handleProfileFormSubmit(inputValues, messageFalse) {
    return MainApi.setUserInfo(inputValues).then((userData) => {
      setCurrentUser({
        name: userData.name,
        email: userData.email,
      });
    })
      .catch(() => {
        console.error('Такой email в базе уже есть');
        messageFalse(false);
      })

  }

  function handleSearchFormSubmit(searchQuery) {
    setSearchQuery(searchQuery);
    localStorage.setItem(STORAGE_SEARCH_QUERY, searchQuery);
  }

  function handleShortFilmCheckboxChange(event) {
    const checkedState = event.target.checked;

    setIsShortFilm(checkedState);
    localStorage.setItem(STORAGE_IS_SHORT_FILM, checkedState);
  }

  function filterMovies(rawMovies) {
    return rawMovies.filter((item) => {
      const includesQuery =
        item.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(searchQuery.toLowerCase());

      return isShortFilm ? item.duration <= MOVIE_TIMING && includesQuery : includesQuery;
    });
  }

  function handleLikeButtonClick(movieInfo) {
    const movie = addedMovies.find((item) => item.movieId === movieInfo.id);
    if (!movie) {
      MainApi.addLikedMovie(movieInfo)
        .then((res) => {
          setSavedMovies(prevSavedMovies => [...prevSavedMovies, res]);
        })
        .catch(console.error);
    } else {
      MainApi.removeMovie(movie._id)
        .then(() => {
          setSavedMovies((state) => state.filter((m) => m._id === movie._id ? '' : m));
        })
        .catch(console.error);
    }
  }

  function handleDeleteButtonClick(movieInfo) {
    const movie = addedMovies.find((item) => item.movieId === movieInfo.movieId);
    if (movie) {
      MainApi.removeMovie(movie._id)
        .then(() => {
          setSavedMovies((state) => state.filter((m) => m._id === movie._id ? '' : m));
        })
        .catch(console.error);
    } else {
      console.error('Фильм не найден');
    }
  }

  React.useEffect(() => {
    localStorage.setItem(STORAGE_SAVED_MOVIES, JSON.stringify(addedMovies));
  }, [addedMovies]);

  return (
    <CurrentUser.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
        <Route path="/movies" element={
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
            element={Movies}
            onShortFilmCheckboxChange={handleShortFilmCheckboxChange}
            addedMovies={addedMovies}
            filterMovies={filterMovies}
            searchQuery={searchQuery}
            isShortFilm={isShortFilm}
            onSearchFormSubmit={handleSearchFormSubmit}
            onCardButtonClick={handleLikeButtonClick}
          />
        } />
        <Route path="/saved-movies" element={
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
            element={SavedMovies}
            onCardButtonClick={handleDeleteButtonClick}
            addedMovies={addedMovies}
          />
        } />
        <Route path="/profile" element={
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
            onUpdateUser={handleProfileFormSubmit}
            element={Profile}
            handleLogout={handleLogout}
          />
        } />
        <Route path="/signin" element={<Login submitHandler={handleLogin} />} />
        <Route path="/signup" element={<Register submitHandler={handleRegister} />} />
        <Route path="/*" element={<ProtectedRoute element={NotFound} isLoggedIn={isLoggedIn} />} />
      </Routes>
    </CurrentUser.Provider>

  );
}

export default App;
