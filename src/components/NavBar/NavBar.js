import React from 'react'
import "./NavBar.css"

//Images
import Burger from "../../assets/menu.png"

const navElements = {
    links:
    [
        {
            link:
            {
                title: "Accueil",
                link: "#"
            }
        },

        {
            link:
            {
                title: "A propos",
                link: "#"
            }
        },

        {
            link:
            {
                title: "Contact",
                link: "#"
            }
        }
    ]
}

export default class NavBar extends React.Component
{

    constructor(props)
    {
        super(props);

        this.showResponsiveMenu = this.showResponsiveMenu.bind(this);
    }

    getAppLogo()
    {
        if (this.props.logo)
            return this.props.logo;
    }

    showResponsiveMenu()
    {
        var menu = this.refs.navMenu;
        var isMenuVisible = window.getComputedStyle(menu).right === "0px";
        
        if (!isMenuVisible)
            menu.style.right = "0px";
        else
            menu.style.right = "-405px";
    }

    render()
    {
        return (
            <>
                <div className="navBarContainer">
                    <a href="#">
                        <img className="appLogo" src={this.getAppLogo()} alt="logo"/>
                    </a>
                    <div className="navBarElementsContainer">
                        <div ref="navMenu" className="navElements">
                            {
                                navElements.links.map(element => 
                                {
                                    return (
                                        <a key={element.link.title} href={element.link.link}>
                                            {element.link.title}
                                        </a>
                                    );
                                })
                            }
                            <a href="http://app.kickapp.fr">
                                <div className="roundedGetStartedButton">
                                    Commencer
                                </div>
                            </a>
                        </div>
                        <div className="responsiveNavElement">
                            <a onClick={this.showResponsiveMenu}>
                                <img src={Burger} />
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

