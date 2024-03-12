import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Avatar from "../functional/Avatar"

const ProfileImagecard = ({ number }: any) => {
    return (
        <View style={styles.Container}>
            <View style={styles.imageContainer}>
                {/* <Image source={IMAGES.appLogo} style={styles.image} /> */}
                <Avatar source={IMAGES.appLogo} height={42}  width={42} />
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '65%' }}>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>srini</Text>
                </View>
                <View style={styles.numberContainer}>
                    <Text style={styles.numberText}>+91 9898765678</Text>
                </View>
            </View>
            <View style={styles.edit}>
                <Text style={styles.editText}>Edit</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    Container: {
        height: hs(80),
        backgroundColor: colors.P_BG,   
        width: ws(375),
        flexDirection: 'row'
    },
    imageContainer: {
        height: hs(44),
        width: ws(44),
        marginLeft: ws(16),
        marginTop: hs(18)
    },
    image: {
        height: '100%',
        width: '100%',
    },
    nameContainer: {
        height: hs(24),
        width: wp('65%'),
        marginLeft: ws(10),
        marginTop: hs(19)
    },
    numberContainer: {
        height: hs(24),
        width: wp('65%'),
        marginLeft: ws(10),
    },
    edit: {
        height: hs(18),
        width: ws(23),
        marginLeft: ws(10),
        marginTop: hs(17)
    },
    nameText: {
        fontWeight: '500',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontSize: 16,
        color: colors.P_TEXT
    },
    numberText: {
        fontWeight: '400',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontSize: 12,
        color: colors.T_TEXT
    },
    editText: {
        fontWeight: '500',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontSize: 12,
        color: '#072255'
    },
})

export default ProfileImagecard;