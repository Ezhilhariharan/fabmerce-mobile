import { IMAGES } from '@assets/images/png';
import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../functional/Icon';
import colors from '@config/colors.config';

const LocationCard = ({ changeText }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.locationIcon}>
                <Icon type='EvilIcons' name="location" size={20} color={colors.P_TEXT} />
            </View>
            <View style={styles.deliverTextContainer}>
                <Text style={styles.addressText}>deliver to</Text>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.addressText}>Anand</Text>
            </View>
            <View style={styles.underscoreContainer}>
                <Text style={styles.addressText}>-</Text>
            </View>
            <View style={styles.addressContainer}>
                <Text style={styles.addressText}>Address</Text>
            </View>
            <View style={styles.pincodeContainer}>
                <Text style={styles.addressText}>636002</Text>
            </View>
            <View style={styles.downIconContainer}>
                <Icon type='AntDesign' name="down" size={12} color={colors.P_TEXT} />
            </View>
            {changeText ? (
                <TouchableOpacity style={styles.changeTextContainer}>
                    <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>
            ) : (

                <View style={styles.changeTextContainer}>
                </View>
            )}
        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        height: hs(30),
        width: wp('100%'),
        flexDirection: 'row',
        backgroundColor:colors.T_BG
    },
    addressText: {
        fontSize: 9,
        color: colors.P_TEXT,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400'
    },
    underscoreContainer: {
        marginLeft: ws(2),
        marginTop: hs(7)
    },
    locationIcon: {
        marginLeft: ws(16),
        marginTop: hs(7)
    },
    deliverTextContainer: {
        marginLeft: ws(8),
        marginTop: hs(7)
    },
    nameContainer: {
        marginLeft: ws(2),
        marginTop: hs(7)
    },
    addressContainer: {
        marginLeft: ws(2),
        marginTop: hs(7),
        width: ws(60)
    },
    pincodeContainer: {
        marginLeft: ws(2),
        marginTop: hs(7)
    },
    downIconContainer: {
        marginLeft: ws(4),
        marginTop: hs(7)
    },
    changeTextContainer: {
        marginLeft: ws(86),
        marginTop: hs(7)
    },
    changeText: {
        fontSize: 9,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        color: '#F6000F'
    },

})

export default LocationCard;