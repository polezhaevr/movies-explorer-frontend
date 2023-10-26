import React from "react";


function FilterCheckbox() {
    return (
        <div className="search__checkbox-container">
            <label className="search__switch" for="shorts-film">
                <input
                className="search__input"  
                type="checkbox" 
                id="shorts-film" 
                name="shorts-film"
                />
                <span class="search__slider search__slider_round"></span>
            </label>

            <label className="search__label-text">Короткометражки</label>
        </div>
    );
}

export default FilterCheckbox;