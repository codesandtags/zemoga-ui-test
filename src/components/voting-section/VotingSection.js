import React from 'react';
import './VotingSection.scss';
import VotingCard from '../voting-card/VotingCard';

const VotingSection = ({ content }) => {
    const renderVoteCards = () => {
        return content.candidateList.map((candidate, index) => {
            return (
                <VotingCard candidate={candidate} key={`voting_card_${index}`} />
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