import React from 'react';
import "./Features.css";
import "./Features_Responsive.css";

//Components
import Feature from "./Feature/Feature.js";

//Images
import Map from "../../assets/imgs/map.svg";
import Music from "../../assets/imgs/music.svg"
import Compose from "../../assets/imgs/compose.svg";

export default function Features()
{
    return (
        <div id="features" className="featuresContainer">
            <h1 className="featuresTitle">
                A propos de <span className="coloredText">KICK</span>
            </h1>
            <h3 className="featuresDesc secondaryText">
                KICK vous propose des <span className="coloredText">fonctionnalités exclusives</span> fournissant a tout rappeur tout les outils nécessaires pour se faire connaître.
            </h3>
            <div className="featuresContent">
                <Feature
                    direction="right"
                    title="Découvre de nouveaux rappeurs !"
                    description="Retrouvez tout les rappeurs à proximité de chez vous sur la KickMap et accédez à leurs derniers sons !"
                    illustration={Map}
                />
                <Feature
                    direction="left"
                    title="Fais toi connaître !"
                    description="Identifiez vous sur KICK en tant qu'artiste et mettez vos sons à disposition de tout les utilisateurs !"
                    illustration={Music}
                />
                <Feature
                    direction="right"
                    title="Rejoignez des groupes !"
                    description="KICK met en avant la possibilité de faire des featurings avec d'autres rappeurs qui vous ont surpris de par leur performance  !"
                    illustration={Compose}
                />
            </div>
        </div>
    );
}