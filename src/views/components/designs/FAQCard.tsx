import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../functional/Icon';

const FAQCard = ([data]: any) => {
    const [show, setShow] = useState(false);
    return (
        <View>
            <TouchableOpacity onPress={() => setShow(!show)}
                style={{ flexDirection: 'row', paddingHorizontal: ws(33), width: wp('100%'), flexWrap: 'wrap', marginTop: hs(23) }}>
                <View style={styles.questionTextContainer}>
                    <Text style={styles.questionText}>{data.question}</Text>
                </View>
                <View style={{ height: hs(12), width: ws(12), marginLeft: ws(95) }}>
                    <Icon type='AntDesign' name="check" size={16} color="green" />
                </View>
                <View style={styles.questionbottomLine} />
            </TouchableOpacity>
            {show ? (
                <View style={styles.answerContainer}>
                    <Text style={styles.answerText}>{data.answer}</Text>
                </View>
            ) : null}

        </View>
    );
}

const styles = StyleSheet.create({
    questionbottomLine: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#DADADA',
        marginTop: hs(10)
    },
    questionTextContainer: {
        height: hs(22),
        width: ws(198),
    },
    questionText: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        color: colors.P_TEXT
    },
    answerContainer: {
        width: '85%',
        maxHeight: 130,
        alignSelf: 'center',
        paddingTop: 10,
    },
    answerText: {
        color: colors.P_TEXT,
        fontSize: 14,
        fpntWeight: '400',
        textAlign: 'justify',
        fontFamily: fontsConfig.POPPINS_REGULAR,
    },
})

export default FAQCard;