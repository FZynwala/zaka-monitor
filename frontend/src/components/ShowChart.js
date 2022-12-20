import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchToday } from '../actions';
import prepareData from '../prepareData';
import ChartModal from './ChartModal';
import './ShowChart.css';

class ShowChart extends React.Component {
    prepareTempToChart = () => {
        console.log('##PROPS:', this.props);
        if (this.props.today) {
            if (this.props.match.path === '/chart/temp/:id') {
                if (this.props.match.params.id === '1') {
                    console.log('Hello from preapareTemp');

                    return prepareData(this.props.today.sensor01, this.props.yesterday.sensor01, 'temp');
                } else if (this.props.match.params.id === '2') {
                    return prepareData(this.props.today.sensor02, this.props.yesterday.sensor02, 'temp');
                } else if (this.props.match.params.id === '3') {
                    return prepareData(this.props.today.sensor03, this.props.yesterday.sensor03, 'temp');
                } else if (this.props.match.params.id === '4') {
                    return prepareData(this.props.today.sensor03, this.props.yesterday.sensor03, 'tempOut');
                }
            } else if (this.props.match.path === '/chart/hum/:id') {
                if (this.props.match.params.id === '1') {
                    console.log('Hello from preapareHum');

                    return prepareData(this.props.today.sensor01, this.props.yesterday.sensor01, 'hum');
                } else if (this.props.match.params.id === '2') {
                    return prepareData(this.props.today.sensor02, this.props.yesterday.sensor02, 'hum');
                } else if (this.props.match.params.id === '3') {
                    return prepareData(this.props.today.sensor03, this.props.yesterday.sensor03, 'hum');
                }
            }
        }
    };

    renderActions() {
        if (this.props.match.params.id === '4') {
            return (
                <React.Fragment>
                    <Link to="/" className="ui green button">
                        Wróć
                    </Link>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                <Link to={`/chart/temp/${this.props.match.params.id}`} className="ui green button">
                    Temperatura
                </Link>
                <Link to={`/chart/hum/${this.props.match.params.id}`} className="ui green button">
                    Wilgotność
                </Link>
            </React.Fragment>
        );
    }

    render() {
        if (this.props.today) {
            console.log('$$', Object.values(this.props.today[`sensor0${this.props.match.params.id}`]));
            console.log('$$$', [this.props.today[`sensor0${this.props.match.params.id}`][0]]);
            return (
                <ChartModal
                    data={[
                        ...prepareChartData(this.props.today[`sensor0${this.props.match.params.id}`]),
                        ...prepareChartData(this.props.yesterday[`sensor0${this.props.match.params.id}`]),
                    ]}
                    // xData={this.prepareTempToChart().dataTime}
                    // yData={this.prepareTempToChart().dataTemp}
                    type={this.props.match.path === '/chart/temp/:id' ? 'temp' : 'hum'}
                    actions={this.renderActions()}
                    onDismiss={() => this.props.history.push('/')}
                />
            );
        } else {
            return (
                <ChartModal
                    xData={null}
                    yData={null}
                    type={this.props.match.path === '/chart/temp/:id' ? 'temp' : 'hum'}
                    actions={this.renderActions()}
                    onDismiss={() => this.props.history.push('/')}
                />
            );
        }
    }
}

const prepareChartData = (data) =>
    data.map((obj) => {
        console.log('@MAP:', obj.time, moment(obj.time));
        return { ...obj, time: moment(obj.time).toDate().getTime() };
    });

const mapStateToProps = (state) => {
    return {
        today: state.data.today,
        yesterday: state.data.yesterday,
    };
};

export default connect(mapStateToProps, { fetchToday })(ShowChart);
