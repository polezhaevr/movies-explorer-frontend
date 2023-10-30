import React from "react";
import SearchForm from "./SearchForm/SearchForm.js";
import MoviesCardList from "./MoviesCardList/MoviesCardList.js";
import Header from "../Header/Header.js"
import Footer from "../Footer/Footer.js"

function Movies() {
    return (
        <>
        <main>
        <Header/>
        <SearchForm/>
        <MoviesCardList/>
        <Footer/>
        </main>
        </>
    );
}

export default Movies;