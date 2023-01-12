import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseApiUrl } from '../../config/config';

export const namesApi = createApi({
    reducerPath: 'names',
    baseQuery: fetchBaseQuery({
        baseUrl: baseApiUrl,
    }),
    endpoints(buldier) {
        return {
            fetchNames: buldier.query({
                providesTags: ['NAMES'],
                query: () => {
                    return {
                        url: '/sensor',
                        method: 'GET',
                    };
                },
            }),
            changeNames: buldier.mutation({
                invalidatesTags: ['NAMES'],
                query: (body) => {
                    return {
                        url: '/sensor',
                        method: 'POST',
                        body: body,
                    };
                },
            }),
        };
    },
});

export const { useFetchNamesQuery, useChangeNamesMutation } = namesApi;
