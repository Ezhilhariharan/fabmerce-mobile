import { IMAGES } from '@assets/images/png';
import fontsConfig from '@config/fonts.config';
import { hs, ms, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import design from '@config/design.config';
import colors from '@config/colors.config';
import { Icon } from '../functional/Icon';

const ProductReviewCard = () => {
    return (
        <>
            <View style={{ flexDirection: 'row', marginTop:hs(16)}}>
                <View style={styles.imageContainer}>
                    <Image source={IMAGES.appLogo} style={design.IMAGE} />
                </View>
                <View>
                    <Text style={styles.orderText}>Name</Text>
                    <Text style={styles.daysText}>Name</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.ratingText}>Name</Text>
                        <Icon type={"AntDesign"} name={"star"} size={ms(10)} color={'#ED9611'} style={{ marginTop: hs(11), marginLeft: ws(3) }} />
                    </View>
                    <Text numberOfLines={2} style={[styles.descriptionText]}>njkjknnnnjjjjjjjjjfvenjkjjjjjjjjjjjjjjjjjjjjjjjjjjjjkvrrrrrbbjvvvvvvvvvvvvvvvvvkjkgiu</Text>
                </View>
            </View>
            <View style={styles.bottomLine} />
        </>
    );
}

const styles = StyleSheet.create({

    imageContainer: {
        height: hs(30),
        width: ws(30),
        borderRadius: 10,
        marginLeft: ws(16),
        marginTop: hs(18),
    },
    bottomLine: {
        width: ws(343),
        borderWidth: 1,
        borderColor: '#DADADA',
        marginHorizontal: ws(16),
        marginTop: hs(10)
    },
    descriptionText: {
        fontSize: 12,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        width: ws(303),
        color: colors.P_TEXT,
        marginLeft: ws(8),
        marginTop: hs(5)
    },
    orderText: {
        fontSize: 12,
        color: colors.P_TEXT,
        marginHorizontal: hs(10),
        marginTop: hs(18),
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '500'
    },
    daysText: {
        fontSize: 8,
        color: '#999999',
        marginHorizontal: hs(10),
        marginTop: hs(1),
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400'
    },
    ratingText: {
        fontSize: 12,
        color: colors.P_TEXT,
        marginLeft: hs(10),
        marginTop: hs(5),
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '500'
    },
})

export default ProductReviewCard;