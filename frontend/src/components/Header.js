import React from 'react';
import { trackPromise } from 'react-promise-tracker';
import { connect } from 'react-redux';
import { fetchCovid, fetchCovidPoland, fetchToday } from '../actions';
import './Header.css';

class Header extends React.Component {
    onFetchClick = () => {
        trackPromise(this.props.fetchToday());
    };

    render() {
        return (
            <div className="">
                <h2 className="ui center aligned icon header font" style={{ marginTop: '5px' }}>
                    <i className="chart line icon char-icon-color"></i>
                    ZAKA MONITOR
                </h2>
                <div className="button-margins">
                    <button onClick={this.onFetchClick} className="ui green button">
                        <i className="sync icon large u-mr"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(null, { fetchToday, fetchCovid, fetchCovidPoland })(Header);
