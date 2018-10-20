import {SET_SEARCH_FILTER_LICENSE} from './searchFilter.actions';

export const searchFilterInitialState = {
    license: undefined,
};

export function searchFilterReducer(state = searchFilterInitialState, action) {
    switch (action.type) {
        case SET_SEARCH_FILTER_LICENSE:
            return {
                ...state,
                license: action.payload,
            };
        default:
            return state;
    }
}