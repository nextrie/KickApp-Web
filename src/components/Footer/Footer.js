import React from 'react';
import "./Footer.css";
import "./Footer_Responsive.css";

//Images
import Logo from "../../assets/imgs/white_logo.png";
import FooterWave from "../../assets/imgs/footerwave.svg";

export default function Footer()
{
    return (
        <div className="footerContainer">
            <img src={FooterWave} alt="FooterWave" className="footerWave" />
            <div className="footerContent">
                <div className="logoContainer">
                    <img src={Logo} alt="logo" className="footerLogo" />
                </div>
                <div className="footerLinks">
                    <a href="#home" className="regularText nodecoration bold">Accueil</a>
                    <a href="#features" className="regularText nodecoration bold">A propos</a>
                    <a href="#feedback" className="regularText nodecoration bold">Avis</a>
                </div>
                <div className="footerCopyright">
                    <h4 className="regularText light">
                        En utilisant KICK, vous êtes en accord avec les conditions générales d'utilisation de l'application.
                    </h4>
                </div>
            </div>
        </div>
    );
}