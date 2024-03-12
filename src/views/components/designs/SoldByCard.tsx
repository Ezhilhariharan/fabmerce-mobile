import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../functional/Icon';

const SoldByCard = ({ item, index }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={IMAGES.appLogo} style={styles.image} />
            </View>
            <View style={styles.centerMainContainer}>
                <Text style={[styles.buynowText]}>NIBIN Fashions</Text>
                <View style={styles.centerContainer}>
                    <Text style={[styles.ratingText]}>3.5</Text>
                    <Icon type='AntDesign' name="star" size={10} color="#ED9611" style={{ marginTop: hs(3), marginLeft:ws(2) }} />
                </View>
                <Text style={[styles.followersCountText]}>3.5</Text>
                <Text style={[styles.productCountText]}>3.5</Text>
                <Text style={[styles.totalRatingsText]}>200</Text>
                <Text style={[styles.RatingsText]}>ratings</Text>
                <Text style={[styles.followersText]}>Followers</Text>
                <Text style={[styles.productsText]}>Products</Text>
            </View>
            <TouchableOpacity style={styles.viewButtonContainer}>
                <Text style={[styles.viewStoreText]}>View Store</Text>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: hs(100),
        width: ws(375),
        marginHorizontal: hs(16),
        flexDirection: 'row',
        marginTop: hs(18),
    },
    imageContainer: {
        height: hs(50),
        width: ws(40),
    },
    centerMainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '60%',
    },
    centerContainer: {
        height: hs(20),
        width: ws(40),
        borderWidth: 1,
        borderColor: '#999999',
        marginLeft: ws(30),
        marginTop: hs(10),
        borderRadius: 10,
        flexDirection: 'row'
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
    },
    buynowText: {
        fontSize: 12,
        width: '70%',
        height: hs(18),
        marginLeft: ws(11),
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '500',
        color: colors.P_TEXT,
    },
    ratingText: {
        fontSize: 12,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '500',
        color:colors.P_TEXT,
        marginLeft: ws(5)
    },
    followersCountText: {
        fontSize: 12,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '500',
        color:colors.P_TEXT,
        marginLeft: ws(29),
        marginVertical: hs(10)
    },
    productCountText: {
        fontSize: 12,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '500',
        color: colors.P_TEXT,
        marginLeft: ws(45),
        marginVertical: hs(10)
    },
    totalRatingsText: {
        fontSize: 12,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '500',
        color: colors.P_TEXT,
        marginLeft: ws(30),
    },
    RatingsText: {
        fontSize: 12,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '500',
        color: colors.P_TEXT,
        marginLeft: ws(2),
    },
    followersText: {
        fontSize: 12,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '500',
        color:colors.P_TEXT,
        marginLeft: ws(10),
    },
    productsText: {
        fontSize: 12,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '500',
        color: colors.P_TEXT,
        marginLeft: ws(10),
    },
    viewStoreText: {
        fontSize: 12,
        marginVertical: hs(3),
        textAlign: 'center',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '500',
        color: '#072255',
    },
    viewButtonContainer: {
        height: hs(30),
        width: ws(80),
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#072255'
    },
})

export default SoldByCard;