import React from "react";
import user from "../../../images/roman-main.jpg"


function AboutMe() {
    return (
        <section id="aboutMe" className="about-me">
            <h2 className="about-me__tittle">
                Студент
            </h2>

            <div className="about-me__list">
                <div className="about-me__item">
                    <h3 className="about-me__tittle-name">Роман</h3>
                    <p className="about-me__who-text">Фронтенд-разработчик, 28 лет</p>
                    <p className="about-me__text-description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a
                        className="about-me__link"
                        href="https://github.com/polezhaevr"
                        target="_blank"
                        rel="noreferrer"
                    >GitHub</a>

                </div>

                <div className="about-me__item">
                    <img className="about-me__img"
                        src={user}
                        alt="Логотип промо сайта"
                    ></img>
                </div>
            </div>

        </section>
    );
}

export default AboutMe;