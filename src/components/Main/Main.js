import React from "react";
import Promo from '../Main/Promo/Promo.js';
import Header from '../Header/Header.js';
import AboutProject from '../Main/AboutProject/AboutProject.js'
import Techs from '../Main/Techs/Techs.js'
import AboutMe from '../Main/AboutMe/AboutMe.js'
import Portfolio from '../Main/Portfolio/Portfolio.js'
import Footer from '../../components/Footer/Footer.js'

function Main() {
    return (
        <>
            <Header />
            <main>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>
    )
}

export default Main;