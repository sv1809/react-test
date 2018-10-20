export function repositoryDeserializer(serverRepository) {
    const {full_name, html_url, description} = serverRepository;
    return {
        name: full_name,
        url: html_url,
        description: description,
    };
}