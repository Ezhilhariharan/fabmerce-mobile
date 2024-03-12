import { IMAGES } from '@assets/images/png';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import design from '@config/design.config';
import fontsConfig from '@config/fonts.config';


export const LoginMobileTopHeader = () => {

    return (
        <>
            {/* background image */}
            <View style={styles.headerImage}>
                <Image
                    source={IMAGES.signin_email}
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
            <Text style={styles.loginText}>Login Via</Text>
        </>

    );
}

const styles = StyleSheet.create({
    fullnameView: {
        height: hs(34),
        width: ws(150),
        alignSelf: 'center',
        marginTop: hs(40)
    },
    headerImage: {
        height: hs(350),
        width: ws(366)
    },
    loginText: {
        fontSize: 20,
        color: '#000000',
        width: wp('100%'),
        marginTop: hs(20),
        textAlign: 'center',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '600'
    },
})