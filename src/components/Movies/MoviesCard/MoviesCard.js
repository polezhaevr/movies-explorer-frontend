import React from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


function MoviesCard({ movieInfo, onCardButtonClick, addedMovies }) {
    const location = useLocation();
    const durationHours = Math.floor(movieInfo.duration / 60);
    const durationMinutes = movieInfo.duration % 60;

    function handleCardButtonClick(evt) {
        onCardButtonClick(movieInfo);
        evt.preventDefault();
    }



    return (
        <li className="movies__item">
            <Link className="movies__trailer-link" to={movieInfo.trailerLink} target="_blank">
                <img className="movies__img"
                    src={location.pathname === "/movies" && movieInfo.image
                        ? 'https://api.nomoreparties.co' + movieInfo.image.url
                        : location.pathname === "/saved-movies"
                            ? movieInfo.image
                            : ''}
                    alt={`Постер фильма «${movieInfo.nameRU}»`}
                />
            </Link>
            <div className="movies__components-container">
                <div className="movies__text-container">
                    <h2 className="movies__card-tittle">{movieInfo.nameRU}</h2>
                    <p className="movies__text-time">{durationHours > 0 && `${durationHours}ч`}{durationMinutes > 0 && ` ${durationMinutes}м`}</p>
                </div>

                <button
                    className={`movies__card-btn${location.pathname === "/saved-movies"
                        ? " movies__card-btn_delete"
                        : addedMovies.some(item => item.movieId === movieInfo.id)
                            ? " movies__card-btn_active "
                            : " movies__card-btn_active_none"
                        }`}
                    type="button"
                    onClick={handleCardButtonClick}

                />
            </div>
        </li>
    );
}

export default MoviesCard;