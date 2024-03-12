import { hs, ws } from '@utilis/designs/measurements.design';
import { Button } from '@views/components/functional/Button';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, Text, ScrollView, View} from 'react-native';
import fontsConfig from '@config/fonts.config';
import { isUsername } from '@utilis/methods/string.method';
import FabmerceApi from '@models/api/FabmerceApi';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import { setItem } from '@models/async/curd.async';
import AsyncKeys from '@models/async/keys.async';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import { TextInputRegister } from '@views/components/functional/TextInputRegister';
import { RegisterScreenTopHeader } from '@views/components/designs/RegisterScreenTopHeader';
import { Footer } from '@views/components/designs/Footer';


const errorForm = {
    "firstNameError": "",
    "lastNameError": "",
    "emailError": "",
    "passwordError": "",
    "passwordConfirmationError": ""
}

const valueForm = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
    "passwordConfirmation": ""
}


export default ({ route }: any) => {
    const { username } = route.params ?? {}
    const [isLoading, setIsLoading] = useState(false)
    const [form, setForm] = useState({
        ...valueForm,
        ...errorForm,
        email: username
    })

    const isValidData = () => {
        let isValid = true, newForm = { ...form, ...errorForm }
        const mobileError = isUsername({ value: form.email, })
        if (!newForm.firstName) newForm.firstNameError = 'First name is required', isValid = false
        if (!newForm.lastName) newForm.lastNameError = 'Last name is required', isValid = false
        if (mobileError) newForm.emailError = mobileError, isValid = false
        if (!newForm.password) newForm.passwordError = 'password is required', isValid = false
        if (newForm.password.length < 8) newForm.passwordError = 'Password should contain min 8 char', isValid = false
        if (!newForm.passwordConfirmation) newForm.passwordConfirmationError = 'password Confirmation is required', isValid = false
        if (newForm.passwordConfirmation.length < 8) newForm.passwordConfirmationError = 'password Confirmation should contain min 8 char', isValid = false
        if (newForm.password != newForm.passwordConfirmation) newForm.passwordError = 'Password and Confirm password should be same', isValid = false
        setForm(newForm)
        return isValid
    }


    const doRegister = () => {
        const isValid = isValidData()
        if (isValid && !isLoading) {
            setIsLoading(true)

            const body = {
                "first_name": form.firstName,
                "last_name": form.lastName,
                "email": form.email,
                "password": form.password,
                "password_confirmation": form.passwordConfirmation,
            }
            FabmerceApi.signUp({ body }).then((res) => {
                setItem(AsyncKeys.user, res.data)
                setIsLoading(false)
                NavServiceUtils.navigateAndReset(NavKeys.HOME_STACK.HOMESCREEN)
            }).catch(({ error }) => {
                const message = JSON.stringify(error)
                setForm({ ...form, passwordConfirmationError: message })
                setIsLoading(false)
            })
        }
    }


    return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps={'always'}>
            {/* Header */}
           <RegisterScreenTopHeader/>
            {/* Text input email */}
            <View style={styles.nameCardMainContainer}>
                    {form.email ? <Text style={styles.topLabel}>{(parseInt(username) > 0) ? 'mobile number' : 'Email '}</Text> : null}
                    <TextInputRegister
                        value={form.email}
                        editable={false}
                        onChangeText={(email) => setForm({ ...form, email, emailError: '' })}
                    />
            </View>
            {form.emailError ? <Text style={styles.errorLabel}>{form.emailError}</Text> : null}
            {/* Text input first Name */}
            <View style={styles.nameCardMainContainer}>
                    {form.firstName ? <Text style={styles.topLabel}>First name</Text> : null}
                    <TextInputRegister
                        value={form.firstName}
                        placeholder={'First name'}
                        onChangeText={(firstName) => setForm({ ...form, firstName, firstNameError: '' })} />
            </View>
            {form.firstNameError ? <Text style={styles.errorLabel}>{form.firstNameError}</Text> : null}
            {/* Text input last name */}
            <View style={styles.nameCardMainContainer}>
                    {form.lastName ? <Text style={styles.topLabel}>Last name</Text> : null}
                    <TextInputRegister
                        value={form.lastName}
                        onChangeText={(lastName) => setForm({ ...form, lastName, lastNameError: '' })}
                        placeholder={'Last name'}
                    />
            </View>
            {form.lastNameError ? <Text style={styles.errorLabel}>{form.lastNameError}</Text> : null}
            {/* Text input password */}
            <View style={styles.nameCardMainContainer}>
                    {form.password ? <Text style={styles.topLabel}>Password</Text> : null}
                    <TextInputRegister
                        value={form.password}
                        onChangeText={(password) => setForm({ ...form, password, passwordError: '' })}
                        placeholder={'Password'}
                        secureTextEntry={true}
                    />
            </View>
            {form.passwordError ? <Text style={styles.errorLabel}>{form.passwordError}</Text> : null}
            {/* Text input password confirmation */}
            <View style={styles.nameCardMainContainer}>
                    {form.passwordConfirmation ? <Text style={styles.topLabel}>Password Confirmation</Text> : null}
                    <TextInputRegister
                        value={form.passwordConfirmation}
                        onChangeText={(passwordConfirmation) => setForm({ ...form, passwordConfirmation, passwordConfirmationError: '' })}
                        placeholder={'Password Confirmation'}
                        secureTextEntry={true}
                    />
            </View>
            {form.passwordConfirmationError ? <Text style={styles.errorLabel}>{form.passwordConfirmationError}</Text> : null}
            <View style={styles.buttonContainer}>
                <Button
                    isLoading={isLoading}
                    onPress={doRegister}
                    label='Continue'
                    height={40}
                    fontWeight='600'
                    fontFamily={fontsConfig.POPPINS_REGULAR}
                    width={260}
                    backgroundColor={'#0D427F'}
                    color={'#FFFFFF'}
                />
            </View>
            {/* Footer */}
            <View style={{marginTop:hs(21)}}>
            <Footer />
            </View>       
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight,
        backgroundColor: 'white'
    },
    textInputContainer: {
        marginTop: hs(34),
        width: '100%'
    },
    topLabel:{ 
        color: '#999999' 
    },
    errorLabel:{ 
        color: 'red', 
        marginHorizontal: ws(20), 
        marginTop: hs(4)
},
    nameCardMainContainer: {
        width: ws(343),
        minHeight: hs(50),
        maxHeight: hs(70),
        marginHorizontal: ws(17),
        marginTop: hs(30),
        borderRadius: 10,
        paddingLeft: ws(14),
        backgroundColor: '#F4F4F5'
    },
    buttonContainer: {
        marginTop: hs(30)
    }
})
