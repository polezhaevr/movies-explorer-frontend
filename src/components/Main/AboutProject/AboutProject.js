import React from "react";


function AboutProject() {
    return (
        <section className="about-project">
            <div className="about-priject__title-container">=
                <h2 className="about-project__about-tittle">
                    О проекте
                </h2>
            </div>

            <ul className="about-project__list">
                <li className="about-project__list-item">
                    <h3 className="about-project__list-tittle">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__list-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li>
                    <h3 className="about-project__list-tittle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__list-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>

            <div className="about-project__timetable-contaiter">
                <ul className="about-project__list-timetable">
                    <li className="about-project__list-timetable-item">
                        <h4 className="about-project__list-timetable-time">1 неделя</h4>
                    </li>

                    <li className="about-project__list-timetable-item">
                        <h4 className="about-project__list-timetable-time about-project__list-timetable-time_front">4 недели</h4>
                    </li>
                </ul>


                <ul className="about-project__list-timetable">
                    <li className="about-project__list-timetable-item about-project__list-timetable-item_grey">
                        <p className="about-project__list-timetable-time about-project__list-timetable-time_grey">Back-end</p>
                    </li>


                    <li className="about-project__list-timetable-item about-project__list-timetable-item_grey">
                        <p className="about-project__list-timetable-time about-project__list-timetable-time_grey">Front-end</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default AboutProject;