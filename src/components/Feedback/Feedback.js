import React from 'react'
import "./Feedback.css"
import "./Feedback_Responsive.css"

//Components
import FeedbackCard from "./FeedbackCard/FeedbackCard.js"

//Images
import Person from "../../assets/imgs/person.png";

export default function Feedback()
{
    return (
        <div className="feedBackContainer">
            <h1 className="feedBackTitle regularText light">Ce qu'ils en pensent</h1>
            <div className="feedBackContent">
                <FeedbackCard 
                    name="Pierre Alfaye"
                    role="Rappeur Amateur"
                    note={4}
                    comment="J'ai pu me faire connaître et j'ai pu rencontrer des beatmakers et me faire remarquer par des producteurs."
                    profilePicture={Person}
                />
                <FeedbackCard 
                    name="Alex Huttler"
                    role="Fan de rap"
                    note={4}
                    comment="Grâce à KICK, j'ai pu rencontrer mon rappeur favoris et monter un featuring avec lui dans son prochain album."
                    profilePicture={Person}
                />
                <FeedbackCard 
                    name="Bryan Shaulk"
                    role="Rappeur Confirmé"
                    note={4}
                    comment="KICK m'a permis de rejoindre une communauté de fan de rap US. J'ai pu y faire de merveilleuses rencontres."
                    profilePicture={Person}
                />
            </div>
        </div>
    );
}