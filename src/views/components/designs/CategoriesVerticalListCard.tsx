import { IMAGES } from '@assets/images/png';
import fontsConfig from '@config/fonts.config';
import { hs, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import colors from '@config/colors.config';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CategoriesVerticalListCard = ({ item, index, categoryName,active }: any) => {
    return (
        <TouchableOpacity style={active == item.name ? styles.activeContainer :styles.container} onPress={() => categoryName(item.name)}  key={index}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.profile_photo }} style={styles.image} />
            </View>
            <View style={styles.categoryNameContainer}>
                <Text style={active == item.name ? styles.activeSelectSizeText : styles.selectSizeText}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    imageContainer: {
        height: hs(30),
        width: ws(30),
        marginTop: hs(16),
        alignSelf: 'center'
    },
    container: {
        borderBottomWidth: 1,
        borderBottomColor: colors.DARK_GREY,
        backgroundColor: colors.LIGHTGREY,
        height: hs(100),
        width: ws(80),
    },
    activeContainer: {
        borderBottomWidth: 1,
        borderBottomColor: colors.DARK_GREY,
        backgroundColor: colors.WHITE,
        height: hs(100),
        width: ws(80),
    },
    categoryNameContainer: {
        minHeight: hs(13),
        marginTop: hs(10),
        minWidth: ws(43),
        alignSelf: 'center'
    },
    selectSizeText: {
        fontSize: 11,
        color: colors.T_TEXT,
        textAlign: 'center',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        textTransform: 'uppercase'
    },
    activeSelectSizeText: {
        fontSize: 11,
        color: colors.PRIMARY_COLOR,
        textAlign: 'center',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        textTransform: 'uppercase'
    },
    image: {
        height: 35,
        width: 30,
    }
})

export default CategoriesVerticalListCard;