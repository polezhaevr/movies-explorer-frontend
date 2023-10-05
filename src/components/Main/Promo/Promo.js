import logo from "../../../images/big-landing-logo.png"
import { Link } from "react-router-dom";

function Promo() {
  return(
    <section className="promo">
        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <Link className="ptomo__link" to="/">Узнать больше</Link>
        <img
          className="promo__img"
          src={logo}
          alt="Логотип промо сайта"
        />
    </section>
  )
}

export default Promo;