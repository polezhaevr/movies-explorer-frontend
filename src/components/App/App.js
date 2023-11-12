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

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(!!localStorage.getItem('token'));
  const [currentUser, setCurrentUser] = React.useState({});
  const [addedMovies, setSavedMovies] = React.useState(JSON.parse(localStorage.getItem('savedMovies')) || []);
  const [searchQuery, setSearchQuery] = React.useState(localStorage.getItem('searchQuery') || '');
  const [isShortFilm, setIsShortFilm] = React.useState(
    JSON.parse(localStorage.getItem('isShort')) || false
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
        })
    }
  },[])

  function handleRegister(values) {
    MainApi.registration(values)
      .then((res) => {
        if (res.ok) {
          handleLogin({ email: values.email, password: values.password });
        } else if (res.status === 400) {
          console.error('400: некорректно заполнено одно из полей');
        }
      })
      .catch(console.error);
  }

  function handleLogin(values) {
    MainApi.authorization(values)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then(res => { throw new Error(res.error) })
      })
      .then(data => {
        if (data['token']) {
          localStorage.setItem('token', data['token']);
          setIsLoggedIn(true);

          if (addedMovies.length === 0) {
            MainApi.getSavedMovies()
              .then((res) => {
                setSavedMovies(res);
                localStorage.setItem('savedMovies', JSON.stringify(res));
              })
              .catch(console.error);
          }

          navigate('/movies', { replace: true });
        }
      })
      .catch(console.error);
  }

  function handleLogout() {
    localStorage.clear();
    setIsLoggedIn(false);
  }

  function handleProfileFormSubmit(inputValues) {
    return MainApi.setUserInfo(inputValues)
      .then(setCurrentUser);
  }

  function handleSearchFormSubmit(searchQuery) {
    setSearchQuery(searchQuery);
    localStorage.setItem('searchQuery', searchQuery);
  }

  function handleShortFilmCheckboxChange(event) {
    const checkedState = event.target.checked;

    setIsShortFilm(checkedState);
    localStorage.setItem('isShort', checkedState);
  }

  function filterMovies(rawMovies) {
    return rawMovies.filter((item) => {
      const includesQuery =
        item.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(searchQuery.toLowerCase());

      return isShortFilm ? item.duration <= 40 && includesQuery : includesQuery;
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
    console.log(movie);
  }

  React.useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(addedMovies));
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
            ShortFilm={isShortFilm}
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