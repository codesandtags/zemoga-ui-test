import React, { useState } from 'react';
import './VotingCard.scss';
import { useDispatch } from 'react-redux';
import { voteAgain, voteNo, voteYes } from '../../store/actions';

const VotingCard = ({ candidate }) => {
    const dispatch = useDispatch();
    const totalVotes = candidate.likes + candidate.dislikes;
    const percentageLikes = `${(candidate.likes / totalVotes * 100).toFixed(0)}%`;
    const percentageDislikes = `${(candidate.dislikes / totalVotes * 100).toFixed(0)}%`;
    const renderTextGivenVoteState = () => {
        if (candidate.voted) {
            return (
                <div className="candidate-card__excerpt">Thanks for voting!</div>
            );
        }

        return (
            <div className="candidate-card__excerpt">{candidate.excerpt}</div>
        );
    };
    const renderVoteButtons = () => {
        if (candidate.voted) {
            return (
                <div className="candidate-card__button" onClick={onVoteAgain}>Vote again</div>
            );
        }

        const thumbClassNames = {
          like: `thumbs-button thumbs-button--up ${selectedThumb === 'like' ? 'thumbs-button--selected': ''}`,
          dislike: `thumbs-button thumbs-button--down ${selectedThumb === 'dislike' ? 'thumbs-button--selected': ''}`,
        };
        return (
            <>
                <div className={thumbClassNames.like}
                     onClick={() => onSelectThumb('like')}>
                    <span className="fas fa-thumbs-up"></span>
                </div>
                <div className={thumbClassNames.dislike}
                     onClick={() => onSelectThumb('dislike')}>
                    <span className="fas fa-thumbs-down"></span>
                </div>
                <div className="candidate-card__button" onClick={onVote}>Vote now</div>
            </>
        );
    }
    const onVoteAgain = () => {
        dispatch(voteAgain(candidate.id));
    };
    const [selectedThumb, setSelectedThumb] = useState('');
    const onSelectThumb = (thumb) => {
        setSelectedThumb(thumb);
    };
    const onVote = () => {
        if (selectedThumb === 'like') {
            dispatch(voteYes(candidate.id));
        } else if (selectedThumb === 'dislike') {
            dispatch(voteNo(candidate.id));
        }
    }

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
                {renderTextGivenVoteState()}
                <div className="candidate-card__actions">
                    {renderVoteButtons()}
                </div>
            </div>
            <div className="candidate-results">
                <div className="candidate-results__like" style={{ width: percentageLikes }}>
                    <div className="candidate-results__like-value">
                        <span className="fas fa-thumbs-up"></span>
                        <span className="candidate-results__value">{percentageLikes}</span>
                    </div>
                </div>
                <div style={{ width: percentageDislikes }} className="candidate-results__dislike">
                    <div className="candidate-results__dislike-value">
                        <span className="candidate-results__value">{percentageDislikes}</span>
                        <span className="fas fa-thumbs-down"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VotingCard;