import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { hs, ws } from '@utilis/designs/measurements.design';
import React, { useState } from 'react';
import design from '@config/design.config';
import { Image, StatusBar, StyleSheet, Text,View } from 'react-native';

export const LoginPasswordTopHeader= () => {    
    return (
        <>
            {/* background image */}
            <View style={styles.headerImage}>
                <Image 
                    source={IMAGES.signin_password} 
                    style={design.IMAGE} 
                />
            </View>
            {/* main bottom container */}
            <View style={styles.fullnameView}>
                <Image 
                    source={IMAGES.loginLogo} 
                    style={design.IMAGE} 
                />
            </View>
            {/* text login */}
            <Text style={styles.welcomeText}>Welcome Back!</Text>
        </>

    );
}

const styles = StyleSheet.create({
    headerImage: {
        height: hs(350),
        width: ws(366),
        backgroundColor: 'white'
    },
    fullnameView: {
        height: hs(38),
        width: ws(172),
        alignSelf: 'center',
        marginTop: hs(40)
    },
    welcomeText: {
        fontSize: 16,
        marginTop: hs(21),
        color: colors.P_TEXT,
        fontWeight: '600',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        alignSelf: 'center',
    },
})