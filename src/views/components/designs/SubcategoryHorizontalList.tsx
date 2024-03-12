import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { hs, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from '../functional/Icon';

const SubcategoryHorizontalList = ({ item, index }: any) => {
    return (
        <View style={styles.container} key={index} >
            <View style={styles.leftSideor_rightSide}>
                <View style={styles.row}>
                    <View>
                        <Icon type='AntDesign' name="hearto" size={14} color="black" />
                    </View>
                    <View>
                        <Text style={styles.categoryText}>{item.name}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.subCategoryOverallContainer}>
                {
                    item?.children?.map((data: any) => (
                        <View style={styles.subCategoryMainContainer}>
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: data.profile_photo }} style={styles.image} />
                            </View>
                            <View style={styles.subCategoryNameContainer}>
                                <Text style={styles.subCategoryText}>{data.name}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        paddingHorizontal: 5,
        backgroundColor: "white",

    },
    subCategoryOverallContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    subCategoryMainContainer: {
        width: ws(60),
        minHeight: hs(120),
        marginHorizontal: ws(16),
        marginTop: hs(22)
    },
    loginButtonbottomOr: {
        paddingHorizontal: ws(8),
    },
    flexDirection: {
        flexDirection: 'row',
        marginTop: hs(9),
        paddingHorizontal: ws(8),
        alignItems: 'center',
        justifyContent: "space-between"
    },
    leftSideor_rightSide: {
        width: "100%",
        marginTop: hs(9),
        borderTopColor: colors.BLACK,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative"
    },
    categoryText: {
        marginLeft: ws(4),
        fontSize: 12,
        color: colors.P_TEXT,
        alignSelf: 'center',
        fontWeight: '500',
        fontFamily: fontsConfig.POPPINS_REGULAR,
    },
    imageContainer: {
        height: hs(80),
        width: ws(60),
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 10
    },
    subCategoryNameContainer: {
        minHeight: hs(19),
        marginTop: hs(5),
        minWidth: ws(43),
        alignSelf: 'center'
    },
    subCategoryText: {
        fontSize: 11,
        color: colors.P_TEXT,
        textAlign: 'center',
        fontWeight: '400',
        fontFamily: fontsConfig.POPPINS_REGULAR,
    },
})

export default SubcategoryHorizontalList;