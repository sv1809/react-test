import React from 'react';
import {licenseTypes} from './searchFilter.helper';
import connect from 'react-redux/es/connect/connect';
import {setSearchFilterLicense, setSearchFilterRepositoryName} from './searchFilter.actions';
import PropTypes from 'prop-types';

class SearchFilterComponent extends React.Component {

    static propTypes = {
        selectedLicense: PropTypes.string,
        repositoryName: PropTypes.string,
        changeLicense: PropTypes.func.isRequired,
        changeRepositoryName: PropTypes.func.isRequired,
        onSearchButtonClick: PropTypes.func.isRequired,
    };

    render() {
        const {selectedLicense, onSearchButtonClick, repositoryName} = this.props;

        return (
            <div className="container-fluid p-3">
                <div className="input-group mb-1">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">License</label>
                    </div>
                    <select
                        className="custom-select"
                        value={selectedLicense}
                        onChange={this.onLicenseChange}
                    >
                        {SearchFilterComponent.renderOptions()}
                    </select>
                </div>
                <div className="input-group mb-1">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Repository name"
                        value={repositoryName}
                        onChange={this.onRepositoryNameChange}
                    />
                </div>
                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-success"
                        onClick={onSearchButtonClick}
                    >
                        Search
                    </button>
                </div>
            </div>
        );
    }

    static renderOptions() {
        return licenseTypes.map(licenseType => {
            return (
                <option
                    value={licenseType.keyword}
                    key={licenseType.license}
                >
                    {licenseType.license}
                </option>
            )
        });
    }

    onLicenseChange = event => {
        this.props.changeLicense(event.target.value);
    };

    onRepositoryNameChange = event => {
        this.props.changeRepositoryName(event.target.value);
    };

}

const mapStateToProps = (state, ownProps) => {
    return {
        selectedLicense: state.repositoriesSearchFilter.license,
        repositoryName: state.repositoriesSearchFilter.repositoryName,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeLicense: license => {
            dispatch(setSearchFilterLicense(license))
        },
        changeRepositoryName: repositoryName => {
            dispatch(setSearchFilterRepositoryName(repositoryName))
        },
    }
};

export const SearchFilter = connect(mapStateToProps, mapDispatchToProps)(SearchFilterComponent);