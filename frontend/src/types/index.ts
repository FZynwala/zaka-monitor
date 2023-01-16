export type Today = {
    today: Day;
    yesterday: Day;
};

export type Day = {
    date: string;
    maxTemp: MaxTemp;
    minTemp: MinTemp;
    sensor01: Sensor;
    sensor02: Sensor;
    sensor03: Sensor;
    sensor04: Sensor;
};

export type MaxTemp = {
    tempOut: MaxTempItem;
    sensor01: MaxTempItem;
    sensor02: MaxTempItem;
    sensor03: MaxTempItem;
    sensor04: MaxTempItem;
};

export type MaxTempItem = {
    maxTemp: string;
    time: string;
};

export type MinTemp = {
    tempOut: MinTempItem;
    sensor01: MinTempItem;
    sensor02: MinTempItem;
    sensor03: MinTempItem;
    sensor04: MinTempItem;
};

export type MinTempItem = {
    minTemp: string;
    time: string;
};

export type Sensor = SensorItem[];

export type SensorItem = {
    temp: string;
    hum: string;
    time: string;
    isLight?: boolean;
    isOpen?: boolean;
    tempOut?: string;
};

export type Sensor03 = Sensor03Item[];

export type Sensor03Item = {
    temp: string;
    hum: string;
    time: string;
    isLight: boolean;
    isOpen: boolean;
    tempOut: string;
};

export type Names = {
    a: Name;
    b: Name;
    c: Name;
};

export type Name = {
    name: string;
    id: string;
};

export type ChangeNamesRequestBody = {
    name1: string;
    name2: string;
    name3: string;
};

export enum ChartType {
    HUM = 'hum',
    TEMP = 'temp',
    TEMP_OUT = 'tempOut',
}

export enum SensorName {
    SENSOR_01 = 'sensor01',
    SENSOR_02 = 'sensor02',
    SENSOR_03 = 'sensor03',
    SENSOR_04 = 'sensor04',
}

export type ChartData = ChartDataItem[];

export type ChartDataItem = {
    temp: number;
    tempOut?: number;
    time: number;
};
