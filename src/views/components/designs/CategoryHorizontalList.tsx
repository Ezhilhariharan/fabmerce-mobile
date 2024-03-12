import { IMAGES } from '@assets/images/png';
import fontsConfig from '@config/fonts.config';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import { hs, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '@config/colors.config';
import Avatar from '../../components/functional/Avatar'

const CategoryList = ({ item, index }: any) => {
    return (
        <TouchableOpacity
            onPress={() =>
                NavServiceUtils.navigate(NavKeys.HOME_STACK.SUBCATEGORY_SCREEN, { data: item })
            }
            style={styles.container}
            activeOpacity={1}
        >
            <View style={styles.imageContainer}>
                {item.profile_photo ?
                <Avatar source={{ uri: item.profile_photo }} variant="rounded" width={60} height={60} />
                    // <Image source={{ uri: item.profile_photo }} style={styles.image} />
                    : null}
            </View>
            <View style={styles.categoryNameContainer}>
                <Text numberOfLines={1} style={styles.selectSizeText}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        height: hs(60),
        alignSelf: 'center',
        width: hs(60),
        resizeMode:'stretch',
        overflow: 'hidden',
        borderRadius: 100
    },
    container: {
        height: 85,
        width: 70,
        marginLeft: ws(16),
        marginTop: hs(9),
    },
    categoryNameContainer: {
        height: hs(20),
        minWidth: ws(60),
        marginTop: hs(10),
        alignSelf: 'center'
    },
    selectSizeText: {
        fontSize: 11,
        color: colors.P_TEXT,
        alignSelf: 'center',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch'
    }
})

export default CategoryList;