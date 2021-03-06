import './Header.css';
import React from 'react';
import { connect } from 'react-redux';

import { fetchToday, fetchCovid, fetchCovidPoland } from '../actions';

class Header extends React.Component {
    onFetchClick = () => {
        this.props.fetchToday();
        this.props.fetchCovid();
        this.props.fetchCovidPoland();
    };

    render() {
        return (
            <React.Fragment>
                <h2 className="ui center aligned icon header" style={{ marginTop: '5px'}} >
                <i className="chart line icon"></i>
                    ŻAKA MONITOR
                </h2>
                <div className="button-margins">
                    <button onClick={this.onFetchClick} className="ui teal button">Odśwież</button>
                </div>
            </React.Fragment>
        );
    };
}

export default connect(null, { fetchToday, fetchCovid, fetchCovidPoland })(Header);