import {
    REPOSITORIES_SEARCH_DONE_TYPE,
    REPOSITORIES_SEARCH_FAILED_TYPE,
    REPOSITORIES_SEARCH_STARTED_TYPE
} from './repositoriesSearch.actions';

export const repositoriesSearchInitialState = {
    isLoading: false,
    total: 0,
    repositories: [],
    error: undefined,
};

export function repositoriesSearchResultsReducer(state = repositoriesSearchInitialState, action) {
    const {payload} = action;
    switch (action.type) {
        case REPOSITORIES_SEARCH_STARTED_TYPE:
            if (payload.isNewSearch) {
                return {
                    repositories: [],
                    isLoading: true,
                    total: 0,
                    error: undefined,
                };
            } else {
                return {
                    ...state,
                    isLoading: true,
                    error: undefined
                };
            }
        case REPOSITORIES_SEARCH_FAILED_TYPE:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        case REPOSITORIES_SEARCH_DONE_TYPE:
            return {
                isLoading: false,
                total: payload.total,
                repositories: [...state.repositories, ...payload.repositories],
                error: undefined,
            };
        default:
            return state;
    }
}