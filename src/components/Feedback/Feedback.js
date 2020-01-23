import React from 'react'
import "./Feedback.css"

//Components
import FeedbackCard from "./FeedbackCard/FeedbackCard.js"

export default function Feedback()
{
    return (
        <div className="feedBackContainer">
            <h1 className="feedBackTitle regularText light">Ce qu'ils en pensent</h1>
            <div className="feedBackContent">
                <FeedbackCard 
                    name="Gustave Eiffel"
                    role="Rappeur Amateur"
                    note={4}
                    comment="J'aime beaucoup manger du poisson, c'est alors que je me suis dis que cette application était faîte pour moi. Depuis, je ne peux plus m'en séparer."
                />
                <FeedbackCard 
                    name="Louis XIV"
                    role="Fan de rap"
                    note={4}
                    comment="Grâce à KICK, j'ai pu rencontrer mon rappeur favoris et monter un featuring avec lui dans son prochain album."
                />
                <FeedbackCard 
                    name="Harry Potter"
                    role="Apprenti Sorcier"
                    note={4}
                    comment="Walking like i'm talking, walking, walking like i'm talking."
                />
            </div>
        </div>
    );
}