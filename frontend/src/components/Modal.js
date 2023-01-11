import { Field, Form, Formik } from 'formik';
import React from 'react';
import ReactDOM from 'react-dom';
import { useChangeNamesMutation } from '../store';
import './Modal.css';

export const Modal = (props) => {
    const [changeNames] = useChangeNamesMutation();

    const initialValues = {
        name1: props.names.a.name,
        name2: props.names.b.name,
        name3: props.names.c.name,
    };

    const handleSubmit = async (values) => {
        const body = {
            name1: values.name1,
            name2: values.name2,
            name3: values.name3,
        };
        await changeNames(body);

        props.history.push('/');
    };

    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">Zmień nazwę czujnika</div>
                <div className="content">
                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                        <Form className="ui form">
                            <label className="u-mb-small">{'Nazwa czujnika 1:'}</label>
                            <Field name="name1" className="u-mb-small" />
                            <label className="u-mb-small">{'Nazwa czujnika 2:'}</label>
                            <Field name="name2" className="u-mb-small" />
                            <label className="u-mb-small">{'Nazwa czujnika 3:'}</label>
                            <Field name="name3" className="u-mb-l" />
                            <div className="actions">
                                <button type={'submit'} className="ui black button">
                                    Zapisz
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>,
        document.querySelector('#modal'),
    );
};
