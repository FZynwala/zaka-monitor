import './SideMenu.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { hideMenu } from '../actions';


class SideMenu extends React.Component {

    onDismiss = () => {
        this.props.hideMenu();
    }

    onMenuItemClick = () => {
        this.props.hideMenu();
    }
   
    render() {
        return (
            <React.Fragment>
                <div onClick={this.onDismiss} className={`backdrop ${this.props.display}`}> </div>
                <div className={`menu ${this.props.display}`}>
                    <div className="ui vertical buttons" id="btn-m">
                        <Link to="/colors" onClick={this.onMenuItemClick} className="ui button" id="btn-m">Kolor</Link>
                        <Link to="/charts" onClick={this.onMenuItemClick} className="ui button" id="btn-m">Wykresy</Link>
                        <button className="ui button" id="btn-m">Events</button>
                        <button className="ui button" id="btn-m">Photos</button>
                    </div>
                </div>
            </React.Fragment>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        display: state.menu.menu
    }
};

export default connect(mapStateToProps, {hideMenu})(SideMenu);
