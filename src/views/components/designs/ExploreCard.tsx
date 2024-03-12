import { IMAGES } from '@assets/images/png';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';

const ExploreCard = ({ onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.imageContainer} activeOpacity={0.95}>
            <Image source={IMAGES.Explore} style={styles.image} />
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    imageContainer: {
        height: hs(128),
        width: ws(343),
        marginTop: hs(15),
        marginLeft: ws(16)
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 15
    }
})

export default ExploreCard;