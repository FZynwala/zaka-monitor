import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { postName } from '../actions';

class Modal extends React.Component {
    renderInput({ input, label }) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        );
    }

    onSubmit = async (formValues) => {
        const body = {
            name1: formValues.name1 ? formValues.name1 : this.props.names.a.name,
            name2: formValues.name2 ? formValues.name2 : this.props.names.b.name,
            name3: formValues.name3 ? formValues.name3 : this.props.names.c.name,
        };
        await this.props.postName(body);

        this.props.history.push('/');
    };

    render() {
        return ReactDOM.createPortal(
            <div onClick={this.props.onDismiss} className="ui dimmer modals visible active">
                <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                    <div className="header">Zmień nazwę czujnika</div>
                    <div className="content">
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                            <Field name="name1" component={this.renderInput} label="Nazwa czujnika 1:" />
                            <Field name="name2" component={this.renderInput} label="Nazwa czujnika 2:" />
                            <Field name="name3" component={this.renderInput} label="Nazwa czujnika 3:" />
                            <div className="actions">
                                <button className="ui black button">Zapisz</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>,
            document.querySelector('#modal'),
        );
    }
}

export default reduxForm({
    form: 'sensorsNames',
})(connect(null, { postName })(Modal));
