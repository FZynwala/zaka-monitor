import './ShowChart.css';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ChartModal from './ChartModal';
import { fetchToday } from '../actions';
import prepareData from '../prepareData';

class ShowChart extends React.Component {

    prepareTempToChart = () => {
        if(this.props.today) {
            if(this.props.match.path === '/chart/temp/:id') {


                if(this.props.match.params.id === '1') {
                    console.log('Hello from preapareTemp');

                    return prepareData(this.props.today.sensor01, this.props.yesterday.sensor01, 'temp');
                
                } else if(this.props.match.params.id === '2') {
        
                    return prepareData(this.props.today.sensor02, this.props.yesterday.sensor02, 'temp');
                }
            } else if(this.props.match.path === '/chart/hum/:id') {

                if(this.props.match.params.id === '1') {
                    console.log('Hello from preapareHum');
        
                    return prepareData(this.props.today.sensor01, this.props.yesterday.sensor01, 'hum');

                } else if(this.props.match.params.id === '2') {
        
                    return prepareData(this.props.today.sensor02, this.props.yesterday.sensor02, 'hum');
                }
            };
        };
    };

    renderActions() {

        return (
            <React.Fragment>
			    <Link to={`/chart/temp/${this.props.match.params.id}`} className="ui purple button">Temperatura</Link>
			    <Link to={`/chart/hum/${this.props.match.params.id}`} className="ui purple button">Wilgotność</Link>
            </React.Fragment>
        );
    };

    render() {
        
        if(this.props.today) {
            return (
                <ChartModal 
                    xData={this.prepareTempToChart().dataTime}
                    yData={this.prepareTempToChart().dataTemp}
                    type={this.props.match.path === '/chart/temp/:id' ? 'temp' : 'hum'}
                    actions={this.renderActions()}
                    onDismiss={() => this.props.history.push("/")}
                />
            );
        } else {
            return (
                <ChartModal 
                    xData={null}
                    yData={null}
                    type={this.props.match.path === '/chart/temp/:id' ? 'temp' : 'hum'}
                    actions={this.renderActions()}
                    onDismiss={() => this.props.history.push("/")}
                />
            )
        }
    };
}

const mapStateToProps = (state) => {
    return {
        today: state.data.today,
        yesterday: state.data.yesterday
    }
}

export default connect(mapStateToProps, { fetchToday })(ShowChart);
