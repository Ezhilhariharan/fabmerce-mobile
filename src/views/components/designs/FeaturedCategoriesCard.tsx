import { IMAGES } from '@assets/images/png';
import fontsConfig from '@config/fonts.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '@config/colors.config';

const FeaturedCategoriesCard = ({ item, index, onPress }: any) => {
    return (
        <TouchableOpacity onPress={() => onPress && onPress({ item, index })} style={styles.imageContainer} key={index}>
            <Image source={{ uri: item.profile_photo }} style={styles.image} />
            <View style={styles.categoryName}>
                <Text numberOfLines={1} style={styles.categoryNameText}>{item.name}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    imageContainer: {
        height: hs(120),
        width: ws(100),
        marginTop: hs(15),
        marginLeft: ws(16)
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 15
    },
    categoryName: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        alignSelf: 'center',
        height: hs(30),
        width: ws(100),
        top: hs(90)
    },
    categoryNameText: {
        fontSize: 16,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        textAlign: 'center',
        color: colors.P_TEXT,
    },
})

export default FeaturedCategoriesCard;