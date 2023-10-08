import React from "react";
import link from "../../../images/portfolio-link.svg"



function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__tittle">Портфолио</h4>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <p className="portfolio__item-text">Статичный сайт</p>
                    <a
                        className="portfolio__item-link"
                        href="https://github.com/polezhaevr"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={link} alt="Иконка к ссылке для перехода на статичный сайт"
                            class="footer__social-icon"></img>
                    </a>
                </li>

                <li className="portfolio__item">
                    <p className="portfolio__item-text">Адаптивный сайт</p>
                    <a
                        className="portfolio__item-link"
                        href="https://github.com/polezhaevr"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={link} alt="Иконка к ссылке для перехода на адаптивный сайт"
                            class="footer__social-icon"></img>
                    </a>
                </li>

                <li className="portfolio__item">
                    <p className="portfolio__item-text">Одностраничное приложение</p>
                    <a
                        className="portfolio__item-link"
                        href="https://github.com/polezhaevr"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={link} alt="Иконка к ссылке для перехода на одностраничное приложение"
                            class="footer__social-icon"></img>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;