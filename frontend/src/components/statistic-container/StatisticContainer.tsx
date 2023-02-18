import React from 'react';

export const StatisticContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className={'statistic-container'}>{children}</div>;
};
