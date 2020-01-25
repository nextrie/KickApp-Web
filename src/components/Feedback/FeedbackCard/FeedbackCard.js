import React from 'react'
import "./FeedbackCard.css"

//Images
import Star from "../../../assets/imgs/star.png";
export default class FeedbackCard extends React.Component
{
    render()
    {
        return (
            <div className="feedBackCardContainer">
                <div className="feedBackInformations">
                    <img src={this.props.profilePicture} alt="pp" />
                    <div>
                        <h2 className="feedBackName">{this.props.name}</h2>
                        <h4 className="feedBackRole coloredText">{this.props.role}</h4>
                    </div>
                </div>
                <div className="feedBackComment">
                    <div className="feedBackStars">
                        <img className="note" src={Star} alt="star" />
                        <img className="note" src={Star} alt="star" />
                        <img className="note" src={Star} alt="star" />
                        <img className="note" src={Star} alt="star" />
                        <img className="note" src={Star} alt="star" />
                    </div>
                    <h4 className="feedBack secondaryText">
                        {this.props.comment}
                    </h4>
                </div>
            </div>
        );       
    }
}