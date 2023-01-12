import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseApiUrl } from '../../config/config';

export const dayApi = createApi({
    reducerPath: 'day',
    baseQuery: fetchBaseQuery({
        baseUrl: baseApiUrl,
    }),
    endpoints(buldier) {
        return {
            fetchToday: buldier.query({
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

export const { useFetchTodayQuery, useFetchDayByDateMutation, useUpdateTodayMutation } = dayApi;
