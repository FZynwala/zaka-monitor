import React from 'react';
import { Message } from 'semantic-ui-react';
import './ErrorNotification.css';

export const ErrorNotification = ({ content, header }) => {
    return (
        <>
            <Message negative className={'u-mh'}>
                <Message.Header>{header}</Message.Header>
                <p>{content}</p>
            </Message>
        </>
    );
};
