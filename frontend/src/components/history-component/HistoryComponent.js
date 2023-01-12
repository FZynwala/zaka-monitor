import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { changePath, useFetchNamesQuery } from '../../store';
import { LoadingComponent } from '../LoadingComponent';
import { ErrorNotification } from '../notifications/ErrorNotification';
import './HistoryComponent.css';
import { HistoryComponentUi } from './ui/HistoryComponentUi';

export const HistoryComponent = () => {
    const { data: names, isLoading, isError } = useFetchNamesQuery();
    const match = useRouteMatch();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changePath('/history'));
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingComponent />
            ) : isError ? (
                <ErrorNotification
                    content={'Błąd połączenia. Spróbuj ponownie za chwile.'}
                    header={'Błąd połączenia'}
                />
            ) : (
                <HistoryComponentUi names={names} />
            )}
        </>
    );
};
