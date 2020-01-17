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
                        <a className="regularText nodecoration" href="http://google.fr">Accueil</a>
                        <a className="regularText nodecoration" href="http://google.fr">A propos</a>
                        <a className="regularText nodecoration" href="http://google.fr">Prix</a>
                    </div>
                </div>
            </div>
        );
    }
}