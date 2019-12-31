import './SensorList.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchToday, fetchName } from '../actions';
import Sensor from './Sensor';
import Card from './Card';

class SensorsList extends React.Component {
    componentDidMount() {
        this.props.fetchToday();
        this.props.fetchName();
    };

    renderData = () => {
        if(this.props.maxTemp) {
            const { sensor01, sensor02 } = this.props;
            
            const tempA = sensor01[sensor01.length-1];
            const tempB = sensor02[sensor02.length-1];
            const maxTemp01 = this.props.maxTemp.sensor01;
            const maxTemp02 = this.props.maxTemp.sensor02;
            const minTemp01 = this.props.minTemp.sensor01;
            const minTemp02 = this.props.minTemp.sensor02;
            
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

    renderNames() {		
		if(this.props.names.a) {
			const name1 = this.props.names.a.name;
			const name2 = this.props.names.b.name;

			return { name1, name2 };
			
		} else {
			
			return 'Loading...';
		}

	};

    render() {
        return (
            <div className="ui cards">
                <Card data={this.renderData().tempA} maxTemp={this.renderData().maxTemp01} minTemp={this.renderData().minTemp01} title='Sensor A' id='1' history={this.props.history} name={this.renderNames().name1} />
                <Card data={this.renderData().tempB} maxTemp={this.renderData().maxTemp02} minTemp={this.renderData().minTemp02} title='Sensor B' id='2' history={this.props.history} name={this.renderNames().name2} />
            </div>
        );
    };
}


const mapStateToProps = (state) => {
    if(state.data.today) {
        return {
            sensor01: state.data.today.sensor01,
            sensor02: state.data.today.sensor02,
            maxTemp: state.data.today.maxTemp,
            minTemp: state.data.today.minTemp,
            names: state.names
        };
    } else {
        return {
            names: state.names
        }
    }
};

export default connect(mapStateToProps, { fetchToday, fetchName })(SensorsList);