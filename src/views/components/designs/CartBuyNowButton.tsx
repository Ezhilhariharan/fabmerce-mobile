import { IMAGES } from '@assets/images/png';
import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../functional/Icon';

const CartBuyNowButton = ({ item, index }: any) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.addButtonContainer}>
                <Icon type='Feather' name="shopping-cart" size={10} color="black" style={styles.cartIcon} />
                <Text style={[styles.descriptionText]}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyButtonContainer}>
                <Icon type='MaterialIcons' name="arrow-forward-ios" size={8} color="white" style={styles.rightArrow} />
                <Icon type='MaterialIcons' name="arrow-forward-ios" size={8} color="white" style={styles.rightArrowRight} />
                <Text style={[styles.buynowText]}>Buy Now</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({

    buttonContainer: {
        width: ws(375),
        marginHorizontal: hs(16),
        position: 'absolute',
        flexDirection: 'row',
        bottom: hs(10)
    },
    rightArrowRight: {
        marginTop: hs(14)
    },
    rightArrow: {
        marginTop: hs(14),
        marginLeft: ws(37)
    },
    buyButtonContainer: {
        height: hs(40),
        width: ws(165),
        flexDirection: 'row',
        backgroundColor: '#072255',
        marginLeft: ws(13),
        borderRadius: 5
    },
    cartIcon: {
        marginTop: hs(14),
        marginLeft: ws(37)
    },
    addButtonContainer: {
        height: hs(40),
        width: ws(165),
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.15)',
        borderRadius: 5
    },
    descriptionText: {
        fontSize: 12,
        marginHorizontal: hs(2),
        marginVertical: hs(10),
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '600',
        color: 'black',
    },
    buynowText: {
        fontSize: 12,
        marginHorizontal: hs(2),
        marginVertical: hs(10),
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '600',
        color: 'white',
    },
})

export default CartBuyNowButton;