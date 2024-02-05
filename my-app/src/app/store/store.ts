import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import postsReducer from './reducers';

export const makeStore = () => configureStore({
    reducer: postsReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: thunk
            }
        })
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];