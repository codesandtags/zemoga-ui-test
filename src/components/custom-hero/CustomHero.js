import React, { useState } from 'react';
import './CustomHero.scss';

const CustomHero = ({ imageUrl }) => {
    const customHeroBackground = {
        backgroundImage: `url("${imageUrl}")`
    };

    return (
        <div className="CustomHero" style={customHeroBackground}>
            <div className="inner-container hero__inner-container">

            </div>
        </div>
    )
}

export default CustomHero;