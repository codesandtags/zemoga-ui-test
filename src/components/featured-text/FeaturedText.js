import React from 'react';
import './FeaturedText.scss';

const FeaturedText = ({content}) => {
    return (
        <div className="featured-text">
            <div className="featured-text__left">
                <div className="featured-text__title">{content.title}</div>
                <div className="featured-text__subtitle">{content.subtitle}</div>
            </div>
            <div className="featured-text__right">
                {content.text}
            </div>
            <div className="featured-text__close-button">
                X
            </div>
        </div>
    )
}

export default FeaturedText;