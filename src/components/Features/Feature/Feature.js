import React from 'react';
import "./Feature.css";
import "./Feature_Responsive.css";

export default class Feature extends React.Component
{
    constructor(props)
    {
        super(props);


        this.state = {
            width: window.innerWidth
        }
    }
    render()
    {
        return (
            <div ref="feature" direction={this.state.width > 1000 ? this.props.direction : "right"} className="feature">
                <div className="featureInfoContainer">
                    <h2 className="featureTitle">
                        {this.props.title}
                    </h2>
                    <h3 className="featureDescription secondaryText">
                        {this.props.description}
                    </h3>
                </div>
                <div ref="featureIllustration" className="featureIllustration">
                    <img src={this.props.illustration} alt="illustration" />
                </div>
            </div>
        );
    }
}