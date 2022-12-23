import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchName } from '../actions';

import Modal from './Modal';

class Settings extends React.Component {
    renderActions() {
        return (
            <React.Fragment>
                <Link to={`/`} onClick={this.props.onSubmit} className="ui black button">
                    Zapisz
                </Link>
            </React.Fragment>
        );
    }

    render() {
        return (
            <Modal
                actions={this.renderActions()}
                onDismiss={() => this.props.history.push('/')}
                history={this.props.history}
                names={this.props.names}
            />
        );
    }
}

const mapStateToProps = (state) => {
    if (state.data.names) {
        return {
            names: state.names,
        };
    } else {
        return {
            names: state.names,
        };
    }
};

export default connect(mapStateToProps, {
    fetchName,
})(Settings);
