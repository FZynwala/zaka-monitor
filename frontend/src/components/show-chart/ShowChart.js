import React from 'react';
import { useFetchTodayQuery } from '../../store';
import { LoadingComponent } from '../LoadingComponent';
import './ShowChart.css';
import { ShowChartUi } from './ui/ShowChartUi';

export const ShowChart = () => {
    const { data, isLoading } = useFetchTodayQuery();

    return <>{isLoading ? <LoadingComponent /> : <ShowChartUi data={data} />}</>;
};
