import {repositoriesSearchDeserializer} from "./repositoriesSearch.serializer";
import {getSearchRequestQuery} from "./repositoriesSearch.helper";
import {fetchData} from "../common/helpers/network.helper";

export const REPOSITORIES_SEARCH_STARTED_TYPE = 'REPOSITORIES_SEARCH_STARTED';
export const REPOSITORIES_SEARCH_DONE_TYPE = 'REPOSITORIES_SEARCH_DONE';
export const REPOSITORIES_SEARCH_FAILED_TYPE = 'REPOSITORIES_SEARCH_FAILED';

const repositoriesSearchStarted = isNewSearch => ({
    type: REPOSITORIES_SEARCH_STARTED_TYPE,
    payload: {
        isNewSearch,
    },
});

const repositoriesSearchDone = result => ({
    type: REPOSITORIES_SEARCH_DONE_TYPE,
    payload: result,
});

const repositoriesSearchFailed = error => ({
    type: REPOSITORIES_SEARCH_FAILED_TYPE,
    payload: error,
});

export const repositoriesSearch = page => dispatch => {
    const isNewSearch = page === 1 || page === undefined;
    dispatch(repositoriesSearchStarted(isNewSearch));
    const apiUrl = `/search/repositories${getSearchRequestQuery(page)}`;
    return fetchData(apiUrl)
        .then(response => response.json())
        .then(repositoriesSearchDeserializer)
        .then(result => dispatch(repositoriesSearchDone(result)))
        .catch(error => dispatch(repositoriesSearchFailed(error)));
};