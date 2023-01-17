import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Today } from 'types';
import { baseApiUrl } from '../../config/config';

export const dayApi = createApi({
    reducerPath: 'day',
    tagTypes: ['TODAY'],
    baseQuery: fetchBaseQuery({
        baseUrl: baseApiUrl,
    }),
    endpoints(buldier) {
        return {
            fetchToday: buldier.query<Today, void>({
                providesTags: ['TODAY'],
                query: () => {
                    return {
                        url: '/',
                        method: 'GET',
                    };
                },
            }),
            fetchDayByDate: buldier.mutation({
                query: (date) => {
                    return {
                        url: '/day',
                        method: 'POST',
                        body: { date },
                    };
                },
            }),
        };
    },
});

export const { useFetchTodayQuery, useFetchDayByDateMutation } = dayApi;
