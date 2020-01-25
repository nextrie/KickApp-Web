import React from 'react'
import "./Get_Started.css"
import "./Get_Started_Responsive.css"

//Images
import StandOut from "../../assets/imgs/standout.svg";

export default function Get_Started()
{
    return (
        <>
            <div className="getStartedContainer">
                <div className="getStartedActionContainer">
                    <h1 className="">Rejoignez-nous !</h1>
                    <h3 className="secondaryText light">
                        N'attendez plus et téléchargez KICK pour rejoindre une communauté de plus de 500.000 fans de rap et construisez votre réseau !
                    </h3>
                    <a href="https://google.fr" className="downloadButtonContainer nodecoration">
                        <div className="downloadButton coloredText bold">
                            Télécharger
                        </div>
                    </a>
                </div>
                <div className="getStartedIllustration">
                    <img src={StandOut} alt="getStartedIllustration" />
                </div>
            </div>
        </>
    );
}