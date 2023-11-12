import React from "react";
import SearchForm from "./SearchForm/SearchForm.js";
import MoviesCardList from "./MoviesCardList/MoviesCardList.js";
import Header from "../Header/Header.js"
import Footer from "../Footer/Footer.js"
import  Preloader from '../Preloader/Preloader.js';
import * as MoviesApi from '../../utils/MoviesApi';


function Movies({ isLoggedIn, searchQuery, isShortFilm, onSearchFormSubmit, onShortFilmCheckboxChange, filterMovies, onCardButtonClick, addedMovies}) {
    const [rawMovies, setRawMovies] = React.useState(JSON.parse(localStorage.getItem('rawMovies')) || []);

    React.useEffect(() => {
        if (rawMovies.length === 0) {
          MoviesApi.getMovieList()
            .then((res) => {
              setRawMovies(res);
              localStorage.setItem('rawMovies', JSON.stringify(res));
            })
            .catch(console.error);
        }
      },);


    return (
        <>
            <main>
                <Header   isLoggedIn={isLoggedIn}/>
                <SearchForm
                    searchQuery={searchQuery}
                    isShortFilm={isShortFilm}
                    onSearchFormSubmit={onSearchFormSubmit}
                    onShortFilmCheckboxChange={onShortFilmCheckboxChange}
                />
                {rawMovies.length > 0 ?
                    <MoviesCardList
                        movies={filterMovies(rawMovies)}
                        onCardButtonClick={onCardButtonClick}
                        addedMovies={addedMovies}
                    />
                    : <Preloader/>}
                <Footer />
            </main>
        </>
    )
}

export default Movies;