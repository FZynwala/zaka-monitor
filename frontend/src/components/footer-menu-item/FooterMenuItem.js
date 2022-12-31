import React from 'react';
import { Icon } from 'semantic-ui-react';
import './FooterMenuItem.css';

const FooterMenuItem = ({ icon, label }) => {
    return (
        <div className={'footer-menu-item'}>
            <Icon name={icon} fitted={true} size={'large'} />
            <div className={'label'}>{label}</div>
        </div>
    );
};

export default FooterMenuItem;
