import moment from 'moment';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { Checkbox, Form, Grid, Header } from 'semantic-ui-react';
import { fetchDayByDate, fetchName } from '../../actions';
import { isNewChart, prepareRechartData } from '../../utils';
import Chart from '../chart';
import { Rechart } from '../rechart/Rechart';
import './HistoryComponent.css';

const HistoryComponent = ({ fetchDayByDate, fetchName, day, names }) => {
    const [values, setValues] = useState({
        isSensor1: false,
        isSensor2: false,
        isSensor3: false,
        isTempOut: false,
        isSensor4: false,
    });
    const [showForm, setShowForm] = useState(false);
    const [isOldData, setIsOldData] = useState(false);

    const handleDateChange = async (event, data) => {
        if (!isNewChart(data.value)) setIsOldData(true);
        else setIsOldData(false);

        await fetchDayByDate(moment(data.value).format('D.M.YYYY'));
        setShowForm(true);
    };

    if (!names.a) return null;

    return (
        <div className="layout u-mt">
            <Header as={'h2'} className={'u-text-color'}>
                Historia
            </Header>
            <SemanticDatepicker
                onChange={handleDateChange}
                filterDate={(date) =>
                    moment(date).isAfter('2019-12-23', 'YYYY-MM-DD') && moment(date).isBefore(moment())
                }
            />
            {showForm && (
                <Form className="font-stylesd u-mt u-text-color">
                    <Grid columns={3}>
                        <Grid.Column>
                            <Form.Field>
                                <Checkbox
                                    label={names.a.name}
                                    name="sensor1"
                                    value={values.isSensor1}
                                    checked={values.isSensor1 === true}
                                    onChange={(e, data) => setValues({ ...values, isSensor1: !values.isSensor1 })}
                                    className={'u-text-color'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox
                                    label={names.b.name}
                                    name="sensor2"
                                    value={values.isSensor2}
                                    checked={values.isSensor2 === true}
                                    onChange={(e, data) => setValues({ ...values, isSensor2: !values.isSensor2 })}
                                />
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column>
                            <Form.Field>
                                <Checkbox
                                    label="Garaż"
                                    name="sensor3"
                                    value={values.isSensor3}
                                    checked={values.isSensor3 === true}
                                    onChange={(e, data) => setValues({ ...values, isSensor3: !values.isSensor3 })}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox
                                    label={names.c.name}
                                    name="sensor4"
                                    value={values.isSensor4}
                                    checked={values.isSensor4 === true}
                                    onChange={(e, data) => setValues({ ...values, isSensor4: !values.isSensor4 })}
                                />
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column>
                            <Form.Field>
                                <Checkbox
                                    label="Na zewnątrz"
                                    name="tempOut"
                                    value={values.isTempOut}
                                    checked={values.isTempOut === true}
                                    onChange={(e, data) => setValues({ ...values, isTempOut: !values.isTempOut })}
                                />
                            </Form.Field>
                        </Grid.Column>
                    </Grid>
                </Form>
            )}
            <div className="rechart-container u-mt">
                {values.isSensor1 && (
                    <>
                        <Header textAlign={'center'} dividing={true} className={'u-mb-non'}>
                            {names.a.name}
                        </Header>
                        {isOldData ? (
                            <Chart
                                temp={day.sensor01.map((obj) => obj.temp)}
                                time={day.sensor01.map((obj) => obj.time)}
                            />
                        ) : (
                            <Rechart data={prepareRechartData(day.sensor01)} type={'temp'} isHistory={true} />
                        )}
                    </>
                )}
                {values.isSensor2 && (
                    <>
                        <Header textAlign={'center'} dividing={true} className={'u-mb-non'}>
                            {names.b.name}
                        </Header>
                        {isOldData ? (
                            <Chart
                                temp={day.sensor02.map((obj) => obj.temp)}
                                time={day.sensor02.map((obj) => obj.time)}
                            />
                        ) : (
                            <Rechart data={prepareRechartData(day.sensor02)} type={'temp'} isHistory={true} />
                        )}
                    </>
                )}
                {values.isSensor3 && (
                    <>
                        <Header textAlign={'center'} dividing={true} className={'u-mb-non'}>
                            Garaż
                        </Header>
                        {isOldData ? (
                            <Chart
                                temp={day.sensor03.map((obj) => obj.temp)}
                                time={day.sensor03.map((obj) => obj.time)}
                            />
                        ) : (
                            <Rechart
                                data={prepareRechartData(day.sensor03, 'sensor03')}
                                type={'temp'}
                                isHistory={true}
                            />
                        )}
                    </>
                )}
                {values.isSensor4 && (
                    <>
                        <Header textAlign={'center'} dividing={true} className={'u-mb-non'}>
                            {names.c.name}
                        </Header>
                        {isOldData ? (
                            <Chart
                                temp={day.sensor04.map((obj) => obj.temp)}
                                time={day.sensor04.map((obj) => obj.time)}
                            />
                        ) : (
                            <Rechart data={prepareRechartData(day.sensor04)} type={'temp'} isHistory={true} />
                        )}
                    </>
                )}
                {values.isTempOut && (
                    <>
                        <Header textAlign={'center'} dividing={true} className={'u-mb-non'}>
                            Na zewnątrz
                        </Header>
                        {isOldData ? (
                            <Chart
                                temp={day.sensor03.map((obj) => obj.tempOut)}
                                time={day.sensor03.map((obj) => obj.time)}
                            />
                        ) : (
                            <Rechart
                                data={prepareRechartData(day.sensor03, 'sensor03')}
                                type={'tempOut'}
                                isHistory={true}
                            />
                        )}
                    </>
                )}
            </div>
            <div className="empty-space-large"></div>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        day: state.day,
        names: state.names,
    };
};

export default connect(mapStateToProps, { fetchDayByDate, fetchName })(HistoryComponent);
