import React from 'react';
import { Icon, SemanticICONS } from 'semantic-ui-react';
import './FooterMenuItem.css';

type FooterMenuItemProps = {
    icon?: SemanticICONS;
    label?: string;
};

export const FooterMenuItem: React.FC<FooterMenuItemProps> = ({ icon, label }) => {
    return (
        <div className={'footer-menu-item'}>
            <Icon name={icon} fitted={true} size={'large'} />
            {label && <div className={'label'}>{label}</div>}
        </div>
    );
};
