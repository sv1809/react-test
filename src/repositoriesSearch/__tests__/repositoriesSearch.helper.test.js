import sinon from 'sinon';
import {getDateForRequest, getSearchRequestQuery} from '../repositoriesSearch.helper';

describe('repositories.helper', () => {

    const now = new Date(1540028351574);
    let clock;

    beforeEach(() => {
        clock = sinon.useFakeTimers(now.getTime());
    });

    afterEach(() => {
        clock.restore();
    });

    describe('getDateForRequest', () => {

        test('should return the same date for the previous month', () => {
            const expected = '2018-09-20';
            const actual = getDateForRequest();
            expect(actual).toBe(expected);
        });

    });

    describe('getSearchRequestQuery', () => {

        test('should return "?sort=stars&page=${page}&per_page=10&q=created:>2018-09-20"', () => {
            const page = 4;
            const expected = `?sort=stars&page=${page}&per_page=100&q=created:>2018-09-20`;
            const actual = getSearchRequestQuery(page, {});
            expect(actual).toBe(expected);
        });

        test('should add license to query string if it is not undefined', () => {
            const page = 4;
            const license = 'licenseType';

            const expected = `?sort=stars&page=${page}&per_page=100&q=created:>2018-09-20 license:${license}`;

            const actual = getSearchRequestQuery(page, {license});
            expect(actual).toBe(expected);
        });

    });

});