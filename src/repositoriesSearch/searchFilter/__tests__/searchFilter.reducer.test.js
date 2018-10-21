import {SET_SEARCH_FILTER_LICENSE, SET_SEARCH_FILTER_REPOSITORY_NAME} from '../searchFilter.actions';
import {wrongAction} from '../../../common/helpers/wrongAction.helper';
import {searchFilterInitialState, searchFilterReducer} from '../searchFilter.reducer';

describe('searchFilter.reducer', () => {

    test('should return initial state if passed state is undefined', () => {
        const actual = searchFilterReducer(undefined, wrongAction);
        expect(actual).toBe(searchFilterInitialState);
    });

    test('should not change state if passed action is wrong', () => {
        const state = {
            isLoading: true,
            repositories: [1, 2, 3],
            error: 'error',
        };
        const actual = searchFilterReducer(state, wrongAction);
        expect(actual).toBe(state);
    });

    test('should set license from action when SET_SEARCH_FILTER_LICENSE was dispatched', () => {
        const license = 'license';

        const action = {
            type: SET_SEARCH_FILTER_LICENSE,
            payload: license,
        };

        const expected = {
            ...searchFilterInitialState,
            license,
        };

        const actual = searchFilterReducer(searchFilterInitialState, action);
        expect(actual).toEqual(expected);
    });

    test('should set repositoryName from action when SET_SEARCH_FILTER_REPOSITORY_NAME was dispatched', () => {
        const repositoryName = 'repository name';

        const action = {
            type: SET_SEARCH_FILTER_REPOSITORY_NAME,
            payload: repositoryName,
        };

        const expected = {
            ...searchFilterInitialState,
            repositoryName,
        };

        const actual = searchFilterReducer(searchFilterInitialState, action);
        expect(actual).toEqual(expected);
    })

});