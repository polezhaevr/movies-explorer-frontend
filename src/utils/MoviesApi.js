const BEATFILM_API = 'https://api.nomoreparties.co/beatfilm-movies';

function getMovieList() {
    return fetch(BEATFILM_API)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(console.error);
  }
  
  export { getMovieList };