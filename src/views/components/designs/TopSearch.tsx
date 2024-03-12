import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import FabmerceApi from '@models/api/FabmerceApi';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from '../functional/Icon';

const TopSearch = ({ onLFPress }: any) => {
  return (
    <View style={styles.container}>
      {onLFPress ? (
        <TouchableOpacity
          onPress={onLFPress}
          style={styles.backlogoContainer}
        >
          <Icon type='Ionicons' name="ios-arrow-back" size={30} style={styles.iconLogo} />
        </TouchableOpacity>
      ) : (
        <View style={styles.logoContainer}>
          <Image source={IMAGES.searchBoxLogoFabmerce} style={styles.imageLogo} />
        </View>
      )}
      <TouchableOpacity onPress={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.SEARCH_SCREEN)} style={styles.searchBoxMainContainer}>
        <View style={styles.searchIconContainer}>
          <Icon type='Ionicons' name="ios-search-sharp" size={18} style={styles.iconSearch} />
        </View>
        <View style={styles.searchInputContainer}>
          <TextInput
            placeholder={'Search Fabmerce.com'}
            placeholderTextColor={colors.T_TEXT}
            style={styles.textInput}
            editable={false}
          />
        </View>
        {/* speech to text */}
        <View style={styles.micIconContainer}>
          <Icon type='FontAwesome' name="microphone" color={colors.T_TEXT} />
        </View>
      </TouchableOpacity>
      <View style={styles.notificationContainer}>
        <Icon type='AntDesign' name="shoppingcart" size={25} color={colors.S_TEXT} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hs(80),
    width: wp('100%'),
    flexDirection: 'row',
    paddingVertical: hs(5),
    backgroundColor: colors.S_BG,
  },
  textInput: {
    height: 35,
    color: 'black',
    fontFamily: fontsConfig.POPPINS_REGULAR,
    fontWeight: '400',
    padding: 0,
  },
  iconLogo: {
    color: colors.S_TEXT
  },
  logoContainer: {
    height: hs(30),
    width: ws(30),
    borderRadius: 5,
    marginVertical: hs(22),
    marginLeft: ws(16),
    backgroundColor: colors.P_BG
  },
  iconSearch: {
    color: colors.T_TEXT,
  },
  backlogoContainer: {
    height: hs(30),
    width: ws(20),
    marginVertical: hs(22),
    marginLeft: ws(17),
  },
  imageLogo: {
    height: hs(15),
    width: ws(28),
    resizeMode: 'cover',
    marginVertical: hs(8)
  },
  searchBoxMainContainer: {
    height: hs(40),
    borderRadius: 7,
    width: ws(267),
    marginLeft: ws(16),
    marginVertical: hs(15),
    flexDirection: 'row',
    backgroundColor: colors.P_BG
  },
  searchIconContainer: {
    height: hs(40),
    width: ws(25),
    marginLeft: ws(9),
    marginVertical: hs(2),
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInputContainer: {
    width: wp('50%'),
    paddingTop: hs(3),
    height: hs(50),
  },
  micIconContainer: {
    height: hs(40),
    width: ws(40),
    marginVertical: hs(2),
    alignItems: 'center',
    justifyContent: 'center'
  },
  notificationContainer: {
    height: hs(50),
    width: ws(30),
    marginVertical: hs(22),
    marginLeft: ws(10)
  },
})

export default TopSearch;