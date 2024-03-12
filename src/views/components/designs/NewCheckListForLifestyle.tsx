import { IMAGES } from '@assets/images/png';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const NewCheckListForLifestyle = ({ item, index, }: any) => {
    return (
        <View style={styles.imageContainer}>
            <View style={styles.leftImage}>
                <Image source={item.image1} style={styles.image} />
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.rightFirstImage}>
                    <Image source={item.image2} style={styles.image} />
                </View>
                <View style={styles.rightSecondImage}>
                    <Image source={item.image3} style={styles.image} />
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    imageContainer: {
        width: ws(339),
        marginTop: hs(10),
        flexDirection: 'row',
        height: hs(240),
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 20
    },
    leftImage: {
        height: hs(236),
        width: ws(207)
    },
    rightContainer: {
        marginLeft: ws(10)
    },
    rightFirstImage: {
        height: hs(110),
        width: ws(120)
    },
    rightSecondImage: {
        height: hs(110),
        width: ws(120),
        marginTop: hs(10)
    },
})

export default NewCheckListForLifestyle;