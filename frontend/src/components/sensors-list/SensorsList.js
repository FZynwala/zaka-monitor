import React, { useEffect } from 'react';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import { connect } from 'react-redux';
import { fetchCovid, fetchCovidPoland, fetchName, fetchToday } from '../../actions';
import Card from '../Card';
import CardExtended from '../CardExtended';
import CardTempOut from '../CardTempOut';
import { LoadingComponent } from '../LoadingComponent';
import './SensorList.css';

const SensorsList = ({
    sensor01,
    sensor02,
    sensor03,
    sensor04,
    fetchToday,
    fetchName,
    maxTemp,
    minTemp,
    names,
    history,
}) => {
    const { promiseInProgress } = usePromiseTracker();
    useEffect(() => {
        trackPromise(fetchToday());
        fetchName();
    }, []);

    if (!maxTemp || !names.a) return null;

    return (
        <>
            {promiseInProgress ? (
                <LoadingComponent />
            ) : (
                <div className="ui cards">
                    <Card
                        data={sensor01[sensor01.length - 1]}
                        maxTemp={maxTemp.sensor01}
                        minTemp={minTemp.sensor01}
                        title="Sensor A"
                        id="1"
                        history={history}
                        name={names.a.name}
                    />
                    <Card
                        data={sensor02[sensor02.length - 1]}
                        maxTemp={maxTemp.sensor02}
                        minTemp={minTemp.sensor02}
                        title="Sensor B"
                        id="2"
                        history={history}
                        name={names.b.name}
                    />
                    <CardExtended
                        data={sensor03[sensor03.length - 1]}
                        maxTemp={maxTemp.sensor03}
                        minTemp={minTemp.sensor03}
                        title="Sensor C"
                        id="3"
                        history={history}
                        name="Garaz"
                    />
                    <CardTempOut
                        data={sensor03[sensor03.length - 1]}
                        maxTemp={maxTemp.tempOut}
                        minTemp={minTemp.tempOut}
                        id="4"
                        history={history}
                    />
                    <Card
                        data={sensor04[sensor04.length - 1]}
                        maxTemp={maxTemp.sensor04}
                        minTemp={minTemp.sensor04}
                        title="Sensor B"
                        id="5"
                        history={history}
                        name={names.c.name}
                        className={'u-mb'}
                    />
                    <div className="empty-space"></div>
                </div>
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    if (state.data.today) {
        return {
            sensor01: state.data.today.sensor01,
            sensor02: state.data.today.sensor02,
            sensor03: state.data.today.sensor03,
            sensor04: state.data.today.sensor04,
            maxTemp: state.data.today.maxTemp,
            minTemp: state.data.today.minTemp,
            names: state.names,
        };
    } else {
        return {
            names: state.names,
        };
    }
};

export default connect(mapStateToProps, {
    fetchToday,
    fetchName,
    fetchCovid,
    fetchCovidPoland,
})(SensorsList);
