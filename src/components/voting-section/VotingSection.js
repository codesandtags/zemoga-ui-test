import React from 'react';
import './VotingSection.scss';

const VotingSection = ({ content }) => {
    const renderVoteCards = () => {
        return content.candidateList.map((candidate) => {

            return (
                <div className="candidate-card">
                    <figure className="candidate-card__picture">
                        <img src={candidate.imageUrl} alt="candidate"/>
                    </figure>
                    <div className="candidate-card__details">
                        <div className="candidate-card__blur"></div>
                        <div className="candidate-card__name">{candidate.name}</div>
                        <div className="candidate-card__timeline">
                            <span className="candidate-card__time">1 month ago </span>
                            <span className="candidate-card__category">in {candidate.publishedAt}</span>
                        </div>
                        <div className="candidate-card__excerpt">{candidate.excerpt}</div>
                        <div className="candidate-card__actions">
                            <div className="thumbs-button thumbs-button--up">
                                <span className="fas fa-thumbs-up"></span>
                            </div>
                            <div className="thumbs-button thumbs-button--down">
                                <span className="fas fa-thumbs-down"></span>
                            </div>
                            <div className="candidate-card__button">Vote now</div>
                        </div>
                    </div>
                    <div className="candidate-results">
                        <div className="candidate-results__like">
                            <span className="fas fa-thumbs-up"></span>
                            <span className="candidate-results__value">64%</span>
                        </div>
                        <div className="candidate-results__dislike">
                            <span className="candidate-results__value">36%</span>
                            <span className="fas fa-thumbs-down"></span>
                        </div>
                    </div>
                </div>
            );
        });
    }

    return (
        <div className="voting-section">
            <h2 className="voting-section__heading">{content.headerTitle}</h2>
            <div className="voting-section__cards">
                {renderVoteCards()}
            </div>
        </div>
    )
}

export default VotingSection;