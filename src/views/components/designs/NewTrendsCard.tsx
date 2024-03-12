import { IMAGES } from '@assets/images/png';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const NewTrendsCard = ({ item, index }: any) => {
    return (
        <View style={styles.imageContainer} key={index}>
            <Image source={item.source} style={styles.image} />
        </View>

    );
}

const styles = StyleSheet.create({

    imageContainer: {
        height: hs(165),
        marginVertical: hs(15),
        width: ws(158),
        marginLeft: ws(16)
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 20
    }
})

export default NewTrendsCard;