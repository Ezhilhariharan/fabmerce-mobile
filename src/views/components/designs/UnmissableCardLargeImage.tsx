import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FlatList } from '../functional/Flatlist';

const UnmissableCardLargeImage = ({ data }: any) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={IMAGES.unmissabletrendslargeimage} style={{ height: '100%', width: '100%', borderRadius: 15 }} >
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.categoryContainer}>
                        <Text style={styles.PriceText}>CLOTHING</Text>
                    </View>
                    <FlatList
                        listKey={'unmissableListSmall'}
                        data={data.data}
                        contentContainerStyle={{ paddingRight: ws(16) }}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.PRODUCT_LISTING, { query: { sub_category_id: item.slug } })}
                                    style={styles.imageContainer}
                                    activeOpacity={0.95}
                                >
                                    <Image source={{ uri: item.profile_photo }} style={styles.image} />
                                    <View style={styles.categoryName}>
                                        <Text style={styles.categoryNameText}>{item.name}'s Wear</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                        horizontal={true}
                    />
                </View>
            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: hs(160),
        width: ws(343),
        marginHorizontal: ws(16),
        marginVertical: hs(20)
    },
    categoryContainer: {
        height: hs(40),
        width: ws(103),
        borderBottomColor: colors.S_TEXT,
        marginLeft: ws(5),
        borderBottomWidth: 1,
        marginTop: ws(55),
        backgroundColor: colors.TRANSPARENT,
        marginVertical: ws(4)
    },
    PriceText: {
        fontSize: 20,
        color: colors.S_TEXT,
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '600'
    },
    discountPriceText: {
        fontSize: 30,
        color: '#F67600',
        alignSelf: 'center',
        marginTop: hs(6),
        alignItems: 'center',
        justifyContent: 'center'
    },
    originalPriceText: {
        fontSize: 16,
        color: '#F67600',
        alignSelf: 'center',
        marginTop: hs(6),
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        height: hs(130),
        width: ws(90),
        marginLeft: ws(16),
        marginVertical: hs(15)
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 15
    },
    categoryName: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        alignSelf: 'center',
        height: hs(21),
        width: ws(76),
        top: hs(100)
    },
    categoryNameText: {
        fontSize: 9,
        marginVertical: hs(3),
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '500',
        textAlign: 'center',
        color: colors.P_TEXT,
    },
})

export default UnmissableCardLargeImage;