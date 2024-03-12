import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Icon } from '../functional/Icon';


const CardModalDesign = () => {
    return (
        <View style={styles.container}>
            <View style={styles.sortAndFilterMainContainer}>
                <View style={styles.sortAndFilterIconContainer}>
                    <Icon type='MaterialIcons' name="sort" size={14} color="black" />
                </View>
                <View style={styles.sortAndFilterTextContainer}>
                    <Text style={styles.sortAndFilterText}>SORT BY</Text>
                </View>
            </View>
            <View style={styles.sortAndFilterMainContainer}>
                <View style={styles.sortAndFilterIconContainer}>
                    <Icon type='AntDesign' name="filter" size={14} color="black" />
                </View>
                <View style={styles.sortAndFilterTextContainer}>
                    <Text style={styles.sortAndFilterText}>FILTER</Text>
                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: hs(40),
        backgroundColor: '#F4F4F5',
        width: wp('100%'),
        flexDirection: 'row'
    },
    sortAndFilterText: {
        fontSize: 10,
        color: '#000000',
    },
    sortAndFilterMainContainer: {
        height: hs(40),
        width: wp('50%'),
        flexDirection: 'row',
        borderRightWidth: 1,
        borderColor: '#999999'
    },
    sortAndFilterIconContainer: {
        marginLeft: ws(60),
        marginVertical: hs(12)
    },
    sortAndFilterTextContainer: {
        marginVertical: hs(12),
        marginHorizontal: ws(5)
    },
})

export default CardModalDesign;