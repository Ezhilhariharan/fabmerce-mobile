import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from '../functional/Icon';
import colors from '@config/colors.config';

const ProductMaterialsDescriptionCard = () => {
    return (
            <View style={styles.descriptionContainer}>
                <Icon type='EvilIcons' name="check" size={20} color="green" style={{marginTop:hs(2)}}  />
               <Text style={[styles.descriptionText]}>njkjknnnjnjfjnkfkjvbk</Text> 
            </View>
    );
}

const styles = StyleSheet.create({
    descriptionContainer: {
        minHeight: hs(13),
        marginTop:hs(14), 
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

export default ProductMaterialsDescriptionCard;