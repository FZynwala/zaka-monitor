import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { changePath, store, useFetchNamesQuery } from '../../store';
import { LoadingComponent } from '../LoadingComponent';
import './HistoryComponent.css';
import { HistoryComponentUi } from './ui/HistoryComponentUi';

export const HistoryComponent = () => {
    const { data: names, isLoading } = useFetchNamesQuery();
    const match = useRouteMatch();
    const dispatch = useDispatch();

    console.log(store.getState());

    useEffect(() => {
        dispatch(changePath('/history'));
    }, []);

    return <>{isLoading ? <LoadingComponent /> : <HistoryComponentUi names={names} />}</>;
};
