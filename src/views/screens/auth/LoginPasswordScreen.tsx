import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { hs } from '@utilis/designs/measurements.design';
import React, { useState } from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import { TextInput } from '@views/components/functional/TextInput';
import { Button } from '@views/components/functional/Button';
import FabmerceApi from '@models/api/FabmerceApi';
import { setItem } from '@models/async/curd.async';
import AsyncKeys from '@models/async/keys.async';
import { Footer } from '@views/components/designs/Footer';
import { LoginPasswordTopHeader } from '@views/components/designs/LoginPasswordTopHeader';

export default ({ route, navigation }: any) => {
    const { username } = route.params ?? {}
    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({
        password: '',
        passwordError: '',
    })

    const isValidData = () => {
        let isValid = true, newForm = { ...form, passwordError: '', }
        if (!newForm.password) newForm.passwordError = 'Password required', isValid = false
        else if (newForm.password.length < 8) newForm.passwordError = 'Password should contain min 8 char', isValid = false
        setForm(newForm)
        return isValid
    }

    const onSubmit = () => {
        const isValid = isValidData()
        if (isValid && !isLoading) {
            setIsLoading(true)

            const body = {
                "email": username,
                "password": form.password
            }
            FabmerceApi.signIn({ body }).then((res) => {
                setItem(AsyncKeys.user, res.data)
                setIsLoading(false)
                NavServiceUtils.navigateAndReset(NavKeys.HOME_STACK.HOMESCREEN)
            }).catch(({ error }) => {
                const message = JSON.stringify(error)
                setForm({ ...form, passwordError: message })
                setIsLoading(false)
            })
        }
    }

    return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps={'always'}>
            {/* Header */}
            <LoginPasswordTopHeader />
            {/* text container */}
            <View style={styles.textInputContainer}>
                <TextInput
                    value={form.password}
                    error={form.passwordError}
                    secureTextEntry={true}
                    onChangeText={(password) => setForm({ ...form, password, passwordError: '' })}
                    height={40} width={311} placeholder='Enter Password' />
            </View>
            {/* button container */}
            <View style={styles.buttonContainer}>
                <Button
                    isLoading={isLoading}
                    label='Continue'
                    height={40}
                    onPress={onSubmit}
                    fontWeight='600'
                    fontFamily={fontsConfig.POPPINS_REGULAR}
                    width={260}
                    backgroundColor={'#0D427F'}
                    color={'#FFFFFF'}
                />
            </View>
            {/* Forget password Container */}
            <TouchableOpacity>
                <Text style={styles.forgetPasswordText}>Forget your password? reset here</Text>
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
        width: '100%',
        backgroundColor: 'white'
    },
    buttonContainer: {
        marginTop: hs(30)
    },
    forgetPasswordText: {
        color: colors.P_TEXT,
        fontSize: 13,
        alignSelf: 'center',
        marginTop: hs(23)
    },
})