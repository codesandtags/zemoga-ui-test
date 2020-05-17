// Action Types
import { siteSections } from '../assets/content/site-model';

export const FETCH_CONTENT_SITE_PENDING = 'FETCH_CONTENT_SITE_PENDING';
export const FETCH_CONTENT_SITE = 'FETCH_CONTENT_SITE';
export const VOTE_YES = 'VOTE_YES';
export const VOTE_NO = 'VOTE_NO';
export const VOTE_AGAIN = 'VOTE_AGAIN';

// Action Functions
export const fetchContentSite = () => dispatch => {
    dispatch({
        type: FETCH_CONTENT_SITE_PENDING
    });

    // TODO: We can change this part using a URL and fetching the content from an API
    setTimeout(() => {
        dispatch( {
            type: FETCH_CONTENT_SITE,
            payload: {
                ...siteSections
            }
        });
    }, 1500);
};

export const voteYes = (candidateId) => {
    return {
        type: VOTE_YES,
        payload: {
            candidateId
        }
    }
}

export const voteNo = (candidateId) => {
    return {
        type: VOTE_NO,
        payload: {
            candidateId
        }
    }
}

export const voteAgain = (candidateId) => {
    return {
        type: VOTE_AGAIN,
        payload: {
            candidateId
        }
    }
}