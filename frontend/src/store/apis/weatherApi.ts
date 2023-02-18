import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Weather } from 'types';
import { baseApiUrl } from '../../config/config';

export const weatherApi = createApi({
    reducerPath: 'weather',
    tagTypes: ['WEATHER'],
    baseQuery: fetchBaseQuery({
        baseUrl: baseApiUrl,
    }),
    endpoints(buldier) {
        return {
            fetchWeather: buldier.query<Weather, void>({
                providesTags: ['WEATHER'],
                query: () => {
                    return {
                        url: '/weather',
                        method: 'GET',
                    };
                },
            }),
        };
    },
});

export const { useFetchWeatherQuery } = weatherApi;
