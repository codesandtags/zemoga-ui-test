import {
    FETCH_CONTENT_SITE,
    FETCH_CONTENT_SITE_PENDING,
    VOTE_AGAIN,
    VOTE_NO, VOTE_NO_CURRENT_CANDIDATE,
    VOTE_YES, VOTE_YES_CURRENT_CANDIDATE
} from './actions';

export const contentInitialState = {
    isPending: false,
    site: null
};

export const contentReducer = (state = contentInitialState, action) => {

    switch (action.type) {
        case FETCH_CONTENT_SITE_PENDING:
            return {
                ...state,
                isPending: true
            };

        case FETCH_CONTENT_SITE:
            return {
                site: {
                    ...action.payload
                },
                isPending: false
            };

        case VOTE_YES:
            return {
                ...state,
                site: {
                    ...state.site,
                    votes: {
                        candidateList: [
                            ...getUpdatedCandidateListWithLike(
                                state.site.votes.candidateList,
                                action.payload.candidateId
                            )
                        ]
                    }
                }
            };

        case VOTE_NO:
            return {
                ...state,
                site: {
                    ...state.site,
                    votes: {
                        candidateList: [
                            ...getUpdatedCandidateListWithDislike(
                                state.site.votes.candidateList,
                                action.payload.candidateId
                            )
                        ]
                    }
                }
            };

        case VOTE_AGAIN:
            return {
                ...state,
                site: {
                    ...state.site,
                    votes: {
                        candidateList: [
                            ...getUpdatedCandidateListWithVoteAgain(
                                state.site.votes.candidateList,
                                action.payload.candidateId
                            )
                        ]
                    }
                }
            };

        case VOTE_YES_CURRENT_CANDIDATE:
            return {
                ...state,
                site: {
                    ...state.site,
                    hero: {
                        currentCandidate: {
                            ...getUpdatedCurrentCandidateWithLike(state.site.hero.currentCandidate)
                        }
                    }
                }
            };

        case VOTE_NO_CURRENT_CANDIDATE:
            return {
                ...state,
                site: {
                    ...state.site,
                    hero: {
                        currentCandidate: {
                            ...getUpdatedCurrentCandidateWithDislike(state.site.hero.currentCandidate)
                        }
                    }
                }
            };

        default:
            return state;
    }
};

const getUpdatedCandidateListWithVoteAgain = (candidates, candidateId) => {
    const candidate = candidates.findIndex(candidate => candidate.id === candidateId);
    candidates[candidate].voted = false;

    return candidates;
};

const getUpdatedCandidateListWithLike = (candidates, candidateId) => {
    const candidate = candidates.findIndex(candidate => candidate.id === candidateId);
    candidates[candidate].likes++;
    candidates[candidate].voted = true;

    return candidates;
};

const getUpdatedCandidateListWithDislike = (candidates, candidateId) => {
    const candidate = candidates.findIndex(candidate => candidate.id === candidateId);
    candidates[candidate].dislikes++;
    candidates[candidate].voted = true;

    return candidates;
};

const getUpdatedCurrentCandidateWithLike = (candidate) => {
    candidate.likes++;
    candidate.voted = true;

    return candidate;
};

const getUpdatedCurrentCandidateWithDislike = (candidate) => {
    candidate.dislikes++;
    candidate.voted = true;

    return candidate;
};

export const votesReducer = (state = contentInitialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};