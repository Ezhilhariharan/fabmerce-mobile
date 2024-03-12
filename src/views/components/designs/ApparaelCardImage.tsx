import { IMAGES } from '@assets/images/png';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const ApparaelCardImage = ({ item, index, onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.imageContainer} key={index}>
            <Image source={{ uri: item.profile_photo }} style={styles.image} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    imageContainer: {
        height: hs(172),
        width: ws(132),
        marginLeft: ws(16),
        marginTop: hs(15)
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        borderRadius: 20
    }
})

export default ApparaelCardImage;