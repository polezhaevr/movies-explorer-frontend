import React from "react";
import pic from "../../../images/example_pic.jpg";
import { useLocation } from 'react-router-dom';


function MoviesCard() {
    const location = useLocation();
    return (
        <li className="movies__item">
            <img className="movies__img"
                src={pic}
                alt="Картинка карточки фильма"
            />

            <div className="movies__components-container">
                <div className="movies__text-container">
                    <h2 className="movies__card-tittle">33 слова о дизайне</h2>
                    <p className="movies__text-time">1ч42м</p>
                </div>

                <button
                    className={`movies__card-btn${location.pathname === "/saved-movies"
                        ? " movies__card-btn_delete"
                        : ""
                        }`}
                    type="button"

                />
            </div>
        </li>
    );
}

export default MoviesCard;