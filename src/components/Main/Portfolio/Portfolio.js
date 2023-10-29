import React from "react";
import link from "../../../images/portfolio-link.svg"



function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__tittle">Портфолио</h4>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a
                        className="portfolio__item-link"
                        href="https://github.com/polezhaevr"
                        target = "_blank"
                        rel="noreferrer"
                    >
                        <p className="portfolio__item-text">Статичный сайт</p>
                        <img src={link} alt="Иконка к ссылке для перехода на статичный сайт"
                            className="portfolio__link-ico"></img>
                    </a>
                </li>

                <li className="portfolio__item">
                    <a
                        className="portfolio__item-link"
                        href="https://github.com/polezhaevr"
                        target = "_blank"
                        rel="noreferrer"
                    >
                        <p className="portfolio__item-text">Адаптивный сайт</p>
                        <img src={link} alt="Иконка к ссылке для перехода на адаптивный сайт"
                            className="portfolio__link-ico"></img>
                    </a>
                </li>

                <li className="portfolio__item">
                    <a
                        className="portfolio__item-link"
                        href="https://github.com/polezhaevr"
                        target = "_blank"
                        rel="noreferrer"
                    >
                        <p className="portfolio__item-text">Одностраничное приложение</p>
                        <img src={link} alt="Иконка к ссылке для перехода на одностраничное приложение"
                            className="portfolio__link-ico"></img>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;