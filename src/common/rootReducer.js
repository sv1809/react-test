import {repositoriesSearchResultsReducer} from "../repositoriesSearch/repositoriesSearch.reducer";
import {combineReducers} from "redux";


export const rootReducer = combineReducers({
    repositoriesSearchResults: repositoriesSearchResultsReducer,
});