import React from 'react';
import { Link } from 'react-router-dom';

import Modal from './Modal';


class Settings extends React.Component {
    renderActions() {
        return (
            <React.Fragment>
			    <Link to={`/`} onClick={this.props.onSubmit} className="ui black button">Zapisz</Link>
            </React.Fragment>
        );
    };

    render() {
        return (
            <Modal
                actions={this.renderActions()}
                onDismiss={() => this.props.history.push("/")}
                history={this.props.history}
            />
        );
    };
}

export default Settings;
