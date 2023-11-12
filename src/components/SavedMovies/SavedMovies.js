import React from 'react';
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";

function SavedMovies({ isLoggedIn, onCardButtonClick, addedMovies }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isShortFilm, setIsShortFilm] = React.useState(false);

  function handleSearchFormSubmitOnSaved(searchQuery) {
    setSearchQuery(searchQuery);
  }

  function handleShortFilmCheckboxChangeOnSaved(event) {
    const checkedState = event.target.checked;

    setIsShortFilm(checkedState);
  }

  function filterMovies(savedMovies) {
    return savedMovies.filter((item) => {
      const includesQuery =
        item.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(searchQuery.toLowerCase());

      return isShortFilm ? item.duration <= 40 && includesQuery : includesQuery;
    });
  }


  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <SearchForm
          searchQuery={''}
          isShortFilm={false}
          onSearchFormSubmit={handleSearchFormSubmitOnSaved}
          onShortFilmCheckboxChange={handleShortFilmCheckboxChangeOnSaved}

        />
        <MoviesCardList
          movies={filterMovies(addedMovies)}
          onCardButtonClick={onCardButtonClick}
          savedMovies={addedMovies}
        />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;