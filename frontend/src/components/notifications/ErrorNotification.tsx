import React from 'react';
import { Message } from 'semantic-ui-react';
import './ErrorNotification.css';

type ErrorNotificationProps = {
    content: string;
    header: string;
};

export const ErrorNotification: React.FC<ErrorNotificationProps> = ({ content, header }) => {
    return (
        <>
            <Message negative className={'u-mh'}>
                <Message.Header>{header}</Message.Header>
                <p>{content}</p>
            </Message>
        </>
    );
};
