import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import { hp, hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ProductDetailsReturn = () => {
    return (
        <>
        <View style={styles.Container}>
            <View style={{ height: hs(140), width: ws(100), marginVertical: hs(24) }}>
                <Image source={IMAGES.appLogo} style={styles.image} />
            </View>
            <View style={{ height: hs(140), width: ws(140), marginVertical: hs(24), marginHorizontal: ws(25) }}>
                <Text style={styles.brandNameText}>Teemaja</Text>
                <Text style={styles.varietyText}>Teemaja</Text>
                <Text style={styles.priceText}>Teemaja</Text>
                <View style={{ height: hs(26), width: ws(80), borderWidth: 1, borderColor: colors.P_TEXT, borderRadius: 6, marginTop: hs(18) }}>
                    <Text style={styles.buyAgainText}>Teemaja</Text>
                </View>
            </View>
        </View>
        <View style={styles.bottomLine} />
        </>

    );
}

const styles = StyleSheet.create({

    Container: {
        height: hs(180),
        width: ws(375),
        paddingHorizontal: ws(16),
        flexDirection: 'row'
    },
    brandNameText: {
        fontSize: 16,
        color: '#000000',
        marginTop: hs(6)
    },
    varietyText: {
        fontSize: 10,
        color: '#999999',
        marginTop: hs(14)
    },
    priceText: {
        fontSize: 16,
        color: '#000000',
        marginTop: hs(14)
    },
    buyAgainText: {
        fontSize: 12,
        textAlign: 'center',
        marginVertical: hs(2),
        justifyContent:'center',
        alignItems:'center',
        color: colors.P_TEXT
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 20
    },
    bottomLine: {
        width: ws(343),
        borderWidth: 1,
        borderColor: '#DADADA',
        marginHorizontal: ws(16),
        marginTop: hs(10)
      },
})

export default ProductDetailsReturn;