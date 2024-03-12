import { IMAGES } from '@assets/images/png';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { DevSettings, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import design from '@config/design.config';

const TrendingBrandsCard = ({ item, index, onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.imageContainer} activeOpacity={0.95}>
            <Image source={{ uri: item.icon_photo }} style={styles.image} />
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    imageContainer: {
        height: hs(168),
        width: ws(120),
        marginLeft: ws(16),
        marginTop: hs(15)
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch'
    },
    brandImage: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 10,
        height: hs(50),
        width: ws(106),
        top: hs(113)
    },
})

export default TrendingBrandsCard;