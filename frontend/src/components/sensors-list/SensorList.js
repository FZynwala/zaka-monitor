import React from 'react';
import { useFetchNamesQuery, useFetchTodayQuery } from '../../store';
import { LoadingComponent } from '../LoadingComponent';
import { ErrorNotification } from '../notifications/ErrorNotification';
import { SensorsListUi } from './ui/SensorsListUi';

export const SensorsList = () => {
    const { data, isFetching: isFetchingToday, isError: isErrorToday } = useFetchTodayQuery();
    const { data: sensorsNames, isFetching: isFetchingNames, isError: isErrorNames } = useFetchNamesQuery();

    const isError = isErrorNames || isErrorToday;
    const isFetching = isFetchingToday || isFetchingNames;

    return (
        <>
            {isFetching ? (
                <LoadingComponent />
            ) : isError ? (
                <ErrorNotification
                    content={'Błąd połączenia. Spróbuj ponownie za chwile.'}
                    header={'Błąd połączenia'}
                />
            ) : (
                <SensorsListUi today={data.today} sensorsNames={sensorsNames} />
            )}
        </>
    );
};
