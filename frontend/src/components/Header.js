import './Header.css';
import React from 'react';
import { connect } from 'react-redux';

import { fetchToday, fetchCovid, showMenu } from '../actions';
import SideMenu from './SideMenu';

class Header extends React.Component {
    display = false;

    onFetchClick = () => {
        this.props.fetchToday();
        //this.props.fetchCovid();
        this.props.fetchCovidPoland();
    };

    onMenuClick = () => {
        this.props.showMenu();
        console.log(this.display === true);
    }

    // prepareDispToProps = () => {
    //     return this.display === true ? 'show' : 'hide';
    // }

    render() {
        console.log(this.display === true);
        return (
            <React.Fragment>
                <button onClick={this.onMenuClick} className="ui icon button menu-btn" id="btn">
                    <i class="big align justify icon"></i>
                </button>
                <SideMenu />
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
/*
mapStateToProps = (state) => {
    return {
        m
    }
}*/

export default connect(null, { fetchToday, fetchCovid, showMenu })(Header);