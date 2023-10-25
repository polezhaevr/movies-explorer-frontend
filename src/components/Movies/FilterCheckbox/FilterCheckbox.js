import React from "react";


function FilterCheckbox() {
    return (
        <div className="checkbox__container">
            <label className="checkbox__switch" for="shorts-film">
                <input
                className="checkbox__input"  
                type="checkbox" 
                id="shorts-film" 
                name="shorts-film"
                form="search-form"
                />
                <div class="checkbox__slider checkbox__slider_round"></div>
            </label>

            <label  htmlFor="short-films" className="checkbox__label-text">Короткометражки</label>
        </div>
    );
}

export default FilterCheckbox;