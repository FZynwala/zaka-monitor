import React from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { isOldData, prepareRechartData } from '../../../utils';
import ChartModal from '../../ChartModal';
import '../ShowChart.css';

export const ShowChartUi = (props) => {
    const match = useRouteMatch();
    const history = useHistory();

    const renderActions = () => {
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
        return match.path === '/chart/hum/:id' ? 'hum' : match.params.id === '4' ? 'tempOut' : 'temp';
    };

    const getSensorName = (id) => {
        switch (id) {
            case '1':
                return 'sensor01';
            case '2':
                return 'sensor02';
            case '3':
                return 'sensor03';
            case '4':
                return 'sensor03';
            case '5':
                return 'sensor04';
        }
    };

    if (props.data.today) {
        return (
            <ChartModal
                data={[
                    ...prepareRechartData(
                        props.data.yesterday[getSensorName(match.params.id)],
                        getSensorName(match.params.id),
                        isOldData(props.data.today.date),
                    ),
                    ...prepareRechartData(
                        props.data.today[getSensorName(match.params.id)],
                        getSensorName(match.params.id),
                        isOldData(props.data.today.date),
                    ),
                ]}
                type={getChartType()}
                actions={renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    } else {
        return (
            <ChartModal
                xData={null}
                yData={null}
                type={match.path === '/chart/temp/:id' ? 'temp' : 'hum'}
                actions={renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
};
