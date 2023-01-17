import React from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { ChartType, SensorName, Today } from 'types';
import { isOldData, prepareRechartData } from '../../../utils';
import { ChartModal } from '../../chart-modal/ChartModal';
import '../ShowChart.css';

type ShowChartUiProps = {
    data?: Today;
};

export const ShowChartUi: React.FC<ShowChartUiProps> = ({ data }) => {
    const match = useRouteMatch<{ id: string }>();
    const history = useHistory();

    const renderActions = (): JSX.Element => {
        if (match.params.id === '4') {
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
                <Link to={`/chart/temp/${match.params.id}`} className="ui green button">
                    Temperatura
                </Link>
                <Link to={`/chart/hum/${match.params.id}`} className="ui green button">
                    Wilgotność
                </Link>
            </React.Fragment>
        );
    };

    const getChartType = () => {
        return match.path === '/chart/hum/:id'
            ? ChartType.HUM
            : match.params.id === '4'
            ? ChartType.TEMP_OUT
            : ChartType.TEMP;
    };

    const getSensorName = (id: string): SensorName | undefined => {
        switch (id) {
            case '1':
                return SensorName.SENSOR_01;
            case '2':
                return SensorName.SENSOR_02;
            case '3':
                return SensorName.SENSOR_03;
            case '4':
                return SensorName.SENSOR_03;
            case '5':
                return SensorName.SENSOR_04;
            default:
                return undefined;
        }
    };

    if (data?.today) {
        return (
            <ChartModal
                data={[
                    ...prepareRechartData(
                        data.yesterday[getSensorName(match.params.id) || ''],
                        isOldData(data.today.date),
                        getSensorName(match.params.id),
                    ),
                    ...prepareRechartData(
                        data.today[getSensorName(match.params.id) || ''],
                        isOldData(data.today.date),
                        getSensorName(match.params.id),
                    ),
                ]}
                type={getChartType()}
                actions={renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    } else {
        return <ChartModal actions={renderActions()} onDismiss={() => history.push('/')} />;
    }
};
