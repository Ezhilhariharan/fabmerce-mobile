import { IMAGES } from '@assets/images/png';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

const ProductDescriptionImageCard = ({ item, index }: any) => {
    return (
        <View style={styles.imageContainer}>
            <ImageBackground source={{ uri: item.banner_url }} style={styles.image} blurRadius={2} >
            <View style={styles.insideImageContainer}>
            <Image source={{ uri: item.banner_url }} style={styles.image}/>
            </View>
            </ImageBackground>
        </View>
        
    );
}

const styles = StyleSheet.create({

    imageContainer: {
        height: hs(409),
        width: ws(375),
    },
    image: {
        height: '100%',
        width: '100%',
        // resizeMode: 'stretch',
        borderRadius: 20
    },
    insideImageContainer: {
        height: hs(409),
        width: ws(250),
        alignSelf:'center',
        position:'absolute'
    },
})

export default ProductDescriptionImageCard;