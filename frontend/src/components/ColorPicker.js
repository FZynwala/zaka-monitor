import './ColorPicker.css';
import React from 'react';
import { connect } from 'react-redux';
import { changeColor } from '../actions';
import { Link } from 'react-router-dom';

class ColorPicker extends React.Component {
    color = "black-pearl";

    onItemClick = (e) => {
        this.color = e.target.className.slice(5);
        console.log(this.color);
    }

    onSaveClick = () => {
        this.props.changeColor(this.color);
    }

    render() {
        return (
            <div className="main-box">
                <h3>Wybierz główny kolor:</h3>
                <div className="color-picker">
                    <div className="color black-pearl" onClick={this.onItemClick}></div>
                    <div className="color chrome-yellow" onClick={this.onItemClick}></div>
                    <div className="color eye-of-newt" onClick={this.onItemClick}></div>
                    <div className="color palm-spring-splash"></div>
                    <div className="color devil-blue"></div>
                    <div className="color lucky-point"></div>
                    <div className="color magenta-purple"></div>
                    <div className="color ships-officer"></div>
                </div>
                <div class="ui buttons" id="save">
                    <Link to="/" class="ui button">Cancel</Link>
                    <div class="or"></div>
                    <Link to="/" class="ui positive button" onClick={this.onSaveClick}>Save</Link>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        color: state.color.color
    }
}

export default connect(mapStateToProps, { changeColor })(ColorPicker);