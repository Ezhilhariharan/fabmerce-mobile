import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { hs, ms, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from '../functional/Icon';

interface ILabel {
  label?: string;
  onLFPress?: any
}

const LabelTopHeader = ({ label, onLFPress }: ILabel) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backlogoContainer} onPress={onLFPress}>
        <Icon type='Ionicons' name="ios-arrow-back" size={30} color={colors.S_TEXT} />
      </TouchableOpacity>
      <View style={styles.labelContainer}>
        <Text style={[styles.labelText]}>{label}</Text>
      </View>
      {onLFPress ? (
        <View style={styles.notificationContainer}>
          <Icon type='AntDesign' name="setting" size={25} color={colors.S_TEXT} />
        </View>
      ) : (
        <View style={styles.logoContainer}>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hs(70),
    width: wp('100%'),
    flexDirection: 'row',
    paddingVertical: hs(5),
    backgroundColor: colors.S_BG,
  },
  labelText: {
    fontSize: 16,
    color: colors.S_TEXT,
    textAlign: 'center',
    fontFamily:fontsConfig.POPPINS_REGULAR,
    fontWeight:'500'
  },
  labelContainer: {
    minWidth: ws(86),
    height: 22,
    marginTop: hs(22),
    marginHorizontal: ws(98)
  },
  logoContainer: {
    height: hs(30),
    width: ws(30),
  },
  backlogoContainer: {
    height: hs(30),
    width: ws(25),
    marginTop: hs(18),
    marginLeft: ws(20),
  },
  notificationContainer: {
    height: hs(30),
    width: ws(30),
    marginTop: hs(20),
  },
})

export default LabelTopHeader;