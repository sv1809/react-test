import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const SearchResultsComponent = props => {

    const {items} = props;

    const results = items.map(item => (
        <li
            key={item.name}
            className="list-group-item"
        >
            <div>
                {/*eslint-disable-next-line*/}
                <a href={item.url} target="_blank">
                    <h4>
                        {item.name}
                    </h4>
                </a>
                <div>{item.description}</div>
            </div>
        </li>
    ));

    return (
        <ul className="list-group list-group-flush">
            {results}
        </ul>
    )

};

SearchResultsComponent.proppTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
        description: PropTypes.string,
    })),
};

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.repositoriesSearchResults.repositories,
    };
};

export const SearchResults = connect(mapStateToProps)(SearchResultsComponent);