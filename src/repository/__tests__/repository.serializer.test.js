import {repositoryDeserializer} from '../repository.serializer';

describe('repository.serializer', () => {

    describe('repositoryDeserializer', () => {

        test('should set name, url and description from server item', () => {
            const name = 'repository name';
            const url = 'repository url';
            const description = 'repository description';

            const serverRepositry = {
                full_name: name,
                html_url: url,
                description,
            };

            const expected = {
                name,
                url,
                description,
            };

            const actual = repositoryDeserializer(serverRepositry);
            expect(actual).toEqual(expected);
        });

    });

});