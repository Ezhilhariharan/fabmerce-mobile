import { IMAGES } from '@assets/images/png';
import { FrequentlyAsked } from '@models/static/adminslice.static';
import { hs, ws } from '@utilis/designs/measurements.design';
import FAQCard from '@views/components/designs/FAQCard';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FrequentlyAskedScreen = () => {
    return (
        <View style={styles.container}>
              {/*Dropdown question*/}
              {FrequentlyAsked.map((e, i) => {
          return <FAQCard key={i} data={e} />;
        })}
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      scrollContainer: {
        flex: 1,
      },
      topCurve: {
        width: '100%',
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
      },
      becurieText: {
        position: 'absolute',
        top: 30,
        fontFamily: 'DINPro-Medium',
        fontSize: 23,
        color: '#ffffff',
      },
      iconContainer: {
        height: 100,
        width: '100%',
        marginHorizontal: 15,
      },
      deviceImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
      },
      iconSupport: {
        height: 120,
        width: 120,
        alignSelf: 'center',
      },
      lobbingIcons: {
        flexDirection: 'row',
        flex: 1,
        position: 'absolute',
        top: 75,
        left: 0,
      },
      icons_menu_device: {
        height:30,
        width:30,
        left: 20,
        top: 85,
        // backgroundColor:'yellow',
        position: 'absolute',
      },
      menuIcon: {
        fontSize: 20,
        margin: 0,
      },
      topCurveImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
      },
      scrollInnerContainer: {
        paddingBottom: 50,
      },
})

export default FrequentlyAskedScreen;