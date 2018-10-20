import {wrongAction} from "../../common/helpers/wrongAction.helper";
import {repositoriesSearchInitialState, repositoriesSearchResultsReducer} from "../repositoriesSearch.reducer";
import {
    REPOSITORIES_SEARCH_DONE_TYPE,
    REPOSITORIES_SEARCH_FAILED_TYPE,
    REPOSITORIES_SEARCH_STARTED_TYPE
} from "../repositoriesSearch.actions";

describe('repositoriesSearch.reducer', () => {

    test('should return initial state if passed state is undefined', () => {
        const actual = repositoriesSearchResultsReducer(undefined, wrongAction);
        expect(actual).toBe(repositoriesSearchInitialState);
    });

    test('should not change state if passed action is wrong', () => {
        const state = {
            isLoading: true,
            repositories: [1, 2, 3],
            error: 'error',
        };
        const actual = repositoriesSearchResultsReducer(state, wrongAction);
        expect(actual).toBe(state);
    });

    test('should set isLoading to true and error to undefined and reset repositories and total when ' +
        'action with type REPOSITORIES_SEARCH_STARTED_TYPE and isNewSearch in the action payload equals to true was dispatched', () => {
        const action = {
            type: REPOSITORIES_SEARCH_STARTED_TYPE,
            payload: {
                isNewSearch: true,
            },
        };
        const startState = {
            isLoading: false,
            total: 23,
            repositories: [12, 2, 3],
            error: 'some error',
        };
        const expected = {
            isLoading: true,
            total: 0,
            repositories: [],
            error: undefined,
        };
        const actual = repositoriesSearchResultsReducer(startState, action);
        expect(actual).toEqual(expected);
    });

    test('should set isLoading to true and error to undefined when ' +
        'action with type REPOSITORIES_SEARCH_STARTED_TYPE and isNewSearch in the action payload equals to false was dispatched', () => {
        const action = {
            type: REPOSITORIES_SEARCH_STARTED_TYPE,
            payload: {
                isNewSearch: false,
            },
        };
        const repositories = [1, 2, 3];
        const total = 54;
        const startState = {
            isLoading: false,
            total,
            repositories,
            error: 'some error',
        };
        const expected = {
            isLoading: true,
            total,
            repositories,
            error: undefined,
        };
        const actual = repositoriesSearchResultsReducer(startState, action);
        expect(actual).toEqual(expected);
    });


    test('should set isLoading to false and error when action with type REPOSITORIES_SEARCH_FAILED_TYPE was dispatched', () => {
        const error = 'some error';
        const action = {
            type: REPOSITORIES_SEARCH_FAILED_TYPE,
            payload: error,
        };
        const startState = {
            isLoading: true,
            total: 32,
            repositories: [1, 2, 3],
            error: undefined,
        };
        const expected = {
            isLoading: false,
            total: 32,
            repositories: [1, 2, 3],
            error,
        };
        const actual = repositoriesSearchResultsReducer(startState, action);
        expect(actual).toEqual(expected);
    });

    test('should concat repositories in state with search results from the action payload, set total to total from the action payload, ' +
        'isLoading to false and error to undefined when action with type REPOSITORIES_SEARCH_DONE_TYPE was dispatched', () => {
        const repositories = [1, 2, 3];
        const total = 123;
        const action = {
            type: REPOSITORIES_SEARCH_DONE_TYPE,
            payload: {
                repositories,
                total,
            }
        };
        const startState = {
            isLoading: true,
            total: 32,
            repositories: [5, 6, 7],
            error: 'some error',
        };
        const expected = {
            isLoading: false,
            total,
            repositories: [...startState.repositories, ...repositories],
            error: undefined,
        };
        const actual = repositoriesSearchResultsReducer(startState, action);
        expect(actual).toEqual(expected);
    });

});