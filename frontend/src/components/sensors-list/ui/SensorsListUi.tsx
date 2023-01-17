import React from 'react';
import { Day, Names } from 'types';

import { Card } from '../../cards/Card';
import { CardExtended } from '../../cards/CardExtended';
import { CardTempOut } from '../../cards/CardTempOut';
import '../SensorList.css';

type SensorListUiProps = {
    today?: Day;
    sensorsNames?: Names;
};

export const SensorsListUi: React.FC<SensorListUiProps> = ({ today, sensorsNames }) => {
    return (
        <>
            <div className="ui cards">
                <Card
                    data={today?.sensor01[today.sensor01.length - 1]}
                    maxTemp={today?.maxTemp.sensor01}
                    minTemp={today?.minTemp.sensor01}
                    id="1"
                    name={sensorsNames?.a.name}
                />
                <Card
                    data={today?.sensor02[today?.sensor02.length - 1]}
                    maxTemp={today?.maxTemp.sensor02}
                    minTemp={today?.minTemp.sensor02}
                    id="2"
                    name={sensorsNames?.b.name}
                />
                <CardExtended
                    data={today?.sensor03[today.sensor03.length - 1]}
                    maxTemp={today?.maxTemp.sensor03}
                    minTemp={today?.minTemp.sensor03}
                    id="3"
                    name="Garaz"
                />
                <CardTempOut
                    data={today?.sensor03[today.sensor03.length - 1]}
                    maxTemp={today?.maxTemp.tempOut}
                    minTemp={today?.minTemp.tempOut}
                    id="4"
                />
                <Card
                    data={today?.sensor04[today.sensor04.length - 1]}
                    maxTemp={today?.maxTemp.sensor04}
                    minTemp={today?.minTemp.sensor04}
                    id="5"
                    name={sensorsNames?.c.name}
                />
                <div className="empty-space"></div>
            </div>
        </>
    );
};
