import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from '../functional/Icon';
import colors from '@config/colors.config';

const ProductDetailsDescriptionCard = () => {
    return (
            <View style={styles.descriptionContainer}>
                <Icon type='Entypo' name="dot-single" size={20} color={colors.P_TEXT}  />
               <Text numberOfLines={2} style={[styles.descriptionText]}>njkjknnnjnjfjnkfkjvbk</Text> 
            </View>
    );
}

const styles = StyleSheet.create({
    descriptionContainer: {
        minHeight: hs(26),
        width: ws(300),
        marginTop:hs(11), 
        flexDirection:'row',
        marginHorizontal:hs(32)
    },
    descriptionText: {
        fontSize: 12,
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        color:colors.P_TEXT,
      },

})

export default ProductDetailsDescriptionCard;