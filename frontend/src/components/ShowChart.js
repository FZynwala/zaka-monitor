import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchToday } from '../actions';
import prepareData from '../prepareData';
import { prepareRechartData } from '../utils';
import ChartModal from './ChartModal';
import './ShowChart.css';

class ShowChart extends React.Component {
    dateWithMixedTimeType = moment('23.12.2022', 'DD.MM.YYYY');

    isNewChart = () => (moment(this.props.today.date, 'DD.MM.YYYY').isAfter(this.dateWithMixedTimeType) ? true : false);
    prepareTempToChart = () => {
        if (this.props.today) {
            if (this.props.match.path === '/chart/temp/:id') {
                if (this.props.match.params.id === '1') {
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

    getChartType = () => {
        return this.props.match.path === '/chart/hum/:id'
            ? 'hum'
            : this.props.match.params.id === '4'
            ? 'tempOut'
            : 'temp';
    };

    render() {
        if (this.props.today) {
            return (
                <ChartModal
                    data={[
                        ...prepareRechartData(
                            this.props.yesterday[getSensorName(this.props.match.params.id)],
                            getSensorName(this.props.match.params.id),
                        ),
                        ...prepareRechartData(
                            this.props.today[getSensorName(this.props.match.params.id)],
                            getSensorName(this.props.match.params.id),
                        ),
                    ]}
                    xData={this.isNewChart() ? undefined : this.prepareTempToChart().dataTime}
                    yData={this.isNewChart() ? undefined : this.prepareTempToChart().dataTemp}
                    type={this.getChartType()}
                    actions={this.renderActions()}
                    onDismiss={() => this.props.history.push('/')}
                    isNewChart={this.isNewChart()}
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

const getSensorName = (id) => {
    switch (id) {
        case '1':
            return 'sensor01';
        case '2':
            return 'sensor02';
        case '3':
            return 'sensor03';
        case '4':
            return 'sensor03';
        case '5':
            return 'sensor04';
    }
};

const mapStateToProps = (state) => {
    return {
        today: state.data.today,
        yesterday: state.data.yesterday,
    };
};

export default connect(mapStateToProps, { fetchToday })(ShowChart);
