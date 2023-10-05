import React from "react";
import  Promo  from '../Main/Promo/Promo.js';
import Header from '../Header/Header.js';
import AboutProject from '../Main/AboutProject/AboutProject.js'
import Techs from '../Main/Techs/Techs.js'
import AboutMe from '../Main/AboutMe/AboutMe.js'


function Main() {
    return (
        <>

            <main>
                <Header/>
                <Promo />
                <AboutProject/>
                <Techs/>
                <AboutMe/>
            </main>

        </>
    )
}

export default Main;