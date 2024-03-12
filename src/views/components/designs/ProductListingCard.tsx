import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { hs, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { Icon } from '../functional/Icon';

const ProductListingCard = ({ item, index }: any) => {
    const { is_primary, discount_value } = item.pricings
    console.log("price",item?.max_price)
    return (
        <View style={styles.container} key={index}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.profile_photo }} style={styles.image} />
                <View style={styles.heartIcon}>
                    <Icon type='AntDesign' name="hearto" size={13} color={colors.P_TEXT} style={{ marginHorizontal: hs(6), marginVertical: hs(5) }} />
                </View>
                <View style={styles.brandContainer}>
                    <Text numberOfLines={1} style={styles.brandText}>{item.title}</Text>
                </View>
                <View style={styles.categoryContainer}>
                    <Text numberOfLines={1} style={styles.categoryText}>{item.brand_name}</Text>
                </View>
                <View style={styles.priceDiscountContainer}>
                    <Icon type='FontAwesome' name="rupee" size={16} color={colors.P_TEXT} style={{ marginLeft: ws(16), marginTop: hs(5) }} />
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceText}>{item?.max_price}</Text>
                    </View>
                    <View style={styles.discountContainer}>
                        <Text style={styles.discountText}>{is_primary && discount_value ? `(${discount_value}% OFF)` : ''}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    imageContainer: {
        height: hs(200),
        width: ws(165),
        resizeMode: 'stretch'
    },
    container: {
        minHeight: hs(280),
        marginLeft: ws(16),
        marginTop: hs(12)
    },
    discountContainer: {
        height: hs(19),
        width: ws(59),
        marginLeft: ws(6),
        marginTop: hs(2)
    },
    discountText: {
        fontSize: 12,
        color:colors.RED,
        fontWeight: '500',
        fontFamily: fontsConfig.POPPINS_REGULAR,
    },
    heartIcon: {
        height: hs(24),
        width: ws(24),
        position: 'absolute',
        borderRadius: 100,
        top: hs(166),
        marginLeft: ws(131),
        backgroundColor:colors.P_BG
    },
    brandContainer: {
        width: ws(165),
        height: hs(19),
        marginTop: hs(10)
    },
    priceText: {
        fontSize: 14,
        color: colors.P_TEXT,
        fontWeight: '500',
        fontFamily: fontsConfig.POPPINS_REGULAR,
    },
    brandText: {
        fontSize: 12,
        color: colors.P_TEXT,
        alignSelf: 'center',
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: fontsConfig.POPPINS_REGULAR,
    },
    categoryContainer: {
        height: hs(16),
        width: ws(165),
        marginTop: hs(2)
    },
    priceContainer: {
        height: hs(22),
        width: ws(65),
        marginLeft: ws(3),
    },
    categoryText: {
        fontSize: 10,
        color: colors.T_TEXT,
        alignSelf: 'center',
        fontWeight: '400',
        fontFamily: fontsConfig.POPPINS_REGULAR,
    },
    priceDiscountContainer: {
        flexDirection: 'row'
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        borderRadius: 20
    }
})

export default ProductListingCard;


// {"account_id": 1,
//  "brand_id": 1,
//  "brand_name": "Teemaja",
//  "brand_slug": "teemaja-1",
//  "categories": "CLOTHING",
//  "created_at": "2022-07-15T10:48:50.180Z",
//  "deleted_at": null,
//  "description": null,
//  "discount": null,
//  "discount_price": 299,
//  "gallary_photos": ["https://assets.preprod.aptonshops.com/Account/1/Brand/1/ProductParent/1034/Gallary_photos/gallary_photo_0_1657882131.jpg"],
//  "id": 1034,
//  "is_primary": 1,
//  "is_published": null,
//  "max_price": 299,
//  "pricings": {"discount_price": 299,
//  "discount_value": null,
//  "is_primary": 1,
//  "max_price": 299},
//  "profile_photo": "https://assets.preprod.aptonshops.com/Account/1/Brand/1/ProductParent/1034/Profile_photo/profile_photo_1657882130.jpg",
//  "short_description": null,
//  "slug": "teemaja-call-me-just-sir-white-tshirt-for-men-1034",
//  "status": 1,
//  "stock_status": "instock",
//  "title": "Teemaja Call Me Just Sir White Tshirt For Men"}