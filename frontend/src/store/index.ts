import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { dayApi } from './apis/dayApi';
import { namesApi } from './apis/namesApi';
import { weatherApi } from './apis/weatherApi';
import { pathReducer } from './slices';

export const store = configureStore({
    reducer: {
        [dayApi.reducerPath]: dayApi.reducer,
        [namesApi.reducerPath]: namesApi.reducer,
        [weatherApi.reducerPath]: weatherApi.reducer,
        path: pathReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(dayApi.middleware)
            .concat(namesApi.middleware)
            .concat(weatherApi.middleware);
    },
});

setupListeners(store.dispatch);

export { dayApi, useFetchDayByDateMutation, useFetchTodayQuery } from './apis/dayApi';
export { useChangeNamesMutation, useFetchNamesQuery } from './apis/namesApi';
export { useFetchWeatherQuery } from './apis/weatherApi';
export { changePath } from './slices';

export type RootState = ReturnType<typeof store.getState>;
