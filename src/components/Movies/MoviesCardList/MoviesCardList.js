import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js"
import { useLocation } from 'react-router-dom';
import {
    PC_WIDTH,
    TABLET_WIDTH,
    PC_CARD,
    TABLET_CARD,
    MOBILE_CARD,
    PC_COUNT_CARD_MORE,
    TABLET_COUNT_CARD,
    MOBILE_COUNT_CARD
} from "../../../utils/constants.js"


function MoviesCardList({ movies, onCardButtonClick, addedMovies }) {
    const [cardToView, setCardToView] = React.useState(16);
    const location = useLocation();

    React.useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    function handleResize() {
        if (window.innerWidth > PC_WIDTH) {
            setCardToView(PC_CARD);
        } else if (window.innerWidth > TABLET_WIDTH) {
            setCardToView(TABLET_CARD);
        } else {
            setCardToView(MOBILE_CARD);
        }
    }

    function handleMoreButtonClick() { 
        if (window.innerWidth > PC_WIDTH) {
            setCardToView(prevCardToView => prevCardToView + PC_COUNT_CARD_MORE);
        } else if (window.innerWidth > TABLET_WIDTH) {
            setCardToView(prevCardToView => prevCardToView + TABLET_COUNT_CARD);
        } else {
            setCardToView(prevCardToView => prevCardToView + MOBILE_COUNT_CARD);
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