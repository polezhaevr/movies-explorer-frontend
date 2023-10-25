import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js"

function SearchForm() {
    return (
        <section className="search">
            <div className="search__container">
                <form className="search__form">
                    <input className="search__input"
                        type="search"
                        name="search"
                        placeholder="Фильм"
                        id="search-form"
                    />
                    <button className="search__btn" type="button"></button>
                </form>
                <FilterCheckbox/>
            </div>
        </section>
    );
}

export default SearchForm;