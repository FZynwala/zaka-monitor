import './SensorList.css';
import React from 'react';
import { connect } from 'react-redux';
import { fetchToday, fetchName, fetchCovid, fetchCovidPoland } from '../actions';
import Card from './Card';
import CardCovid from './CardCovid';
import CardExtended from './CardExtended';
import CardTempOut from './CardTempOut';

class SensorsList extends React.Component {
    componentDidMount() {
        this.props.fetchToday();
        this.props.fetchName();
        //this.props.fetchCovid();
        this.props.fetchCovidPoland();
    };

    renderData = () => {
        if(this.props.maxTemp) {
            const { sensor01, sensor02, sensor03 } = this.props;
            
            const tempA = sensor01[sensor01.length-1];
            const tempB = sensor02[sensor02.length-1];
            const tempC = sensor03[sensor03.length-1];
            const maxTemp01 = this.props.maxTemp.sensor01;
            const maxTemp02 = this.props.maxTemp.sensor02;
            const maxTemp03 = this.props.maxTemp.sensor03;
            const maxTempOut = this.props.maxTemp.tempOut;
            const minTemp01 = this.props.minTemp.sensor01;
            const minTemp02 = this.props.minTemp.sensor02;
            const minTemp03 = this.props.minTemp.sensor03;
            const minTempOut = this.props.minTemp.tempOut;
            
            return { tempA, tempB, tempC, maxTemp01, maxTemp02, maxTemp03, maxTempOut, minTemp01, minTemp02, minTemp03, minTempOut }
        } 
        return 'Loading'
    };
/*
    renderSensor = () => {
        this.props.sensor01.map(data => {
            return (
                <Sensor data={this.renderData()} />
            );
        });
    };*/

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
                <CardExtended data={this.renderData().tempC} maxTemp={this.renderData().maxTemp03} minTemp={this.renderData().minTemp03} title='Sensor C' id='3' history={this.props.history} name="Garaz" />
                <CardTempOut data={this.renderData().tempC} maxTemp={this.renderData().maxTempOut} minTemp={this.renderData().minTempOut} id='4' history={this.props.history} />
            </div>
        );
    };
}


const mapStateToProps = (state) => {
    if(state.data.today) {
        return {
            sensor01: state.data.today.sensor01,
            sensor02: state.data.today.sensor02,
            sensor03: state.data.today.sensor03,
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

export default connect(mapStateToProps, { fetchToday, fetchName, fetchCovid, fetchCovidPoland })(SensorsList);