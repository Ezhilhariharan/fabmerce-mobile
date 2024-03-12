import { IMAGES } from '@assets/images/png';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '@config/colors.config';

const KidsWearCard = ({ item, index }: any) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={IMAGES.kidsWearLargeImageBackground} resizeMode="cover" style={{ flex: 1, flexDirection: 'row' }} >
                <View style={styles.mainContainer}>
                    <Image source={{ uri: item.profile_photo }} style={styles.image} />
                </View>
            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: hs(120),
        width: wp('28%'),
        marginTop: hs(20)
    },
    mainContainer: {
        height: hs(110),
        width: ws(82),
        borderRadius: 20,
        marginHorizontal: ws(11),
        backgroundColor:colors.P_BG,
        marginVertical: hs(5)
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 10
    }
})

export default KidsWearCard;