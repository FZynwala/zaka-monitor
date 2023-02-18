import { LoadingComponent } from 'components/loading-component/LoadingComponent';
import { ErrorNotification } from 'components/notifications/ErrorNotification';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { changePath, useFetchWeatherQuery } from '../../store';
import { WeatherComponentUi } from './ui/WeatherComponentUi';

export const WeatherComponent: React.FC = () => {
    const { data: weather, isLoading, isError } = useFetchWeatherQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changePath('/weather'));
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
                <WeatherComponentUi weather={weather} />
            )}
        </>
    );
};
