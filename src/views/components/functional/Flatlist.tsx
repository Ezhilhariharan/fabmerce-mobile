import React from 'react';
import { FlatList as NativeFlatList, FlatListProps, Image, View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { hp, hs, ms, wp, ws } from '@utilis/designs/measurements.design';
import design from '@config/design.config';
import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';


interface ICategoryBasedServiceList {
    data: any[];
    numColumns?: number | undefined;
    emptyLabel?: string;
}

export const renderEmpty = (emptyLabel?: string, container?: StyleProp<ViewStyle>) => {
    if (!emptyLabel) return null
    return (
        <View style={[styles.container, container]}>
            <Text style={design.TEXT_STYLE_14_B}>{emptyLabel}</Text>
        </View>
    )
}

export const FlatList = ({ data, renderItem, numColumns, emptyLabel, ...rest }: ICategoryBasedServiceList & FlatListProps<any>) => {
    return (
        <NativeFlatList
            data={data}
            renderItem={renderItem}
            ListEmptyComponent={() => renderEmpty(emptyLabel)}
            keyExtractor={(item, index) => `${index}`}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            numColumns={numColumns}
            initialNumToRender={3}
            maxToRenderPerBatch={3}
            onEndReachedThreshold={0.5}
            {...rest}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        height: hp('80%'),
        width: wp('100%'),
        backgroundColor: colors.TRANSPARENT,
        borderRadius: ms(8),
        alignItems: "center",
        justifyContent: 'center'
    },
})