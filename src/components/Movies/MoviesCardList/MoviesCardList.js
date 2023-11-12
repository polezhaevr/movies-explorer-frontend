import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js"
import { useLocation } from 'react-router-dom';


function MoviesCardList({ movies, onCardButtonClick, addedMovies }) {
    const [cardToView, setCardToView] = React.useState(8);
    const location = useLocation();

    React.useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    React.useEffect(() => {
        handleResize();
    }, [movies])

    function handleResize() {
        if (window.innerWidth > 1280) {
            setCardToView(12);
        } else if (window.innerWidth > 768) {
            setCardToView(8);
        } else {
            setCardToView(5);
        }
    }

    function handleMoreButtonClick() {
        if (window.innerWidth > 1280) {
            setCardToView(prevCardToView => prevCardToView + 4);
        } else if (window.innerWidth > 768) {
            setCardToView(prevCardToView => prevCardToView + 2);
        } else {
            setCardToView(prevCardToView => prevCardToView + 2);
        }
    }

    return (

        movies.length > 0 ? (
            <section className="movies">
                <ul className="movies__list">
                    {movies
                        .slice(0, location.pathname === "/movies" ? cardToView : undefined)
                        .map(movie => (
                            <MoviesCard
                                key={location.pathname === "/movies" ? movie.id : movie._id}
                                movieInfo={movie}
                                onCardButtonClick={onCardButtonClick}
                                addedMovies={addedMovies}
                            />
                        ))
                    }
                </ul>
                {movies.length > cardToView && location.pathname === "/movies" &&
                    <button className="movies__btn-more" onClick={handleMoreButtonClick}>Ещё</button>
                }
            </section>
        ) : (
            <section className="movies__not-found">
                {location.pathname === "/movies" ? "Ничего не найдено" : "Нет сохранённых фильмов"}
            </section>
        )

    );
}

export default MoviesCardList;