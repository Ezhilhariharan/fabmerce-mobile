import fontsConfig from '@config/fonts.config';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from '../functional/Icon';
import colors from '@config/colors.config';

const SortFilter = () => {
    return (
        <View style={styles.container}>
            <View style={styles.sortAndFilterMainContainer}>
                <View style={styles.sortAndFilterIconContainer}>
                    <Icon type='MaterialIcons' name="sort" size={14} color={colors.P_TEXT} />
                </View>
                <TouchableOpacity onPress={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.SORT_POPUP)} style={styles.sortAndFilterTextContainer}>
                    <Text style={styles.sortAndFilterText}>SORT BY</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sortAndFilterMainContainer}>
                <View style={styles.sortAndFilterIconContainer}>
                    <Icon type='AntDesign' name="filter" size={14} color={colors.P_TEXT} />
                </View>
                <View style={styles.sortAndFilterTextContainer}>
                    <Text style={styles.sortAndFilterText}>FILTER</Text>
                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: hs(40),
        backgroundColor: colors.P_BG,
        width: wp('100%'),
        flexDirection: 'row'
    },
    sortAndFilterText: {
        fontSize: 10,
        color: colors.P_TEXT,
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight:'400'
    },
    sortAndFilterMainContainer: {
        height: hs(40),
        width: wp('50%'),
        flexDirection: 'row',
        borderRightWidth: 1,
        borderColor: colors.T_BG
    },
    sortAndFilterIconContainer: {
        marginLeft: ws(60),
        marginVertical: hs(12)
    },
    sortAndFilterTextContainer: {
        marginVertical: hs(12),
        marginHorizontal: ws(5)
    },
})

export default SortFilter;