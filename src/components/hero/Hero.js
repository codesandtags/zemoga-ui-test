import React from 'react';
import './Hero.scss';

const Hero = ({content}) => {
    debugger;
    
    return (
        <div className="hero">
            <img src={content.currentCandidate.imageUrl} alt=""/>
        </div>
    )
}

export default Hero;