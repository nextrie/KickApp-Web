import React from 'react'
import "./FeedbackCard.css"

//Images
import Star from "../../../assets/imgs/star.png";
import Profile from "../../../assets/imgs/profile.png";
export default class FeedbackCard extends React.Component
{
    render()
    {
        return (
            <div className="feedBackCardContainer">
                <div className="feedBackInformations">
                    <img src={Profile} alt="pp" />
                    <div>
                        <h2 className="feedBackName">{this.props.name}</h2>
                        <h4 className="feedBackRole coloredText">{this.props.role}</h4>
                    </div>
                </div>
                <div className="feedBackComment">
                    <div className="feedBackStars">
                        <img className="note" src={Star} />
                        <img className="note" src={Star} />
                        <img className="note" src={Star} />
                        <img className="note" src={Star} />
                        <img className="note" src={Star} />
                    </div>
                    <h4 className="feedBack secondaryText">
                        {this.props.comment}
                    </h4>
                </div>
            </div>
        );       
    }
}