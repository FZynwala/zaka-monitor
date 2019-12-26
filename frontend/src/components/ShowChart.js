import './ShowChart.css';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ChartModal from './ChartModal';
import { fetchToday } from '../actions';

class ShowChart extends React.Component {

    prepareTempToChart = () => {
        if(this.props.sensor01) {
            if(this.props.match.path === '/chart/temp/:id') {

                if(this.props.match.params.id === '1') {
                    console.log('Hello from preapareTemp');
                    let dataTemp = this.props.sensor01.map(obj => obj.temp);
                    //let dataTime = this.props.sensor01.map(obj => obj.time);
        
                    return dataTemp;
                } else if(this.props.match.params.id === '2') {
                    let dataTemp = this.props.sensor02.map(obj => obj.temp);
                    //let dataTime = this.props.sensor02.map(obj => obj.time);
        
                    return dataTemp;
                }
            } else if(this.props.match.path === '/chart/hum/:id') {

                if(this.props.match.params.id === '1') {
                    console.log('Hello from preapareHum');
                    let dataTemp = this.props.sensor01.map(obj => obj.hum);
                    //let dataTime = this.props.sensor01.map(obj => obj.time);
        
                    return dataTemp;
                } else if(this.props.match.params.id === '2') {
                    let dataTemp = this.props.sensor02.map(obj => obj.hum);
                    //let dataTime = this.props.sensor02.map(obj => obj.time);
        
                    return dataTemp;
                }
            }
        }
    };

    prepareTimeToChart = () => {
        if(this.props.sensor01) {
            if(this.props.match.params.id === '1') {
                let dataTime = this.props.sensor01.map(obj => obj.time);
                
                return dataTime;
            } else if(this.props.match.params.id === '2') {
                let dataTime = this.props.sensor02.map(obj => obj.time);
    
                return dataTime;
            }
        }
    };

    renderActions() {
        const { id } = this.props.match.params;

        return (
            <React.Fragment>
			    <Link to={`/chart/temp/${this.props.match.params.id}`} className="ui purple button">Temperatura</Link>
			    <Link to={`/chart/hum/${this.props.match.params.id}`} className="ui purple button">Wilgotność</Link>
            </React.Fragment>
        );
    };

    render() {
        console.log(this.props);
        return (
            <ChartModal 
                xData={this.prepareTimeToChart()}
                yData={this.prepareTempToChart()}
                type={this.props.match.path === '/chart/temp/:id' ? 'temp' : 'hum'}
                actions={this.renderActions()}
                onDismiss={() => this.props.history.push("/")}
            />
        );
    };
}

const mapStateToProps = (state) => {
    return {
        sensor01: state.data.sensor01,
        sensor02: state.data.sensor02
    }
}

export default connect(mapStateToProps, { fetchToday })(ShowChart);