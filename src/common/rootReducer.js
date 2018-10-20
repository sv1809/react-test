import {repositoriesSearchResultsReducer} from "../repositoriesSearch/repositoriesSearch.reducer";
import {combineReducers} from "redux";
import {searchFilterReducer} from '../repositoriesSearch/searchFilter/searchFilter.reducer';


export const rootReducer = combineReducers({
    repositoriesSearchResults: repositoriesSearchResultsReducer,
    repositoriesSearchFilter: searchFilterReducer,
});