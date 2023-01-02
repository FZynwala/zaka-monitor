import React from 'react';
import { trackPromise } from 'react-promise-tracker';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { fetchToday, postCurrentPath } from '../actions';
import './Header.css';

const Header = ({ fetchToday, postCurrentPath }) => {
    const path = useSelector((state) => state.path);
    const history = useHistory();

    const onFetchClick = () => {
        trackPromise(fetchToday());
    };

    const onBackClick = () => {
        history.push('/');
        postCurrentPath('/');
    };

    return (
        <div className="">
            <h2 className="ui center aligned header font" style={{ marginTop: '5px' }}>
                <div className="image-header">
                    <img src="./zaka-monitor-logo.png" width={150} height={91} />
                </div>
                ZAKA MONITOR
            </h2>
            <div className="button-margins">
                {path !== '/history' ? (
                    <button onClick={onFetchClick} className="ui green button">
                        <i className="sync icon large u-mr"></i>
                    </button>
                ) : (
                    <button onClick={onBackClick} className="ui gray button">
                        <Icon name={'backward'} size={'large'} fitted />
                    </button>
                )}
            </div>
        </div>
    );
};

export default connect(null, { fetchToday, postCurrentPath })(Header);
