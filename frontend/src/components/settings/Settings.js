import React from 'react';
import { useFetchNamesQuery } from '../../store';
import { LoadingComponent } from '../LoadingComponent';

import { SettingsUi } from './ui/SettingsUi';

export const Settings = (props) => {
    const { data: names, isLoading } = useFetchNamesQuery();

    return <>{isLoading ? <LoadingComponent /> : <SettingsUi names={names} />}</>;
};
