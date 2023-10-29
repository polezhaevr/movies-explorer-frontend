import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__title-container">
                <h2 className="footer__tittle">
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </h2>
            </div>
            <div className="footer__list">
                <div className="footer__item">
                    <p className="footer__item-text footer__item-text_grey-color">
                        &#169;2023
                    </p>
                </div>

                <div className="footer__item">
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
                </div>
            </div>
        </footer>
    )
}

export default Footer;