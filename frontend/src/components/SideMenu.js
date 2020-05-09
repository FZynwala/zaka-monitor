import './SideMenu.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { hideMenu } from '../actions';


class SideMenu extends React.Component {

    onDismiss = () => {
        this.props.hideMenu();
    }
   
    render() {
        return (
            <React.Fragment>
                <div onClick={this.onDismiss} className={`backdrop ${this.props.display}`}> </div>
                <div className={`menu ${this.props.display}`}></div>

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
