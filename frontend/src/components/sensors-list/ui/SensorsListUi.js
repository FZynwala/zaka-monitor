import React from 'react';
import { useHistory } from 'react-router-dom';

import { Card } from '../../card/Card';
import { CardExtended } from '../../CardExtended';
import { CardTempOut } from '../../CardTempOut';
import '../SensorList.css';

export const SensorsListUi = ({ today, sensorsNames }) => {
    const history = useHistory();
    return (
        <>
            <div className="ui cards">
                <Card
                    data={today.sensor01[today.sensor01.length - 1]}
                    maxTemp={today.maxTemp.sensor01}
                    minTemp={today.minTemp.sensor01}
                    title="Sensor A"
                    id="1"
                    history={history}
                    name={sensorsNames.a.name}
                />
                <Card
                    data={today.sensor02[today.sensor02.length - 1]}
                    maxTemp={today.maxTemp.sensor02}
                    minTemp={today.minTemp.sensor02}
                    title="Sensor B"
                    id="2"
                    history={history}
                    name={sensorsNames.b.name}
                />
                <CardExtended
                    data={today.sensor03[today.sensor03.length - 1]}
                    maxTemp={today.maxTemp.sensor03}
                    minTemp={today.minTemp.sensor03}
                    title="Sensor C"
                    id="3"
                    history={history}
                    name="Garaz"
                />
                <CardTempOut
                    data={today.sensor03[today.sensor03.length - 1]}
                    maxTemp={today.maxTemp.tempOut}
                    minTemp={today.minTemp.tempOut}
                    id="4"
                    history={history}
                />
                <Card
                    data={today.sensor04[today.sensor04.length - 1]}
                    maxTemp={today.maxTemp.sensor04}
                    minTemp={today.minTemp.sensor04}
                    title="Sensor B"
                    id="5"
                    history={history}
                    name={sensorsNames.c.name}
                    className={'u-mb'}
                />
                <div className="empty-space"></div>
            </div>
        </>
    );
};
