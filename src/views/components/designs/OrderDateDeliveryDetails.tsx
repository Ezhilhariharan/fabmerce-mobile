import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';


const OrderDateDeliveryDetails = () => {
    return (
        <View style={styles.container}>
            <View style={styles.orderDateMainContainer}>
                <View style={styles.leftDataContainer}>
                    <Text style={styles.orderText}>Order Date:</Text>
                </View>
                <View style={{ alignItems: 'flex-end', width: ws(67) }}>
                    <Text style={styles.orderNumber}>Teemaja</Text>
                </View>
            </View>
            <View style={styles.deliveryMainContainer}>
                <View style={styles.leftDataContainer}>
                    <Text style={styles.orderText}>Delivery:</Text>
                </View>
                <View style={{ alignItems: 'flex-end', width: ws(67) }}>
                    <Text style={styles.orderNumber}>Teemaja</Text>
                </View>
            </View>
            <View style={styles.orderNoMainContainer}>
                <View style={styles.leftDataContainer}>
                    <Text style={styles.orderText}>Order No:</Text>
                </View>
                <View style={{ alignItems: 'flex-end', width: ws(67) }}>
                    <Text style={styles.orderNumber}>Teemaja</Text>
                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: wp('50%'),
        marginVertical: hs(17)
    },
    orderText: {
        fontSize: 12,
        color: '#999999',
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight:'400'
    },
    leftDataContainer:{ 
        height: hs(19), 
        width: ws(80), 
        alignItems: 'flex-end' 
},
    orderNumber: {
        fontSize: 12,
        color: '#000000',
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight:'400'
    },
    orderDateMainContainer: {
        flexDirection: 'row',
        height: hs(19),
        width: ws(168),
    },
    orderNoMainContainer: {
        flexDirection: 'row',
        height: hs(19),
        width: ws(168),
        marginTop: hs(13),
    },
    deliveryMainContainer: {
        flexDirection: 'row',
        height: hs(19),
        width: ws(168),
        marginTop: hs(13),
    },
})

export default OrderDateDeliveryDetails;