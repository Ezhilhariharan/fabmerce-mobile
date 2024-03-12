import { IMAGES } from '@assets/images/png';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import design from '@config/design.config';


const UnmissableCardSmallImage = ({ item, index, onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.imageContainer} key={index}>
            <Image source={{ uri: item.profile_photo }} style={design.IMAGE} />
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    imageContainer: {
        height: hs(137),
        width: ws(120),
        marginVertical: hs(5),
        marginLeft: ws(16)
    },
})

export default UnmissableCardSmallImage;