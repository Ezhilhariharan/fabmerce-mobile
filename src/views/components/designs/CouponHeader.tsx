import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

const CouponHeader = ({ item, index }: any) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.nameCardMainContainer}
                placeholder="Enter Coupon Code"
            />
            <TouchableOpacity>
                <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        height: hs(85),
        backgroundColor: colors.P_BG,
        width: wp('100%'),
        flexDirection: 'row',
        alignItems: "center"
    },
       nameCardMainContainer: {
        width: ws(265),
        height: hs(40),
        marginHorizontal: ws(14),
        borderRadius: 5,
        paddingVertical:0,
        paddingHorizontal: 8,
        backgroundColor: colors.LIGHTGREY,
        alignItems: "center",
        color: colors.P_TEXT,
        fontSize: 13
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        borderRadius: 20
    },
    applyText: {
        marginHorizontal: 1.5,
        fontSize: 14,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        color: colors.PRIMARY_COLOR
    }
})

export default CouponHeader;