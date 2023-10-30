import React from 'react';
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList.js";

function SavedMovies() {

  return(
    <>
      <Header/>
      <main>
        <SearchForm/>
        <MoviesCardList/>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;