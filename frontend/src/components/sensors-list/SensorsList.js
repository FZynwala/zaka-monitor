import React, { useEffect } from "react";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { connect } from "react-redux";
import {
    fetchCovid,
    fetchCovidPoland,
    fetchName,
    fetchToday,
} from "../../actions";
import Card from "../Card";
import CardExtended from "../CardExtended";
import CardTempOut from "../CardTempOut";
import { LoadingComponent } from "../LoadingComponent";
import "./SensorList.css";

const SensorsList = (props) => {
    // componentDidMount() {
    //     trackPromise(props.fetchToday());
    //     props.fetchName();
    //     //props.fetchCovid();
    //     // props.fetchCovidPoland();
    // }
    const { promiseInProgress } = usePromiseTracker();
    useEffect(() => {
        trackPromise(props.fetchToday());
        props.fetchName();
    }, []);

    const renderData = () => {
        if (props.maxTemp) {
            const { sensor01, sensor02, sensor03 } = props;

            const tempA = sensor01[sensor01.length - 1];
            const tempB = sensor02[sensor02.length - 1];
            const tempC = sensor03[sensor03.length - 1];
            const maxTemp01 = props.maxTemp.sensor01;
            const maxTemp02 = props.maxTemp.sensor02;
            const maxTemp03 = props.maxTemp.sensor03;
            const maxTempOut = props.maxTemp.tempOut;
            const minTemp01 = props.minTemp.sensor01;
            const minTemp02 = props.minTemp.sensor02;
            const minTemp03 = props.minTemp.sensor03;
            const minTempOut = props.minTemp.tempOut;

            return {
                tempA,
                tempB,
                tempC,
                maxTemp01,
                maxTemp02,
                maxTemp03,
                maxTempOut,
                minTemp01,
                minTemp02,
                minTemp03,
                minTempOut,
            };
        }
        return "Loading";
    };
    /*
    renderSensor = () => {
        props.sensor01.map(data => {
            return (
                <Sensor data={renderData()} />
            );
        });
    };*/

    const renderNames = () => {
        if (props.names.a) {
            const name1 = props.names.a.name;
            const name2 = props.names.b.name;

            return { name1, name2 };
        } else {
            return "Loading...";
        }
    };

    return (
        <>
            {promiseInProgress ? (
                <LoadingComponent />
            ) : (
                <div className="ui cards">
                    <Card
                        data={renderData().tempA}
                        maxTemp={renderData().maxTemp01}
                        minTemp={renderData().minTemp01}
                        title="Sensor A"
                        id="1"
                        history={props.history}
                        name={renderNames().name1}
                    />
                    <Card
                        data={renderData().tempB}
                        maxTemp={renderData().maxTemp02}
                        minTemp={renderData().minTemp02}
                        title="Sensor B"
                        id="2"
                        history={props.history}
                        name={renderNames().name2}
                    />
                    <CardExtended
                        data={renderData().tempC}
                        maxTemp={renderData().maxTemp03}
                        minTemp={renderData().minTemp03}
                        title="Sensor C"
                        id="3"
                        history={props.history}
                        name="Garaz"
                    />
                    <CardTempOut
                        data={renderData().tempC}
                        maxTemp={renderData().maxTempOut}
                        minTemp={renderData().minTempOut}
                        id="4"
                        history={props.history}
                    />
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
