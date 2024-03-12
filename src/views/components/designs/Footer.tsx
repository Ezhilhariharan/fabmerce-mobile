import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { hs, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { goToPrivacyLink, goToTermsLink } from '@models/static/adminslice.static';

export const Footer= () => {
    return (
        <>
            <View style={styles.bottomContainer}>
                <Text style={styles.agreeText}>By signing in you agree to our</Text>
                <View style={styles.termsPrivacyContainer}>
                    <TouchableOpacity onPress={() => { goToTermsLink(); }} style={styles.agreeContainer}>
                        <Text style={styles.termsText}>Terms of use </Text>
                    </TouchableOpacity>
                    <Text style={styles.termsText}>&</Text>
                    <TouchableOpacity onPress={() => { goToPrivacyLink(); }}>
                        <Text style={styles.privacyText}> Privacy Policy</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>

    );
}

const styles = StyleSheet.create({
    agreeContainer: {
        width: '43%',
        marginLeft: ws(10)
    },
    bottomContainer: {
        height: hs(48),
        width: ws(216),
        marginHorizontal: ws(80),
    },
    agreeText: {
        fontSize: 14,
        height: hs(24),
        width: '100%',
        textAlign: 'center',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        color: colors.S_TEXT
    },
    termsPrivacyContainer: {
        flexDirection: 'row',
        flex: 1
    },
    termsText: {
        fontSize: 15,
        color: colors.P_TEXT,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
    },
    privacyText: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        color: colors.P_TEXT,
    },
})