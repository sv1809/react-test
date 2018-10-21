export const SET_SEARCH_FILTER_LICENSE = 'SET_SEARCH_FILTER_LICENSE';
export const SET_SEARCH_FILTER_REPOSITORY_NAME = 'SET_SEARCH_FILTER_REPOSITORY_NAME';

export const setSearchFilterLicense = license => ({
    type: SET_SEARCH_FILTER_LICENSE,
    payload: license,
});

export const setSearchFilterRepositoryName = name => ({
    type: SET_SEARCH_FILTER_REPOSITORY_NAME,
    payload: name,
});
