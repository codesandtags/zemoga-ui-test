// Action Types
import { siteSections } from '../assets/content/site-model';

export const FETCH_CONTENT_SITE_PENDING = 'FETCH_CONTENT_SITE_PENDING';
export const FETCH_CONTENT_SITE = 'FETCH_CONTENT_SITE';
export const VOTE_YES = 'VOTE_YES';
export const VOTE_NO = 'VOTE_NO';

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
    }, 1000);
};

export const voteYes = () => {

    return {
        type: VOTE_YES,
        payload: {}
    }
}

export const voteNo = () => {

    return {
        type: VOTE_NO,
        payload: {}
    }
}