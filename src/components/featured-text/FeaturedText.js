import React, { useState } from 'react';
import './FeaturedText.scss';

const FeaturedText = ({content}) => {
    const [showFeaturedText, setShowFeaturedText] = useState(true);
    const onCloseFeaturedText = () => {
        setShowFeaturedText(false);
    }

    if (!showFeaturedText) return null;

    return (
        <section className="featured-text">
            <div className="featured-text__left">
                <div className="featured-text__title">{content.title}</div>
                <div className="featured-text__subtitle">{content.subtitle}</div>
            </div>
            <div className="featured-text__right">
                {content.text}
            </div>
            <div className="featured-text__close-button" onClick={onCloseFeaturedText}>
                X
            </div>
        </section>
    )
}

export default FeaturedText;