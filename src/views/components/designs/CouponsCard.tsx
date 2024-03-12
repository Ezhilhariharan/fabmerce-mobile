import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CouponsCard = ({ item, index }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.emptyContainer}>
            </View>
            <View style={styles.cardContainer}>
                <Text numberOfLines={1} style={styles.nameCard}>Credit/Debit Cards</Text>
                <Text numberOfLines={1} style={styles.numberCard}>Credit/Debit Cards</Text>
            </View>
            <TouchableOpacity style={styles.applyContainer}>
                <Text  style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        height: hs(111),
        marginTop: hs(5),
        backgroundColor: colors.P_BG,
        width: wp('100%'),
        flexDirection: 'row'
    },
    numberCard: {
        fontSize: 10,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        color:colors.T_TEXT,
        paddingTop: hs(1),
    },
    cardContainer: {
        width: '70%',
        marginLeft: ws(5),
        marginTop: hs(25)
    },
    applyContainer: {
        width: ws(70),
        marginTop: hs(35),
           },
    emptyContainer: {
        height: hs(14),
        width: hs(14),
        borderWidth: 1,
        borderColor: colors.BLACK,
        borderRadius: 3,
        marginTop: hs(30),
        marginLeft: ws(16)
    },
    nameCard: {
        fontSize: 14,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        color: colors.P_TEXT
    },
    applyText: {
        fontSize: 14,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        color: colors.PRIMARY_COLOR
    },
    imageContainer: {
        height: hs(16),
        width: ws(48),
        alignSelf: 'center'
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
    },

})

export default CouponsCard;