import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Modal } from '../../Modal';

export const SettingsUi = (props) => {
    const history = useHistory();
    const renderActions = () => {
        return (
            <React.Fragment>
                <Link to={`/`} onClick={props.onSubmit} className="ui black button">
                    Zapisz
                </Link>
            </React.Fragment>
        );
    };

    return (
        <Modal actions={renderActions()} onDismiss={() => history.push('/')} history={history} names={props.names} />
    );
};

// const mapStateToProps = (state) => {
//     if (state.data.names) {
//         return {
//             names: state.names,
//         };
//     } else {
//         return {
//             names: state.names,
//         };
//     }
// };

// export default connect(mapStateToProps, {
//     fetchName,
// })(Settings);
