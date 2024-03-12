import { IMAGES } from '@assets/images/png';
import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const EmptyCartCard = () => {
    return (
        <>
            <View style={styles.imageContainer}>
                <Image source={IMAGES.EmptyCartImage} style={styles.image} />
            </View>
            <Text style={styles.cartEmptyText}>Your Cart is Empty</Text>
            <Text style={styles.wishesText}>Hang Your Wishes Where You Can</Text>
            <Text style={styles.wishesText}>make them come true</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.shoppingText}>Continue Shopping</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wishListButton}>
                    <Text style={styles.wishListText}>Add From Wishlist</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    imageContainer: {
        height: hs(150),
        width: ws(150),
        marginTop: hs(101),
        marginHorizontal: ws(112)
    },
    image: {
        height: '100%',
        width: '100%',
    },
    cartEmptyText: {
        fontSize: 16,
        alignSelf: 'center',
        marginTop: hs(46),
        color: '#000000',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400'
    },
    wishesText: {
        fontSize: 12,
        alignSelf: 'center',
        marginTop: hs(10),
        color: '#999999',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400'
    },
    shoppingText: {
        fontSize: 12,
        alignSelf: 'center',
        marginTop: hs(10),
        color: '#072255',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '600'
    },
    wishListText: {
        fontSize: 12,
        alignSelf: 'center',
        marginTop: hs(10),
        color: '#FFFFFF',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '600'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginLeft: ws(16),
        marginTop: hs(217)
    },
    continueButton: {
        height: hs(40),
        width: ws(165),
        borderWidth: 1,
        borderColor: '#072255',
        borderRadius: 10
    },
    wishListButton: {
        height: hs(40),
        width: ws(165),
        borderWidth: 1,
        borderColor: '#072255',
        borderRadius: 10,
        marginHorizontal: ws(10),
        backgroundColor: '#072255'
    },
})

export default EmptyCartCard;