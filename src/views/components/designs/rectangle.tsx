import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import { removeItems } from '@models/async/curd.async';
import { onLogOutAsyncKeys } from '@models/async/keys.async';
import { List } from '@models/static/adminslice.static';
import { hs, ms, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../functional/Button';
import { FlatList } from '../functional/Flatlist';
import { Icon } from '../functional/Icon';
import ChevronRightArrow from './ChevronRightArrow';


const ProfileScreenDetailsSection = () => {
    const logout = async () => {
        NavServiceUtils.navigateAndReset(NavKeys.HOME_STACK.LOGINMOBILESCREEN)
        await removeItems(onLogOutAsyncKeys)
    }

    return (
        <View style={styles.Container}>
            <FlatList
                data={List}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }: any) => {
                    const SVGIcon = item.svgIcon ?? false
                    return (
                        <TouchableOpacity onPress={item.onPress} style={styles.horizontalListContainer} key={index}>
                            <View style={styles.iconContainer}>
                                {SVGIcon ? <SVGIcon /> :
                                    <Icon type={item.iconType} name={item.icon} size={16} style={{ color: colors.P_TEXT }} />
                                }
                            </View>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameText}>{item.name}</Text>
                            </View>
                            <ChevronRightArrow />
                            <View style={{ width: ws(327), borderWidth: 0.5, borderColor: '#DADADA', paddingHorizontal: ws(16), marginTop: hs(14), backgroundColor: '#F4F4F5' }}></View>
                        </TouchableOpacity>
                    );
                }}
            />
            <TouchableOpacity onPress={logout} style={{ height: hs(40), width: ws(311), backgroundColor: colors.S_BG, borderRadius: 20, alignSelf: 'center', marginTop: hs(20), flexDirection: 'row' }}>
                <View>
                    <Icon type='SimpleLineIcons' name="logout" size={11} color={colors.S_TEXT} style={{ marginTop: hs(13), marginLeft: ws(123) }} />
                </View>
                <View style={{ marginTop: ws(8), marginLeft: ws(5) }}>
                    <Text style={{ fontSize: 14, color:colors.S_TEXT, fontFamily: fontsConfig.POPPINS_REGULAR, fontWeight: '500' }}>Logout</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({

    Container: {
        height: hs(720),
        width: ws(375),
        backgroundColor:colors.P_BG,
    },
    iconContainer: {
        marginTop: hs(14),
        marginLeft: ws(16)
    },
    horizontalListContainer: {
        height: hs(50),
        width: '100%',
        marginTop: hs(10),
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: ws(16),
          },
    image: {
        height: '100%',
        width: '100%',
    },
    nameContainer: {
        width: wp('70%'),
        height: hs(21),
        marginTop: hs(10),
        marginLeft: ws(15)
    },
    nameText: {
        color: colors.P_TEXT,
        fontSize: 14,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400'
    },
    rightIcon: {
        height: hs(15),
        width: ws(10),
        marginTop: hs(14)
    },
})

export default ProfileScreenDetailsSection;