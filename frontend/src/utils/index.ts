import moment from 'moment';
import { ChartData, ChartDataItem, Sensor, SensorName } from 'types';

export const formatTime = (time: string): string => moment(time).format('HH:mm');

export const prepareRechartData = (data: Sensor, isOldData: boolean, sensorName?: SensorName): ChartData => {
    return data.map((obj) => {
        if (sensorName === SensorName.SENSOR_03) {
            return {
                ...obj,
                temp: Number(obj.temp),
                tempOut: Number(obj.tempOut),
                time: isOldData ? moment(obj.time, 'HH:mm').toDate().getTime() : moment(obj.time).toDate().getTime(),
            };
        } else {
            return {
                ...obj,
                temp: Number(obj.temp),
                time: isOldData ? moment(obj.time, 'HH:mm').toDate().getTime() : moment(obj.time).toDate().getTime(),
            } as ChartDataItem;
        }
    });
};

export const dateWithMixedTimeType = moment('23.12.2022', 'DD.MM.YYYY');
export const firstTempOutDate = moment('13.06.2020', 'DD.MM.YYYY');
export const firstSensor4Date = moment('27.12.2022', 'DD.MM.YYYY');

export const isOldData = (date: string): boolean => moment(date, 'DD.MM.YYYY').isBefore(dateWithMixedTimeType);

export const textColor = '#aeb1ba';
