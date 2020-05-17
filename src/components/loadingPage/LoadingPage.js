import React from 'react';
import './LoadingPage.scss';

const LoadingPage = () => {
    return (
        <div className="loading-page">
            <span
                data-text="LOADING..."
                className="loading-page__text"
            >
                LOADING...
            </span>
        </div>
    )
}

export default LoadingPage;