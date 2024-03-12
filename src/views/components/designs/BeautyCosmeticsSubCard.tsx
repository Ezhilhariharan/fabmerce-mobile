import { IMAGES } from '@assets/images/png';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const BeautyCosmeticsSubCard = ({ item, index }: any) => {
    return (
        <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
        </View>

    );
}

const styles = StyleSheet.create({

    imageContainer: {
        height: hs(160),
        width: ws(160),
        marginLeft: ws(15),
        marginTop: hs(15)
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 20,
    }
})

export default BeautyCosmeticsSubCard;