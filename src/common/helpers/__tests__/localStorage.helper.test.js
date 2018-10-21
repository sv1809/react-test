import {loadDataFromStorage, saveDataToStorage} from '../localStorage.helper';

describe('localStorage.helper', () => {

    const setItem = jest.fn();
    const getItem = jest.fn();
    Object.defineProperty(window, 'localStorage', {
        value: {
            setItem,
            getItem,
        },
        writable: true
    });

    const data = {
        a: 12,
        b: 'some data',
    };
    const stringData = '{"a":12,"b":"some data"}';

    getItem.mockReturnValue(stringData);

    const localStorageKey = 'key';

    describe('saveDataToStorage', () => {

        test('should call localStorage.setItem with stringified data', () => {
            saveDataToStorage(localStorageKey, data);
            expect(setItem).toBeCalledWith(localStorageKey, stringData);
        });

    });

    describe('loadDataFromStorage', () => {

        test('should return parsed data from local storage', () => {
            const actual = loadDataFromStorage(localStorageKey);
            expect(getItem).toBeCalledWith(localStorageKey);
            expect(actual).toEqual(data);
        });

    });

});