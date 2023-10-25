import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js"


function MoviesCardList() {
    return (
        <section className="movies">
            <ul className="movies__list">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
            <button className="movies__btn-more">Ещё</button>
        
        </section>
    );
}

export default MoviesCardList;