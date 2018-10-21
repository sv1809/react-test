import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './rootReducer';
import {loadDataFromStorage, saveDataToStorage} from './helpers/localStorage.helper';

const localStorageKey = 'state';

export const store = createStore(
    rootReducer,
    getPreloadedState(),
    applyMiddleware(
        thunk,
    )
);

store.subscribe(() => saveDataToStorage(localStorageKey, store.getState()));

function getPreloadedState() {
    const state = loadDataFromStorage(localStorageKey);
    if (state === undefined || state === null) {
        return {};
    }
    return state;
}