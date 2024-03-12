import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import { Button } from '@views/components/functional/Button';
import React, { useEffect, useRef, useState } from 'react';
import { Image, ImageBackground, Keyboard, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import design from '@config/design.config';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import { goToPrivacyLink, goToTermsLink } from '@models/static/adminslice.static';
import fontsConfig from '@config/fonts.config';

export default () => {
    const [OTP, setOTP] = useState<string>('')
    const inputRef = useRef<any>([]);
    const [isButtonLoading, setIsButtonLoading] = useState(false)

    const onChangeOTP = (text: string, i: number) => {
        if (!text) {
            setOTP(OTP.slice(0, OTP.length - 1))
            inputRef.current[i - 1]?.focus();
        } else if (`${OTP + text}`.length < 5) {
            setOTP(OTP + text)
            inputRef.current[i + 1]?.focus();
        }
    }

    useEffect(() => {
        doVerify()
    }, [OTP])


    const doVerify = async () => {
        try {

            if (OTP?.length == 4 && !isButtonLoading ) {
                setIsButtonLoading(true)
                //need to get otp response and load it
                // const res = await verify(signInRes.res, OTP)
                // dispatch({ type:SET_SIGNIN, payload: { ...res, fcm } })
                setIsButtonLoading(false)
            }
        } catch (error: any) {
            setIsButtonLoading(false)
        }
    }



    return (
        <View style={styles.container}>
            {/* background image */}
            {/* <ImageBackground source={IMAGES.otpImage} style={{ flex: 1 }} /> */}
            <View style={styles.topContainer} />
            {/* main container for bottom */}
            <View style={styles.mainContainer}>
                <View style={styles.fullnameView}>
                    <Image source={IMAGES.loginLogo} style={design.IMAGE} />
                </View>
                <Text style={styles.loginText}>Enter OTP</Text>
                {/* otploop for textbox */}
                <View style={styles.otpContainer}>
                    {Array(4).fill('0').map((el, i) => {
                        return (
                            <TextInput
                                key={i}
                                ref={el => inputRef.current[i] = el}
                                value={OTP[i] ?? ''}
                                onChangeText={(text) => onChangeOTP(text, i)}
                                maxLength={1}
                                keyboardType={'numeric'}
                                style={styles.textInput}
                            />
                        )
                    })}
                </View>
                <View style={styles.resendOtpContainer}>
                    <View style={styles.resendTextContainer}>
                        <Text style={styles.resendOtpText}>Resend OTP?</Text>
                    </View>
                    <View style={styles.errorTextContainer}>
                        <Text style={styles.resendOtpText}>Incorrect otp</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button isLoading={isButtonLoading}
                        onPress={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.HOMESCREEN)} label='Verify' height={40} width={311} backgroundColor={'#0D427F'} color={'#FFFFFF'} />
                </View>
                {/* terms and privacy policy container */}
                <Text style={styles.agreeText}>By signing in you agree to our</Text>
                <View style={styles.termsPrivacyContainer}>
                    <TouchableOpacity onPress={() => { goToTermsLink(); }} style={styles.agreeContainer}>
                        <Text style={styles.termsText}>Terms of use </Text>
                    </TouchableOpacity>
                    <Text style={styles.termsText}>&</Text>
                    <TouchableOpacity onPress={() => { goToPrivacyLink(); }} >
                        <Text style={styles.privacyText}> Privacy Policy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.P_TEXT,
        paddingTop: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight,
    },
    buttonContainer: {
        marginTop: hs(12),
    },
    resendTextContainer: {
        height: hs(24),
        width: ws(77),
    },
    errorTextContainer: {
        marginLeft: ws(151),
        height: hs(24),
        width: ws(82)
    },
    resendOtpContainer: {
        flexDirection: 'row',
        paddingTop: hs(5),
        width: wp('100%'),
        paddingHorizontal: ws(40)
    },
    textInput: {
        width: ws(60),
        height: ws(40),
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginHorizontal: ws(9),
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'black'
    },
    resendOtpText: {
        fontSize: 12,
        color: colors.P_TEXT,
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight:'400'
    },
    changeNumberText: {
        fontSize: 16,
        color: colors.P_TEXT,
        marginHorizontal: wp('10%')
    },
    otpContainer: {
        height: hs(50),
        width: '100%',
        paddingHorizontal: ws(32),
        flexDirection: 'row',
        marginTop: hs(12),
    },
    topContainer: {
        height: hs(384),
        width: wp('100%')
    },
    bottomContainer: {
        height: hs(48),
        marginTop: hs(88),
        width: ws(229)
    },
    mainContainer: {
        height: hs(466),
        position: 'absolute',
        bottom: hs(0),
        width: wp('100%'),
        backgroundColor: colors.P_BG,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    agreeText: {
        fontSize: 14,
        height: hs(24),
        width: '100%',
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: hs(88),
        color: colors.S_TEXT,
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight:'400'
    },
    fullnameView: {
        height: hs(38),
        width: ws(172),
        alignSelf: 'center',
        marginTop: hs(40)
    },
    loginText: {
        fontSize: 15,
        color: colors.P_TEXT,
        height: hs(24),
        width: '100%',
        textAlign: 'center',
        marginTop: hs(28),
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight:'600'
    },
    termsPrivacyContainer: {
        flexDirection: 'row',
        fontSize: 14,
        height: hs(24),
        width: '100%',
    },
    termsText: {
        fontSize: 15,
        color: colors.P_TEXT,
        alignSelf: 'flex-end',
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight:'400'
    },
    agreeContainer: {
        width: '50%'
    },
    privacyText: {
        fontSize: 15,
        textAlign: 'center',
        color: colors.P_TEXT,
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight:'400'
    },
})