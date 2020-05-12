import './chartsMenu.css';
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchName } from '../actions';
import { Link } from 'react-router-dom';

class ColorPicker extends React.Component {
    componentDidMount() {
        this.props.fetchName();
    }
    
    renderOptions = () => {
        let i = 0;
        const sensors = [this.props.sensorsNames.a.name, this.props.sensorsNames.b.name, "Garaż", "Na zewnątrz" ];
        return sensors.map(sensor => {
            i++;
            return <option value={i}>{sensor}</option>
        });
    };

    renderInput = ({ input, label }) => {
        if(this.props.sensorsNames.a) {
            console.log(this.props.sensorsNames.a.name);
            var sensor = this.props.sensorsNames.a.name;
        }
        return (
            <div className="field">
                <label id="label">{label}</label>
                <select>
                    {this.renderOptions()}
                </select>
            </div>
        )
    }

    render() {
        return (
            <div className="main-box">
                <h3>Wykresy:</h3>
                <form className="ui form">
                    <Field name="sensorName" component={this.renderInput} label="Wybierz czujnik" />
                    
                </form>
                <div className="ui buttons" id="save">
                    <Link to="/" className="ui button">Cancel</Link>
                    <div className="or"></div>
                    <Link to="/" className="ui positive button" onClick={this.onSaveClick}>Save</Link>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        sensorsNames: state.names
    }
} 

export default reduxForm({
    form: 'sensorsNames'
})(connect(mapStateToProps, { fetchName })(ColorPicker));