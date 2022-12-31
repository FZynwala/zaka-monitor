import React from 'react';
import { Checkbox, Form, Grid } from 'semantic-ui-react';

export const HistoryForm = (handleCheck, values, names) => {
    // if (!names) return null;
    return (
        <Form className="font-stylesd u-mt">
            <Grid columns={2}>
                <Grid.Column>
                    <Form.Field>
                        <Checkbox
                            label={names.a.name}
                            name="sensor1"
                            value={values.isSensor1}
                            checked={values.isSensor1 === true}
                            onChange={(e, data) => handleCheck({ ...values, isSensor1: !values.isSensor1 })}
                            className={'font-stylesds'}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            label={names.b.name}
                            name="sensor2"
                            value={values.isSensor2}
                            checked={values.isSensor2 === true}
                            onChange={(e, data) => handleCheck({ ...values, isSensor2: !values.isSensor2 })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            label="Garaż"
                            name="sensor3"
                            value={values.isSensor3}
                            checked={values.isSensor3 === true}
                            onChange={(e, data) => handleCheck({ ...values, isSensor3: !values.isSensor3 })}
                        />
                    </Form.Field>
                </Grid.Column>
                <Grid.Column>
                    <Form.Field>
                        <Checkbox
                            label={names.c.name}
                            name="sensor4"
                            value={values.isSensor4}
                            checked={values.isSensor4 === true}
                            onChange={(e, data) => handleCheck({ ...values, isSensor4: !values.isSensor4 })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            label="Na zewnątrz"
                            name="tempOut"
                            value={values.isTempOut}
                            checked={values.isTempOut === true}
                            onChange={(e, data) => handleCheck({ ...values, isTempOut: !values.isTempOut })}
                        />
                    </Form.Field>
                </Grid.Column>
            </Grid>
        </Form>
    );
};
