import fontsConfig from '@config/fonts.config';
import { hs, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '@config/colors.config';

const ProductSizeCard = () => {
    return (
        <View style={styles.sizeContainer}>
            <Text style={styles.SizeText}>9 yards</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    SizeText: {
        fontSize: 12,
        color: colors.P_TEXT,
        paddingVertical: hs(5),
        alignSelf: 'center',
        fontWeight: '600',
        fontFamily: fontsConfig.POPPINS_REGULAR,
    },
    sizeContainer: {
        height: hs(30),
        width: ws(80),
        borderRadius: 10,
        marginLeft:ws(16),
        marginTop:hs(11),
        borderColor: 'black',
        borderWidth: 1
    }
})

export default ProductSizeCard;