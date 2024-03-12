import colors from '@config/colors.config';
import { hs, wp } from '@utilis/designs/measurements.design';
import { Button } from '@views/components/functional/Button';
import { TextInput } from '@views/components/functional/TextInput';
import React, { useState } from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import fontsConfig from '@config/fonts.config';
import FabmerceApi from '@models/api/FabmerceApi';
import { setItem } from '@models/async/curd.async';
import AsyncKeys from '@models/async/keys.async';
import { Footer } from '@views/components/designs/Footer';
import { LoginMobileTopHeader } from '@views/components/designs/LoginMobileTopHeader';
const errorForm = {
    mobileError: '',
}

const valueForm = {
    mobile: '',
}


export default () => {
    const [isUpdateEnabled, setIsUpdateEnabled] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({
        ...valueForm,
        ...errorForm,
    })

    const isValidData = () => {
        let isValid = true, newForm = { ...form, ...errorForm }
        const mobileError = isUsername({ value: form.mobile, })

        if (mobileError) newForm.mobileError = mobileError, isValid = false

        setForm(newForm)
        return isValid
    }

    const isEmail = ({ value, label }: any) => {
        let error = ''
        const isValid = value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
        if (!value) error = `${label} is required`
        else if (!isValid) error = `Enter valid Email ${label}`
        return error
    }

    const isMobileNo = ({ value, label }: any) => {
        let error = ''
        if (!value) error = `${label} is required`
        else if (value.length != 10) error = `${label} should be 10 digits`
        else if (!value.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) error = `Valid ${label} is required`
        return error
    }

    const isUsername = ({ value }: any) => {
        let error = ''
        if (!value) error = `email or mobile number is required`
        else if (parseInt(value) > 0) error = isMobileNo({ value, label: "Mobile no" })
        else error = isEmail({ value, label: "Email id" })
        return error
    }
    const doRegister = () => {
        const isValid = isValidData()
        if (isValid && !isLoading) {
            setIsLoading(true)

            const body = {
                "email": form.mobile,
                "password": ""
            }
            FabmerceApi.signIn({ body }).then((res) => {
                setIsLoading(false)
            }).catch(({ error }) => {
                const message = JSON.stringify(error)
                setIsLoading(false)
                if (message == `"Customer Not Found:status:404"`) {
                    NavServiceUtils.navigate(NavKeys.HOME_STACK.REGISTER_SCREEN, { username: form.mobile })
                } else {
                    NavServiceUtils.navigate(NavKeys.HOME_STACK.LoginPasswordScreen, { username: form.mobile })
                }
            })
        }
    }

    const onSubmit = () => {
        setItem(AsyncKeys.byPassUser, 'true')
        NavServiceUtils.navigate(NavKeys.HOME_STACK.HOMESCREEN)
    }

    return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps={'always'}>
            <LoginMobileTopHeader />
            {/* text container */}
            <View style={styles.textInputContainer}>
                <TextInput
                    value={form.mobile}
                    error={form.mobileError}
                    onChangeText={(mobile) => setForm({ ...form, mobile, mobileError: '' })}
                    maxLength={parseInt(form.mobile) > 0 ? 10 : undefined} 
                    height={40} 
                    width={311} 
                    placeholder='Enter your e-mail or mobile number' 
                />
            </View>
            {/* button container */}
            <View style={styles.buttonContainer}>
                <Button
                    label='Continue'
                    height={40}
                    fontWeight='600'
                    fontFamily={fontsConfig.POPPINS_REGULAR}
                    width={260}
                    onPress={doRegister}
                    backgroundColor={'#0D427F'}
                    color={'#FFFFFF'}
                />
            </View>
            {/* Guest User Button */}
            <TouchableOpacity onPress={onSubmit}>
                <Text style={styles.guestUserText}>Skip</Text>
            </TouchableOpacity>
            {/* Footer */}
            <View style={{marginTop:hs(61)}}>
            <Footer />
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight,
    },
    textInputContainer: {
        marginTop: hs(34),
        width: '100%'
    },
    guestUserText: {
        width: wp('100%'),
        fontSize: 14,
        marginTop: hs(30),
        textAlign: 'center',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        color: colors.P_TEXT
    },
    buttonContainer: {
        marginTop: hs(30)
    },
})