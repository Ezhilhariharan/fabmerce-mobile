import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '@config/colors.config';

const DetailedProductDescriptionCard = () => {
    return (
            <View style={styles.descriptionContainer}>
               <Text numberOfLines={5} style={[styles.descriptionText]}>njkjknnn</Text> 
            </View>
    );
}

const styles = StyleSheet.create({
    descriptionContainer: {
        minHeight: hs(72),
        width: ws(326),
        marginTop:hs(10), 
        marginHorizontal:hs(17)
    },
    descriptionText: {
        fontSize: 12,
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        color:colors.P_TEXT,
        marginLeft:ws(16)
      },

})

export default DetailedProductDescriptionCard;