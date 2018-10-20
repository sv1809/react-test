import React from 'react';
import {licenseTypes} from './searchFilter.helper';
import connect from 'react-redux/es/connect/connect';
import {setSearchFIlterLicense} from './searchFilter.actions';
import PropTypes from 'prop-types';

class SearchFilterComponent extends React.Component {

    static propTypes = {
        selectedLicense: PropTypes.string,
        changeLicense: PropTypes.func.isRequired,
        onSearchButtonClick: PropTypes.func.isRequired,
    };

    render() {
        const {license, onSearchButtonClick} = this.props;

        return (
            <div className="container-fluid p-3">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">License</label>
                    </div>
                    <select className="custom-select" value={license} onChange={this.onLicenseChange}>
                        {SearchFilterComponent.renderOptions()}
                    </select>
                    <div className="input-group-append">
                        <button
                            className="btn btn-success"
                            onClick={onSearchButtonClick}
                        >
                            Search
                        </button>
                    </div>
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
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        selectedLicense: state.repositoriesSearchFilter.license,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeLicense: license => {
            dispatch(setSearchFIlterLicense(license))
        }
    }
};

export const SearchFilter = connect(mapStateToProps, mapDispatchToProps)(SearchFilterComponent);