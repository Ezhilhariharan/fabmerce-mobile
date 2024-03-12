import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import { removeItems } from '@models/async/curd.async';
import AsyncKeys, { onLogOutAsyncKeys } from '@models/async/keys.async';
import { hs, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import {
    Modal,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import { Icon } from '../functional/Icon';


export default function LogoutPopup({ visible }: any) {

    const onLogout = async () => {
        // NavServiceUtils.navigateAndReset(NavKeys.HOME_STACK.LOGINMOBILESCREEN)
        await removeItems(onLogOutAsyncKeys)
    }

    return (
        <View style={styles.modalColor} >
            {/* popup container */}
            <View style={{ position: 'absolute', top: hs(660), alignSelf: 'center' }}>
                <Icon type='EvilIcons' name="close-o" size={25} color="white" />
            </View>
            <View style={styles.popupContainer}>
                <Text style={styles.programText}>Are you sure you want to logout?</Text>
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={onLogout} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => NavServiceUtils.goBack()} style={styles.logoutButton}>
                        <View style={{ paddingTop: hs(15), marginLeft: ws(10) }}>
                            <Icon type='SimpleLineIcons' name="logout" size={11} color="white" />
                        </View>
                        <View style={{ marginHorizontal: ws(5) }}>
                            <Text style={styles.noButtonText}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    popupContainer: {
        height: hs(200),
        width: ws(375),
        position: 'absolute',
        alignSelf: 'center',
        top: hs(700),
        backgroundColor: 'white',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    buttonView: {
        flexDirection: 'row',
    },
    modalColor: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end'
    },
    buttonText: {
        color: colors.P_TEXT,
        paddingVertical: hs(8),
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: fontsConfig.POPPINS_REGULAR,
    },
    noButtonText: {
        color: 'white',
        fontSize: 18,
        paddingVertical: hs(8),
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        marginLeft: ws(5)
    },
    logoutText: {
        color: '#000000',
        fontSize: 23,
        fontFamily: 'DINPro-Medium',
    },
    buttonContainer: {
        height: hs(47),
        width: ws(108),
        marginLeft: ws(45),
        borderWidth: 1,
        borderColor: colors.P_TEXT,
        borderRadius: 10,
        marginTop: 22,
    },
    programText: {
        color: '#676767',
        fontSize: 18,
        fontFamily: fontsConfig.POPPINS_BLACK,
        fontWeight: '400',
        marginTop: hs(20),
        alignSelf: 'center',
    },
    logoutButton: {
        height: hs(47),
        width: ws(108),
        marginLeft: ws(55),
        borderWidth: 1,
        backgroundColor: colors.P_TEXT,
        borderColor: colors.P_TEXT,
        borderRadius: 10,
        marginTop: 22,
        flexDirection: 'row'
    },
});
