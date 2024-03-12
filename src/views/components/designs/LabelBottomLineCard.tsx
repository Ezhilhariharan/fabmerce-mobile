import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { hs, ms, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface ILabel {
  label?: string;
  color?: string;
  onLFPress?: any
}

const LabelBottomLineCard = ({color,label}: ILabel) => {
  return (
    <View>
      <View style={styles.labelContainer}>
        <Text numberOfLines={1} style={[styles.labelText, {color}]}>{label}</Text>
      </View>
      <View style={styles.bottomLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    width: ws(198),
    marginHorizontal: ws(16),
    marginTop: hs(23)
  },
  labelText: {
    fontSize: 16,
    fontFamily:fontsConfig.POPPINS_REGULAR,
    fontWeight: '400',
  },
  bottomLine: {
    width: ws(343),
    borderWidth: 1,
    borderColor: '#DADADA',
    marginHorizontal: ws(16),
    marginTop: hs(10)
  },
})

export default LabelBottomLineCard;