import {isResponseError} from '../network.helper';

describe('network.helper', () => {

    describe('isResponseError', () => {

        test('should return true if responce.status === 400', () => {
            const response = {
                status: 400,
            };
            const actual = isResponseError(response);
            expect(actual).toBe(true);
        });

        test('should return true if responce.status === 500', () => {
            const response = {
                status: 500,
            };
            const actual = isResponseError(response);
            expect(actual).toBe(true);
        });

        test('should return true if responce.status === 404', () => {
            const response = {
                status: 404,
            };
            const actual = isResponseError(response);
            expect(actual).toBe(true);
        });

        test('should return false if responce.status === 200', () => {
            const response = {
                status: 200,
            };
            const actual = isResponseError(response);
            expect(actual).toBe(false);
        });

    });

});