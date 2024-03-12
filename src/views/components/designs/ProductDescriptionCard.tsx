import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Icon } from '../functional/Icon';

export const ProductDescrptionCard = ({ item, index }: any) => {
    return (
        <View>
            <View style={styles.basicDescriptionContainer}>
                <View style={styles.brandCartShareContainer}>
                    <View style={styles.brandContainer}>
                        <Text style={styles.brandText}>VATIKA SAREES</Text>
                    </View>
                    <View style={styles.heartContainer}>
                        <Icon type='AntDesign' name="hearto" size={18} color={Colors.P_TEXT} />
                    </View>
                    <View style={styles.shareContainer}>
                        <Icon type='AntDesign' name="sharealt" size={18} color={Colors.P_TEXT} />
                    </View>
                </View>
                <View style={styles.priceDescriptionContainer}>
                    <View style={styles.discountPriceContainer}>
                        <Text style={styles.discountText}>R3500</Text>
                    </View>
                    <View style={styles.originalPriceContainer}>
                        <Text style={styles.originalText}>R3500</Text>
                    </View>
                    <View style={styles.discountPercentageContainer}>
                        <Text style={styles.discountPercentageText}>R3500</Text>
                    </View>
                </View>
                <Text style={styles.availableColorsText}>Available Colors</Text>
                <View style={styles.sareeScrollContainer}>
                    <View style={styles.sareeContainer}>
                        <Image source={IMAGES.appLogo} style={styles.image} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    imageContainer: {
        height: hs(409),
        width: ws(375),
    },
    selectSizeText: {
        fontSize: 12,
        color: '#333333',
        fontWeight: '500',
    },
    selectSizeTextContainer: {
        height: hs(19),
        width: ws(64),
        marginHorizontal: ws(16),
        marginTop: hs(13)
    },
    sareeContainer: {
        height: hs(40),
        width: ws(40),
    },
    sareeScrollContainer: {
        width: ws(375),
        flexDirection: 'row',
        marginTop: hs(10),
        marginHorizontal: 16
    },
    originalPriceContainer: {
        height: hs(19),
        width: ws(45),
        marginLeft: ws(10),
        marginVertical: hs(12)
    },
    discountPercentageContainer: {
        height: hs(19),
        width: ws(40),
        marginLeft: ws(8),
        marginVertical: hs(12)
    },
    heartContainer: {
        height: hs(28),
        width: ws(28),
        marginTop: hs(13),
        marginHorizontal: ws(5)
    },
    shareContainer: {
        height: hs(28),
        width: ws(28),
        marginTop: hs(13),
        marginHorizontal: ws(2)
    },
    brandCartShareContainer: {
        width: ws(375),
        flexDirection: 'row'
    },
    priceDescriptionContainer: {
        width: ws(375),
        flexDirection: 'row',
    },
    basicDescriptionContainer: {
        height: hs(175),
        width: ws(375),
    },
    brandContainer: {
        height: hs(20),
        width: '70%',
        marginHorizontal: ws(16),
        marginTop: hs(12)
    },
    discountPriceContainer: {
        height: hs(32),
        width: ws(62),
        marginLeft: ws(16),
        marginTop: hs(6)
    },
    brandText: {
        fontSize: 12,
        color: colors.P_TEXT,
        fontWeight: '500',
        fontFamily:fontsConfig.POPPINS_REGULAR,
    },
    discountText: {
        fontSize: 20,
        color:colors.P_TEXT,
        fontWeight: '500',
        fontFamily:fontsConfig.POPPINS_REGULAR,
    },
    availableColorsText: {
        height: hs(19),
        width: ws(104),
        marginHorizontal: ws(16),
        fontSize: 12,
        marginTop: hs(15),
        color: colors.P_TEXT,
        fontWeight: '500',
        fontFamily:fontsConfig.POPPINS_REGULAR,
    },
    originalText: {
        fontSize: 12,
        color: colors.T_TEXT,
        fontWeight: '400',
        fontFamily:fontsConfig.POPPINS_REGULAR,
    },
    discountPercentageText: {
        fontSize: 12,
        color:colors.RED,
        fontWeight: '500',
        fontFamily:fontsConfig.POPPINS_REGULAR,
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 5
    }
})