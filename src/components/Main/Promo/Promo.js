import logo from "../../../images/big-landing-logo.png"

function Promo() {
  return(
    <section className="promo">
        <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a className="promo__link" href="#aboutMe">Узнать больше</a>
        </div>

        <div className="promo__img-container">
        <img
          className="promo__img"
          src={logo}
          alt="Логотип промо сайта"
        />
        </div>
    </section>
  )
}

export default Promo;