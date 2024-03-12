import { IMAGES } from '@assets/images/png';
import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../functional/Icon';

const CartProductDetails = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={IMAGES.appLogo} style={styles.image} />
            </View>
            <View style={styles.overallContainer}>
                <Text style={styles.brandText}>deliver to</Text>
                <Text style={styles.categoryText}>deliver to</Text>
                <View style={styles.sizeMainContainer}>
                    <TouchableOpacity style={styles.sizeContainer}>
                        <Text style={styles.sizeText}>Size 40</Text>
                        <Icon type='AntDesign' name="down" size={14} color="#000000" style={styles.iconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.qtyContainer}>
                        <Text style={styles.sizeText}>Size 40</Text>
                        <Icon type='AntDesign' name="down" size={14} color="#000000" style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.stockText}>in stock</Text>
                <View style={styles.priceOverallContainer}>
                    <Text style={styles.discountPrice}>Size 40</Text>
                    <Text style={styles.originalPrice}>Size 40</Text>
                    <Text style={styles.offerText}>25% off</Text>
                </View>
                <View style={styles.bottomLine} />
                <View style={styles.bottomContainer}>
                    <Text style={styles.saveForLaterText}>Save For Later</Text>
                    <Icon type='AntDesign' name="delete" size={10} color="#999999" style={{ marginTop: hs(2) }} />
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        height: hs(172),
        width: ws(343),
        flexDirection: 'row',
        marginLeft: ws(16)
    },
    imageContainer: {
        height: hs(140),
        width: ws(100),
        marginLeft: ws(16),
        marginVertical: hs(17)
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 20
    },
    brandText: {
        fontSize: 14,
        color: '#000000',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '500'
    },
    categoryText: {
        fontSize: 10,
        color: '#999999',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        marginTop: hs(3)
    },
    overallContainer: {
        marginTop: hs(15),
        marginLeft: ws(13)
    },
    sizeText: {
        fontSize: 11,
        color: '#000000',
        marginLeft: ws(2),
        marginTop: hs(1),
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
    },
    stockText: {
        fontSize: 9,
        marginTop: hs(7),
        color: '#159400',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
    },
    iconStyle: {
        marginLeft: ws(3),
        marginTop: hs(2)
    },
    discountPrice: {
        fontSize: 12,
        color: '#000000',
        height: hs(18),
        minWidth: ws(49),
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '600',
    },
    originalPrice: {
        fontSize: 10,
        height: hs(15),
        width: ws(40),
        marginLeft: ws(5),
        color: '#999999',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
    },
    offerText: {
        fontSize: 10,
        height: hs(15),
        width: ws(36),
        marginLeft: ws(10),
        color: '#F6000F',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
    },
    bottomLine: {
        width: ws(197),
        borderWidth: 1,
        borderColor: '#DADADA',
        paddingHorizontal: ws(14),
        marginTop: hs(5)
    },
    sizeMainContainer: {
        flexDirection: 'row',
        marginTop: hs(11)
    },
    sizeContainer: {
        height: hs(20),
        width: ws(63),
        backgroundColor: '#999999',
        flexDirection: 'row',
        paddingHorizontal: ws(3)
    },
    qtyContainer: {
        height: hs(20),
        width: ws(63),
        backgroundColor: '#999999',
        flexDirection: 'row',
        paddingHorizontal: ws(3),
        marginHorizontal: ws(10)
    },
    priceOverallContainer: {
        flexDirection: 'row',
        marginTop: hs(6)
    },
    saveForLaterText: {
        fontSize: 10,
        color: '#999999',
        height: hs(15),
        width: ws(70),
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
    },
    bottomContainer: {
        flexDirection: 'row',
        marginLeft: ws(110)
    },
})

export default CartProductDetails;