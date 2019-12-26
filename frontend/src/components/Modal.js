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
        console.log(formValues);
        await this.props.postName(formValues);

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
                            <div className="actions">
                                <button className="ui black button">Zapisz</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>,
            document.querySelector('#modal')
        );
    }
}

export default reduxForm({
    form: 'sensorsNames'
})(connect(null, { postName })(Modal));
