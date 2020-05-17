import React, { useState } from 'react';
import './Hero.scss';
import { voteNoCurrentCandidate, voteYesCurrentCandidate } from '../../store/actions';
import { useDispatch } from 'react-redux';

const Hero = ({ content }) => {
    const dispatch = useDispatch();
    const heroBackground = {
        backgroundImage: `url("${content.currentCandidate.imageUrl}")`
    };
    const renderVerdict = () => {
        if (content.currentCandidate.voted) {
            return (<div className="candidate__verdict">Thanks for voting!</div>)
        }

        return (
            <div className="candidate__verdict">{content.currentCandidate.verdictText}</div>
        );
    };
    const onVote = (selectedThumb) => {
        if (selectedThumb === 'like') {
            dispatch(voteYesCurrentCandidate());
        } else if (selectedThumb === 'dislike') {
            dispatch(voteNoCurrentCandidate());
        }
    }

    return (
        <div className="hero" style={heroBackground}>
            <div className="inner-container hero__inner-container">
                <div className="hero__card">
                    <div className="hero__blur"></div>
                    <div className="hero__card-content candidate">
                        <div className="candidate__title">What's your opinion on</div>
                        <div className="candidate__subtitle">{content.currentCandidate.name}?</div>
                        <div className="candidate__excerpt">{content.currentCandidate.excerpt}</div>
                        <div
                            className="candidate__more-information">{content.currentCandidate.moreInformationText}</div>
                        {renderVerdict()}
                    </div>
                    <div className="hero__card-actions">
                        <div className="thumbs thumbs--up" onClick={() => onVote('like')}>
                            <span className="fas fa-thumbs-up"></span>
                        </div>
                        <div className="thumbs thumbs--down" onClick={() => onVote('dislike')}>
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