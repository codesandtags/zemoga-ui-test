import React from 'react';
import './Hero.scss';

const Hero = ({ content }) => {
    const heroBackground = {
        backgroundImage: `url("${content.currentCandidate.imageUrl}")`
    };

    return (
        <div className="hero" style={heroBackground}>
            <div className="inner-container hero__inner-container">
                <div className="hero__card">
                    <div className="hero__blur"></div>
                    <div className="hero__card-content candidate">
                        <div className="candidate__title">What's your opinion on</div>
                        <div className="candidate__subtitle">{content.currentCandidate.name}?</div>
                        <div className="candidate__excerpt">{content.currentCandidate.excerpt}</div>
                        <div className="candidate__more-information">{content.currentCandidate.moreInformationText}</div>
                        <div className="candidate__verdict">{content.currentCandidate.verdictText}</div>
                    </div>
                    <div className="hero__card-actions">
                        <div className="thumbs thumbs--up">
                            <span className="fas fa-thumbs-up"></span>
                        </div>
                        <div className="thumbs thumbs--down">
                            <span className="fas fa-thumbs-down"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero__campaign-time">
                <div className="hero__campaign-left">CLOSING IN</div>
                <div className="hero__campaign-right">
                    <span className="hero__campaign-days">22</span>
                    days
                </div>
            </div>
        </div>
    )
}

export default Hero;