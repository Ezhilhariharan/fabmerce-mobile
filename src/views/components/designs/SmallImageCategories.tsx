import { IMAGES } from '@assets/images/png';
import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '@config/colors.config';

const SmallImageCategories = ({ item, index, onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.95}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.profile_photo }} style={styles.image} />
            </View>
            <View style={styles.categoryNameContainer}>
                <Text style={styles.categoryName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: hs(160),
        width: ws(100),
        marginLeft: 16,
        marginTop: hs(30)
    },
    imageContainer: {
        height: hs(128),
        width: ws(100),
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        borderRadius: 20
    },
    categoryName: {
        fontSize: 12,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        textAlign: 'center',
        color: colors.P_TEXT,
    },
    categoryNameContainer: {
        marginTop: hs(11)
    }
})

export default SmallImageCategories;