import moment from 'moment';

export const formatTime = (time) => moment(time).format('HH:mm');

export const prepareRechartData = (data, sensorName) => {
    return data.map((obj) => {
        if (sensorName === 'sensor03') {
            return {
                ...obj,
                temp: Number(obj.temp),
                tempOut: Number(obj.tempOut),
                time: moment(obj.time).toDate().getTime(),
            };
        } else {
            return { ...obj, temp: Number(obj.temp), time: moment(obj.time).toDate().getTime() };
        }
    });
};

export const dateWithMixedTimeType = moment('23.12.2022', 'DD.MM.YYYY');

export const isNewChart = (date) => (moment(date, 'DD.MM.YYYY').isAfter(dateWithMixedTimeType) ? true : false);

export const textColor = '#aeb1ba';
