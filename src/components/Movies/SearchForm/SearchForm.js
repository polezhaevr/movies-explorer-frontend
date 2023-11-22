import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js"
import { useForm } from '../../../hooks/useForm.js';

function SearchForm({ searchQuery, isShortFilm, onSearchFormSubmit, onShortFilmCheckboxChange }) {
    const { values, handleChange } = useForm({ search: '' });

    function handleSubmit(event) {
      event.preventDefault();
      onSearchFormSubmit(values.search);
    }

    return (
        <section className="search">
            <div className="search__container">
                <form className="search__form" onSubmit={handleSubmit}>
                    <input className="search__input"
                        type="search"
                        name="search"
                        placeholder="Фильм"
                        id="search-form"
                        defaultValue={searchQuery}
                        onChange={handleChange}
                    />
                    <button className="search__btn" type="submit"></button>
                </form>
                <FilterCheckbox isShortFilm={isShortFilm} onShortFilmCheckboxChange={onShortFilmCheckboxChange}/>
            </div>
        </section>
    );
}

export default SearchForm;