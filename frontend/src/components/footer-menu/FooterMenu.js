import React from 'react';
import { Link } from 'react-router-dom';
import FooterMenuItem from '../footer-menu-item/FooterMenuItem';
import './FooterMenu.css';

const FooterMenu = ({}) => {
    return (
        <div className="footer">
            <Link to={'/history'}>
                <FooterMenuItem icon={'history'} label={'historia'} />
            </Link>
        </div>
    );
};

export default FooterMenu;
