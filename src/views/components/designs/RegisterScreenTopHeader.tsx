import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import { hs, ws } from '@utilis/designs/measurements.design';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import design from '@config/design.config';
import fontsConfig from '@config/fonts.config';

export const RegisterScreenTopHeader = () => {
    return (
        <>
            {/* Header Image */}
            <View style={styles.headerImage}>
                <Image
                    source={IMAGES.register}
                    style={design.IMAGE}
                />
            </View>
            {/* Icon Image */}
            <View style={styles.fullnameView}>
                <Image
                    source={IMAGES.loginLogo}
                    style={design.IMAGE}
                />
            </View>
            {/* text login */}
            <Text style={styles.welcomeText}>Welcome to Fabmerce</Text>
        </>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        height: hs(120),
        width: ws(366)
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
