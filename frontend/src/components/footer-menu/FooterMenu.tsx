import React from 'react';
import { Link } from 'react-router-dom';
import { FooterMenuItem } from '../footer-menu-item/FooterMenuItem';
import './FooterMenu.css';

export const FooterMenu: React.FC = () => {
    return (
        <div className="footer">
            <Link to={'/history'}>
                <FooterMenuItem icon={'history'} label={''} />
            </Link>
        </div>
    );
};
