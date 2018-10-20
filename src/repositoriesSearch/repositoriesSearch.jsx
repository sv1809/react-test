import * as React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {repositoriesSearch} from "./repositoriesSearch.actions";
import {ITEMS_PER_PAGE} from "./repositoriesSearch.helper";
import {Loader} from "../common/components/loader";
import {Error} from "../common/components/error";
import Waypoint from 'react-waypoint';
import {SearchResults} from "./components/repositoriesSearchResults/repositoriesSearchResults";
import {SearchFilter} from './searchFilter/searchFilter';

class RepositoriesSearchComponent extends React.Component {

    static propTypes = {
        search: PropTypes.func.isRequired,
        itemsCount: PropTypes.number.isRequired,
        isLoading: PropTypes.bool.isRequired,
        total: PropTypes.number.isRequired,
    };

    componentDidMount() {
        this.props.search(1);
    }

    render() {
        const {isLoading, error} = this.props;
        return (
            <div>
                <SearchFilter
                    onSearchButtonClick={this.onSearchButtonClick}
                />
                <SearchResults/>
                {
                    this.shouldRenderWaypoint() && <Waypoint
                        onEnter={this.loadMore}
                    />
                }
                {
                    isLoading && <Loader/>
                }
                {
                    error && <Error/>
                }
            </div>
        );
    }

    shouldRenderWaypoint() {
        const {itemsCount, isLoading, error} = this.props;
        return itemsCount > 0 && !isLoading && !error;
    }

    loadMore = () => {
        const {itemsCount, total, search, error} = this.props;
        if (itemsCount >= total || error) {
            return;
        }
        const page = Math.ceil(itemsCount / ITEMS_PER_PAGE) + 1;
        search(page);
    };

    onSearchButtonClick = () => {
        this.props.search(1);
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        itemsCount: state.repositoriesSearchResults.repositories.length,
        isLoading: state.repositoriesSearchResults.isLoading,
        total: state.repositoriesSearchResults.total,
        error: state.repositoriesSearchResults.error,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        search: page => {
            dispatch(repositoriesSearch(page))
        }
    }
};

export const RepositoriesSearch = connect(mapStateToProps, mapDispatchToProps)(RepositoriesSearchComponent);