import {repositoryDeserializer} from '../repository/repository.serializer';

export function repositoriesSearchDeserializer(serverSearchResult) {
    return {
        total: serverSearchResult.total_count,
        repositories: serverSearchResult.items.map(repositoryDeserializer),
    }
}