import './SensorList.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchToday } from '../actions';
import Sensor from './Sensor';
import Card from './Card';

class SensorsList extends React.Component {
    componentDidMount() {
        this.props.fetchToday();
    };

    renderData = () => {
        if(this.props.sensor01) {
            const { sensor01, sensor02 } = this.props;
            
            const tempA = sensor01[sensor01.length-1];
            const tempB = sensor02[sensor02.length-1];
            const maxTemp01 = this.props.maxTemp.sensor01;
            const maxTemp02 = this.props.maxTemp.sensor02;
            const minTemp01 = this.props.minTemp.sensor01;
            const minTemp02 = this.props.minTemp.sensor02;
            console.log(maxTemp01);
            console.log(tempB);
            return { tempA, tempB, maxTemp01, maxTemp02, minTemp01, minTemp02 }
        } 
        return 'Loading'
    };

    renderSensor = () => {
        this.props.sensor01.map(data => {
            return (
                <Sensor data={this.renderData()} />
            );
        });
    };

    render() {
        console.log(this.props);
        return (
            <div className="ui cards">
                <Card data={this.renderData().tempA} maxTemp={this.renderData().maxTemp01} minTemp={this.renderData().minTemp01} title='Sensor A' id='1' />
                <Card data={this.renderData().tempB} maxTemp={this.renderData().maxTemp02} minTemp={this.renderData().minTemp02} title='Sensor B' id='2' />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        sensor01: state.data.sensor01,
        sensor02: state.data.sensor02,
        maxTemp: state.data.maxTemp,
        minTemp: state.data.minTemp
    };
};

export default connect(mapStateToProps, { fetchToday })(SensorsList);