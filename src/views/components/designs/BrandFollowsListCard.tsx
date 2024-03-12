import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { hp, hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Icon } from '../functional/Icon';


const BrandFollowCard = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.brandImageContainer}>
                    <Image source={IMAGES.appLogo} style={styles.Image} />
                </View>
                <View style={styles.brandNameContainer}>
                    <View>
                        <Text style={styles.brandNameText}>Push Notification</Text>
                    </View>
                    <View style={styles.productsCountOverallContainer}>
                        <View style={styles.productCountDotContainer} />
                        <View >
                            <Text style={styles.productsCountText}>85 Products</Text>
                        </View>
                        <View style={styles.followersDotContainer} />
                        <View>
                            <Text style={styles.productsCountText}>85 Products</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.arrowContainer}>
                    <Icon type='AntDesign' name="creditcard" size={16} color="#999999" />
                </View>
            </View>
            <View style={styles.bottomLine} />
        </>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: hs(50),
        marginTop: hs(23),
        paddingHorizontal: ws(16),
        flexDirection: 'row',
    },
    arrowContainer: {
        marginLeft: ws(45),
        marginVertical: hs(10)
    },
    productsCountOverallContainer: {
        width: '70%',
        flexDirection: 'row'
    },
    followersDotContainer: {
        height: hs(5),
        width: ws(5),
        borderRadius: 100,
        backgroundColor: '#515151',
        marginVertical: hs(6),
        marginLeft: ws(20)
    },
    productCountDotContainer: {
        height: hs(5),
        width: ws(5),
        borderRadius: 100,
        backgroundColor: '#515151',
        marginVertical: hs(6)
    },
    brandImageContainer: {
        height: hs(50),
        width: ws(50),
        borderWidth: 1,
        borderColor: '#D9D9D9'
    },
    bottomLine: {
        width: ws(343),
        borderWidth: 1,
        borderColor: '#DADADA',
        marginHorizontal: ws(16),
        marginTop: hs(20)
    },
    brandText: {
        fontSize: 20,
        color: colors.P_TEXT,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        height: 45,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hs(5)
    },
    Image: {
        height: '100%',
        width: '100%',
        borderRadius: 6
    },
    brandNameContainer: {
        width: '50%',
        flexDirection: 'row',
        marginHorizontal: ws(23),
        flexWrap: 'wrap',
        height: hs(50),
    },
    brandNameText: {
        fontSize: 14,
        color: '#000000',
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight:'500'

    },
    productsCountText: {
        fontSize: 12,
        marginLeft: ws(5),
        color: '#999999',
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight:'400'
    },
})

export default BrandFollowCard;