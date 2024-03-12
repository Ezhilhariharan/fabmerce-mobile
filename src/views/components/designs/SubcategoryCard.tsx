import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const SubcategoryCard = ({ imageSrc, index, onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.imageContainer} key={index}>
            <Image source={imageSrc} style={styles.image} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        height: hs(160),
        width: ws(333),
        marginHorizontal: ws(16),
        marginTop: hs(15)
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        borderRadius: 20
    }
})

export default SubcategoryCard;