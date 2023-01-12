import moment from 'moment';
import React, { useState } from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { Checkbox, Form, Grid, Header } from 'semantic-ui-react';
import { useFetchDayByDateMutation } from '../../../store';
import { firstSensor4Date, firstTempOutDate, isOldData, prepareRechartData } from '../../../utils';
import { LoadingComponent } from '../../LoadingComponent';
import { ErrorNotification } from '../../notifications/ErrorNotification';
import { Rechart } from '../../rechart/Rechart';
import '../HistoryComponent.css';

export const HistoryComponentUi = ({ names }) => {
    const [values, setValues] = useState({
        isSensor1: false,
        isSensor2: false,
        isSensor3: false,
        isTempOut: false,
        isSensor4: false,
    });
    const [showForm, setShowForm] = useState(false);
    const [isOldDataFormat, setIsOldDataFormat] = useState(false);
    const [showCheckboxes, setShowCheckboxes] = useState({
        isSensor1: false,
        isSensor2: false,
        isSensor3: false,
        isTempOut: false,
        isSensor4: false,
    });
    const [fetchDayByDate, { data: day, isLoading: isLoadingDay, isError: isErrorDay }] = useFetchDayByDateMutation();

    const handleDateChange = async (event, data) => {
        if (isOldData(data.value)) setIsOldDataFormat(true);
        else setIsOldDataFormat(false);

        await fetchDayByDate(moment(data.value).format('D.M.YYYY'));
        setShowForm(true);
        setShowCheckboxes({
            isSensor1: true,
            isSensor2: true,
            isSensor3: moment(data.value).isSameOrAfter(firstTempOutDate),
            isTempOut: moment(data.value).isSameOrAfter(firstTempOutDate),
            isSensor4: moment(data.value).isSameOrAfter(firstSensor4Date),
        });
    };

    return (
        <div className="layout u-mt">
            <Header as={'h2'} className={'u-text-color layout'}>
                <span className="u-mt-l">Historia</span>
            </Header>
            <SemanticDatepicker
                onChange={handleDateChange}
                filterDate={(date) =>
                    moment(date).isAfter('2019-12-23', 'YYYY-MM-DD') && moment(date).isBefore(moment())
                }
            />
            {isLoadingDay ? (
                <LoadingComponent />
            ) : isErrorDay ? (
                <ErrorNotification
                    content={'Błąd przy pobieraniu danego dnia. Spróbuj ponownie za chwile.'}
                    header={'Błąd połączenia!'}
                />
            ) : (
                <>
                    {showForm && (
                        <Form className="font-stylesd u-mt u-text-color">
                            <Grid columns={'equal'}>
                                <Grid.Column>
                                    <Form.Field>
                                        <Checkbox
                                            label={names.a.name}
                                            name="sensor1"
                                            value={values.isSensor1}
                                            checked={values.isSensor1 === true}
                                            onChange={(e, data) =>
                                                setValues({ ...values, isSensor1: !values.isSensor1 })
                                            }
                                            className={'u-text-color'}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox
                                            label={names.b.name}
                                            name="sensor2"
                                            value={values.isSensor2}
                                            checked={values.isSensor2 === true}
                                            onChange={(e, data) =>
                                                setValues({ ...values, isSensor2: !values.isSensor2 })
                                            }
                                        />
                                    </Form.Field>
                                </Grid.Column>
                                {showCheckboxes.isTempOut && (
                                    <Grid.Column>
                                        <Form.Field>
                                            <Checkbox
                                                label="Garaż"
                                                name="sensor3"
                                                value={values.isSensor3}
                                                checked={values.isSensor3 === true}
                                                onChange={(e, data) =>
                                                    setValues({ ...values, isSensor3: !values.isSensor3 })
                                                }
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <Checkbox
                                                label="Na zewnątrz"
                                                name="tempOut"
                                                value={values.isTempOut}
                                                checked={values.isTempOut === true}
                                                onChange={(e, data) =>
                                                    setValues({ ...values, isTempOut: !values.isTempOut })
                                                }
                                            />
                                        </Form.Field>
                                    </Grid.Column>
                                )}
                                {showCheckboxes.isSensor4 && (
                                    <Grid.Column>
                                        <Form.Field>
                                            <Checkbox
                                                label={names.c.name}
                                                name="sensor4"
                                                value={values.isSensor4}
                                                checked={values.isSensor4 === true}
                                                onChange={(e, data) =>
                                                    setValues({ ...values, isSensor4: !values.isSensor4 })
                                                }
                                            />
                                        </Form.Field>
                                    </Grid.Column>
                                )}
                            </Grid>
                        </Form>
                    )}
                    <div className="rechart-container u-mt">
                        {values.isSensor1 && (
                            <>
                                <Header textAlign={'center'} dividing={true} className={'u-mb-non u-text-color'}>
                                    {names.a.name}
                                </Header>
                                <Rechart
                                    data={prepareRechartData(day.sensor01, 'sensor01', isOldDataFormat)}
                                    type={'temp'}
                                    isHistory={true}
                                />
                            </>
                        )}
                        {values.isSensor2 && (
                            <>
                                <Header textAlign={'center'} dividing={true} className={'u-mb-non u-text-color'}>
                                    {names.b.name}
                                </Header>
                                <Rechart
                                    data={prepareRechartData(day.sensor02, 'sensor02', isOldDataFormat)}
                                    type={'temp'}
                                    isHistory={true}
                                />
                            </>
                        )}
                        {values.isSensor3 && showCheckboxes.isSensor3 && (
                            <>
                                <Header textAlign={'center'} dividing={true} className={'u-mb-non u-text-color'}>
                                    Garaż
                                </Header>
                                <Rechart
                                    data={prepareRechartData(day.sensor03, 'sensor03', isOldDataFormat)}
                                    type={'temp'}
                                    isHistory={true}
                                />
                            </>
                        )}
                        {values.isSensor4 && showCheckboxes.isSensor4 && (
                            <>
                                <Header textAlign={'center'} dividing={true} className={'u-mb-non u-text-color'}>
                                    {names.c.name}
                                </Header>
                                <Rechart
                                    data={prepareRechartData(day.sensor04, 'sensor04', isOldDataFormat)}
                                    type={'temp'}
                                    isHistory={true}
                                />
                            </>
                        )}
                        {values.isTempOut && showCheckboxes.isTempOut && (
                            <>
                                <Header textAlign={'center'} dividing={true} className={'u-mb-non u-text-color'}>
                                    Na zewnątrz
                                </Header>
                                <div className="u-mr">
                                    <Rechart
                                        data={prepareRechartData(day.sensor03, 'sensor03', isOldDataFormat)}
                                        type={'tempOut'}
                                        isHistory={true}
                                        isTempOut
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}
            <div className="empty-space-large"></div>
        </div>
    );
};
