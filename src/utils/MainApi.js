import { BACKEND_BITFILMSDB_URL_API } from './constants.js';

function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function setRequest(urlPath, requestMethod) {
  return fetch(`${BACKEND_BITFILMSDB_URL_API}${urlPath}`, {
    method: requestMethod,
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(console.error);
}

function removeMovie(movieId) {
  return setRequest(`/movies/${movieId}`, 'DELETE');
}

function verificationToken(token) {
  return fetch(`${BACKEND_BITFILMSDB_URL_API}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    }
  })
}

function registration({ name, email, password }) {
  return fetch(`${BACKEND_BITFILMSDB_URL_API}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  }).then(_checkResponse);

}

function authorization({ email, password }) {
  return fetch(`${BACKEND_BITFILMSDB_URL_API}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }).then(_checkResponse);
}

function getRequest(urlPath) {
  return fetch(`${BACKEND_BITFILMSDB_URL_API}${urlPath}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(_checkResponse)
    .catch(console.error);
}

function getUserInfo() {
  return getRequest('/users/me');
}

function getSavedMovies() {
  return getRequest('/movies');
}

function setRequestBody(urlPath, requestMethod, requestBody) {
  return fetch(`${BACKEND_BITFILMSDB_URL_API}${urlPath}`, {
    method: requestMethod,
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
  .then(_checkResponse)
    .catch(console.error);
}

function setUserInfo(newDataProfile) {
  return setRequestBody('/users/me', 'PATCH', {
    name: newDataProfile.name,
    email: newDataProfile.email
  });
}

function addLikedMovie(movieInfo) {
  return setRequestBody('/movies', 'POST', {
    country: movieInfo.country,
    director: movieInfo.director,
    duration: movieInfo.duration,
    year: movieInfo.year,
    description: movieInfo.description,
    image: 'https://api.nomoreparties.co' + movieInfo.image.url,
    trailer: movieInfo.trailerLink,
    thumbnail: 'https://api.nomoreparties.co' + movieInfo.image.formats.thumbnail.url,
    movieId: movieInfo.id,
    nameRU: movieInfo.nameRU,
    nameEN: movieInfo.nameEN,
  });
}

export { removeMovie, verificationToken, registration, authorization, getUserInfo, setUserInfo, getSavedMovies, addLikedMovie };