const apiUrl = 'https://api.github.com';

export function fetchData(url) {
    const endpointUrl = `${apiUrl}${url}`;
    return fetch(endpointUrl, {
        mode: 'cors',
    })
        .then(
            response => {
                if (isResponseError(response)) {
                    throw response.statusText;
                }
                return response;
            }
        );
}

export function isResponseError(response) {
    return response.status >= 400;
}