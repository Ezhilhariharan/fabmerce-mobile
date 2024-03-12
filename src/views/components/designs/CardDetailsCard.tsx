import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from '../functional/Button';
import { Icon } from '../functional/Icon';

const CardDetailsCard = ({ onLFPress }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardNumberMainContainer}>
                <View style={styles.cardNumberTextInputContainer}>
                    <TextInput placeholder={'Card number'}  placeholderTextColor='#999999' style={styles.textInput} />
                </View>
                <View style={styles.cardIconContainer}>
                    <Icon type='AntDesign' name="creditcard" size={16} color="#999999" />
                </View>
            </View>
            <View style={styles.nameCardMainContainer}>
                <View style={styles.nameCardTextInputContainer}>
                    <TextInput placeholder={'Name on card'} placeholderTextColor='#999999' style={styles.textInput} />
                </View>
            </View>
            <View style={styles.validCvvMainContainer}>
                <View style={styles.cardValidContainer}>
                    <TextInput placeholder={'Valid Thru(MM/YY)'} placeholderTextColor='#999999' style={styles.textInput} />
                </View>
                <View style={styles.cvvContainer}>
                    <TextInput placeholder={'CVV'} placeholderTextColor='#999999' style={styles.textInput} />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button label='Save' height={40} width={250} backgroundColor={'#0D427F'} color={'#FFFFFF'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    cvvContainer: {
        height: hs(50),
        width: ws(107),
        marginLeft: ws(20),
        paddingVertical: hs(10),
        paddingLeft: ws(14),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.11)'
    },
    cardValidContainer: {
        width: ws(211),
        height: hs(50),
        marginLeft: ws(17),
        paddingVertical: hs(10),
        paddingLeft: ws(14),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.11)'
    },
    cardIconContainer: {
        marginVertical: hs(15),
        marginLeft: ws(200)
    },
    nameCardTextInputContainer: {
        marginVertical: hs(10),
        paddingLeft: ws(14)
    },
    validCvvMainContainer: {
        flexDirection: 'row',
        marginTop: hs(30),
        width: '100%'
    },
    nameCardMainContainer: {
        width: ws(338),
        height: hs(50),
        marginHorizontal: ws(17),
        marginTop: hs(30),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.11)'
    },
    cardNumberTextInputContainer: {
        marginVertical: hs(10),
        paddingLeft: ws(14)
    },
    cardNumberMainContainer: {
        width: ws(338),
        height: hs(50),
        marginHorizontal: ws(17),
        marginTop: hs(19),
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.11)'
    },
    buttonContainer: {
        marginTop: hs(62)
    },
    textInput: {
        height: 35,
        color: 'black',
        paddingHorizontal: 5,
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight:'400'
    },

})

export default CardDetailsCard;