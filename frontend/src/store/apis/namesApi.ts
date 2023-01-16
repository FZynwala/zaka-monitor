import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ChangeNamesRequestBody, Names } from 'types';
import { baseApiUrl } from '../../config/config';

export const namesApi = createApi({
    reducerPath: 'names',
    tagTypes: ['NAMES'],
    baseQuery: fetchBaseQuery({
        baseUrl: baseApiUrl,
    }),
    endpoints(buldier) {
        return {
            fetchNames: buldier.query<Names, void>({
                providesTags: ['NAMES'],
                query: () => {
                    return {
                        url: '/sensor',
                        method: 'GET',
                    };
                },
            }),
            changeNames: buldier.mutation<ChangeNamesRequestBody, void>({
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
