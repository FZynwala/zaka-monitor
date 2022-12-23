import moment from 'moment';

export default (tSensor, ySensor, param) => {
    const mappedTSensor = tSensor.map((obj) => {
        if (obj.time.length > 5) {
            return { ...obj, time: moment(obj.time).format('HH:MM') };
        } else {
            return obj;
        }
    });

    const mappedYSensor = ySensor.map((obj) => {
        if (obj.time.length > 5) {
            return { ...obj, time: moment(obj.time).format('HH:MM') };
        } else {
            return obj;
        }
    });

    const current = mappedTSensor[mappedTSensor.length - 1];
    const tTime = current.time;

    let dataToChart = mappedYSensor.filter((obj) => obj.time > tTime);
    dataToChart = [...dataToChart, ...mappedTSensor];

    const dataTemp = dataToChart.map((obj) => obj[param]);
    const dataTime = dataToChart.map((obj) => obj.time);

    return { dataTemp, dataTime };
};
