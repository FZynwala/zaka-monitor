export default (tSensor, ySensor, param) => {
    
    if(tSensor) {
        const current = tSensor[tSensor.length - 1];
        const tTime = current.time;
        
        let dataToChart = ySensor.filter(obj => obj.time > tTime);
        dataToChart = [ ...dataToChart, ...tSensor ];

        const dataTemp = dataToChart.map(obj => obj[param]);
        const dataTime = dataToChart.map(obj => obj.time);

        
        return { dataTemp, dataTime }
    }
};