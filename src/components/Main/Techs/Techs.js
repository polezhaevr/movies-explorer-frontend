import React from "react";


function Techs() {
    return (
        <section className="techs">
            <div className="techs__title-container">
                <h2 className="techs__tittle">
                   Технологии
                </h2>
            </div>

            <ul className="techs__list">
                <li className="techs__list-item">
                    <h3 className="techs__list-tittle">7 технологий</h3>
                    <p className="techs__list-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                </li>
            </ul>


            <ul className="techs__list-technologies">
                <li className="techs__list-technologies-item">
                    <h4 className="techs__list-technologies-tittle">HTML</h4>
                </li>
                <li className="techs__list-technologies-item">
                    <h4 className="techs__list-technologies-tittle">CSS</h4>
                </li>
                <li className="techs__list-technologies-item">
                    <h4 className="techs__list-technologies-tittle">JS</h4>
                </li>
                <li className="techs__list-technologies-item">
                    <h4 className="techs__list-technologies-tittle">React</h4>
                </li>
                <li className="techs__list-technologies-item">
                    <h4 className="techs__list-technologies-tittle">Git</h4>
                </li>
                <li className="techs__list-technologies-item">
                    <h4 className="techs__list-technologies-tittle">Express.js</h4>
                </li>
                <li className="techs__list-technologies-item">
                    <h4 className="techs__list-technologies-tittle">mongoDB</h4>
                </li>
            </ul>
        </section>
    );
}

export default Techs;