import { IMAGES } from '@assets/images/png';
import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '@config/colors.config';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import { NavKeys } from '@controllers/utils/NavKeys.utils';

const DiscountPriceCard = ({ item, index }: any) => {
    return (
        <View style={styles.container} key={index} >
            <ImageBackground source={IMAGES.discountcardbackground}               
                resizeMode="cover"
                style={{ flex: 1, flexDirection: 'row' }} >
                <View style={styles.mainContainer} >
                    <Text style={styles.PriceText}
                     onPress={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.TRACKING_ORDER
                        , { orderId: "91215b" })}>{item.type}</Text>
                    <Text style={styles.discountPriceText}
                      onPress={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.ORDER_DISPATCHED
                        , { orderId: "91215b" })}>{item.name}</Text>
                    <Text style={styles.originalPriceText}>{item.desc}</Text>
                </View>
            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: hs(200),
        marginTop: hs(30)
    },
    mainContainer: {
        height: hs(160),
        width: ws(100),
        borderRadius: 37,
        marginHorizontal: ws(20),
        backgroundColor: colors.P_BG,
        marginVertical: hs(18)
    },
    PriceText: {
        fontSize: 16,
        color: '#F67600',
        fontFamily: fontsConfig.POPPINS_EXTRA_BOLD,
        alignSelf: 'center',
        marginTop: hs(35),
    },
    discountPriceText: {
        fontSize: 30,
        color: '#F67600',
        fontFamily: fontsConfig.POPPINS_EXTRA_BOLD,
        alignSelf: 'center',
    },
    originalPriceText: {
        fontFamily: fontsConfig.POPPINS_EXTRA_BOLD,
        fontSize: 16,
        color: '#F67600',
        alignSelf: 'center',
    },
})

export default DiscountPriceCard;