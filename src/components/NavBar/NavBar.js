import React from 'react';
import "./NavBar.css";

import Logo from  "../../assets/imgs/white_logo.png"

export default class NavBar extends React.Component
{
    render()
    {
        return (
            <div className="navBarContainer">
                <div className="navBarContent">
                    <img src={Logo} alt="logo" className="logo" />
                    <div className="navLinks">
                        <a className="regularText nodecoration" href="#home">Accueil</a>
                        <a className="regularText nodecoration" href="#features">A propos</a>
                        <a className="regularText nodecoration" href="#feedback">Avis</a>
                        <a className="regularText rounded nodecoration" href="http://google.fr">Connexion</a>
                    </div>
                </div>
            </div>
        );
    }
}