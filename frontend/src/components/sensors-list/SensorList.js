import React from 'react';
import { useFetchNamesQuery, useFetchTodayQuery } from '../../store';
import { LoadingComponent } from '../LoadingComponent';
import { SensorsListUi } from './ui/SensorsListUi';

export const SensorsList = () => {
    const { data, isFetching } = useFetchTodayQuery();
    const { data: sensorsNames, isFetching: isFetchingNames } = useFetchNamesQuery();

    return (
        <>
            {isFetching || isFetchingNames ? (
                <LoadingComponent />
            ) : (
                <SensorsListUi today={data.today} sensorsNames={sensorsNames} />
            )}
        </>
    );
};
