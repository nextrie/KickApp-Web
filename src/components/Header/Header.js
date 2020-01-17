import React from 'react';
import "./Header.css";
import "./Header_Responsive.css";

import Separator from "../Separator/Separator.js"
import NavBar from  "../NavBar/NavBar.js";

import Wave from "../../assets/imgs/wave1.svg";
import Phone from "../../assets/imgs/iPhone.png";
import GPlay from "../../assets/imgs/available_gplay.png";
import AStore from "../../assets/imgs/available_astore.png";

export default class Header extends React.Component
{
    render()
    {
        return (
            <div className="headerContainer">
                <NavBar />
                <div className="headerContent">
                    <div className="headerContentContainer">
                        <div className="headerText">
                            <h1 className="headerTitle regularText">
                                KICK
                            </h1>
                            <h2 className="headerTitleDesc regularText light">
                                Bibliothèque et réseau social du rap français.
                            </h2>

                            <h3 className="headerDesc regularText light">
                                Téléchargez maintenant l'application et rejoignez une communauté de plus de 500.000 personnes.
                            </h3>
                            <div className="availableList">
                                <img src={GPlay} alt="googleplay" />
                                <img src={AStore} alt="googleplay" />
                            </div>
                        </div>
                    </div>
                    <div className="phoneContainer">
                        <img alt="phone" src={Phone} />
                    </div>
                </div>
                <Separator separator={Wave} />
            </div>
        );
    }
}