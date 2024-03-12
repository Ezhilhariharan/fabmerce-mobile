import { IMAGES } from '@assets/images/png';
import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '@config/colors.config';

const AssuranceCard = ({ item, index }: any) => {
    return (
        <View style={{width:'33%'}} >
        <View style={styles.imageContainer}>
           <Image source={IMAGES.appLogo} style={styles.image} />          
        </View>
        <Text numberOfLines={1} style={[styles.descriptionText]}>Assurance</Text>
        <View style={styles.bottomLine} />
        </View>
    );
}

const styles = StyleSheet.create({

    imageContainer: {
        height: hs(30),
        width: ws(30),
        marginLeft: ws(40),
        marginTop:hs(18)
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode:'stretch',
    },
    descriptionText: {
        fontSize: 12,
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        color:colors.P_TEXT,
        marginTop:hs(10),
        marginLeft:ws(25)
    },
    bottomLine: {
        height:hs(30),
        position:'absolute',
        top:15,
        left:ws(100),
        borderWidth: 1,
        borderColor: '#999999',
        marginHorizontal: ws(16),
        marginTop: hs(10)
      },
})

export default AssuranceCard;