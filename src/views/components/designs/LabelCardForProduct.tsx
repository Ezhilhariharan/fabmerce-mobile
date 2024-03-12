import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ILabel {
    label?: string;
    color?: string;
    onLFPress?: any
  }
const LabelCardProduct = ({color,label}: ILabel) => {
    return (
            <View style={styles.labelContainer}>
               <Text style={[styles.labelText, {color}]}>{label}</Text> 
            </View>
    );
}

const styles = StyleSheet.create({
    labelContainer: {
        height: hs(20),
        minWidth: ws(72),
        marginTop:hs(30)
    },
    labelText: {
        fontSize: 12,
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight: '500',
        marginLeft:ws(16)
      },

})

export default LabelCardProduct;