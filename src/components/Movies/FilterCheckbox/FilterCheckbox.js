import React from "react";

function FilterCheckbox({ isShortFilm, onShortFilmCheckboxChange }) {
    return (
        <div className="search__checkbox-container">
            <label className="search__switch" htmlFor="shorts-film">
                <input
                className="search__input"  
                type="checkbox" 
                id="shorts-film" 
                name="shorts-film"
                defaultChecked={isShortFilm}
                onChange={onShortFilmCheckboxChange}
                form="search-form"
                />
                <span className="search__slider search__slider_round"></span>
            </label>

            <label htmlFor="short-films" className="search__label-text">Короткометражки</label>
        </div>
    );
}

export default FilterCheckbox;