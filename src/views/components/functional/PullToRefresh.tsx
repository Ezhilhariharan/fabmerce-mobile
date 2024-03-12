import colors from '@config/colors.config';
import { hs, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { RefreshControl, StyleProp, StyleSheet, View, } from 'react-native';

interface IPullToRefresh {
    label?: string;
    refreshing: boolean;
    onRefresh: () => void;
}

export const PullToRefresh = ({
    refreshing,
    onRefresh,
    label,
    ...props
}: IPullToRefresh) => {
    return (
        <RefreshControl
            onRefresh={onRefresh}
            refreshing={refreshing}
            title={label ?? 'Pull to refresh'}
            tintColor={colors.WHITE}
            titleColor={colors.WHITE}
            {...props}
        />
    )
}