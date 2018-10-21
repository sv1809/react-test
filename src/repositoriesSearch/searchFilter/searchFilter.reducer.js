import {SET_SEARCH_FILTER_LICENSE, SET_SEARCH_FILTER_REPOSITORY_NAME} from './searchFilter.actions';

export const searchFilterInitialState = {
    license: undefined,
    repositoryName: undefined,
};

export function searchFilterReducer(state = searchFilterInitialState, action) {
    switch (action.type) {
        case SET_SEARCH_FILTER_LICENSE:
            return {
                ...state,
                license: action.payload,
            };
        case SET_SEARCH_FILTER_REPOSITORY_NAME:
            return {
                ...state,
                repositoryName: action.payload,
            };
        default:
            return state;
    }
}