import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { changePath, useFetchNamesQuery } from '../../store';
import { LoadingComponent } from '../loading-component/LoadingComponent';
import { ErrorNotification } from '../notifications/ErrorNotification';
import './HistoryComponent.css';
import { HistoryComponentUi } from './ui/HistoryComponentUi';

export const HistoryComponent: React.FC = () => {
    const { data: names, isLoading, isError } = useFetchNamesQuery();
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
