import { createSlice } from '@reduxjs/toolkit';

const pathSlice = createSlice({
    name: 'path',
    initialState: {
        path: '/',
    },
    reducers: {
        changePath(state, action) {
            state.path = action.payload;
        },
    },
});

export const { changePath } = pathSlice.actions;
export const pathReducer = pathSlice.reducer;
