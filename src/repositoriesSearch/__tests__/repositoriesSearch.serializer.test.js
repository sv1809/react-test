import {repositoriesSearchDeserializer} from '../repositoriesSearch.serializer';
import {repositoryDeserializer} from '../../repository/repository.serializer';

jest.mock('../../repository/repository.serializer');

const repository = {
    name: 'repository name',
};
repositoryDeserializer.mockImplementation(() => repository);

describe('repositoriesSearch.serializer', () => {

    describe('repositoriesSearchDeserializer', () => {

        test('should set total and items from search response', () => {
            const total = 123;
            const serverResult = {
                total_count: total,
                items: [1, 2],
            };

            const expected = {
                total,
                repositories: [repository, repository],
            };

            const actual = repositoriesSearchDeserializer(serverResult);
            expect(actual).toEqual(expected);
        })

    });

});