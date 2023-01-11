import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { dayApi } from './apis/dayApi';
import { namesApi } from './apis/namesApi.js';
import { pathReducer } from './slices';

export const store = configureStore({
    reducer: {
        [dayApi.reducerPath]: dayApi.reducer,
        [namesApi.reducerPath]: namesApi.reducer,
        path: pathReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(dayApi.middleware).concat(namesApi.middleware);
    },
});

setupListeners(store.dispatch);
console.log(store.getState());

export { dayApi } from './apis/dayApi';
export { useFetchDayByDateMutation, useFetchTodayQuery } from './apis/dayApi.js';
export { useChangeNamesMutation, useFetchNamesQuery } from './apis/namesApi.js';
export { changePath } from './slices';
