import React from 'react';
import './VotingSection.scss';
import VotingCard from '../voting-card/VotingCard';

const VotingSection = ({ content }) => {
    const renderVoteCards = () => {
        return content.candidateList.map((candidate) => {
            return (
                <VotingCard candidate={candidate} />
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