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
            </div>
        </div>
    );
}