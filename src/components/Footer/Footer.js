import React from "react";

function Footer() {
    return (
        <section className="footer">
            <div className="footer__title-container">
                <h2 className="footer__tittle">
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </h2>
            </div>
            <ul className="footer__list">
                <li className="footer__item">
                    <p className="footer__item-text">
                        &#169;2023
                    </p>
                </li>

                <li className="footer__item">
                    <a className="footer__list-link"
                        href="https://practicum.yandex.ru"
                        target="_blank"
                        rel="noreferrer">
                        Яндекс.Практикум
                    </a>
                    <a className="footer__list-link"
                        href="https://github.com/polezhaevr"
                        target="_blank"
                        rel="noreferrer">
                        Github
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Footer;