import { FETCH_CONTENT_SITE, FETCH_CONTENT_SITE_PENDING, VOTE_NO, VOTE_YES } from './actions';

export const contentInitialState = {
    isPending: false,
    site: null
};

export const contentReducer = (state = contentInitialState, action) => {

    switch(action.type) {
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

        default:
            return state;
    }
};

export const votesInitialState = {
};

export const votesReducer = (state = votesInitialState, action) => {
    switch (action.type) {
        case VOTE_YES:
            return state;

        case VOTE_NO:
            return state;

        default:
            return state;
    }
};