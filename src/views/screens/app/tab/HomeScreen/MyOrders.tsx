import React, { useEffect, useState, useRef } from 'react';
import {
    View, StyleSheet, Platform, StatusBar, Text,
    TouchableOpacity, TextInput, Modal, Image
} from 'react-native';
import LabelTopHeader from '@views/components/designs/LabelTopHeader';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import colors from '@config/colors.config';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import { Icon } from '../../../../components/functional/Icon';
import fontsConfig from '@config/fonts.config';
import { Filter, Exit, SadEmoji } from "@assets/images/svg";
import { RadioButton } from 'react-native-paper';

const OrderDispatched = ({ route, navigation }: any) => {
    const FilterSVG = Filter
    const ExitSVG = Exit
    const SadSvg = SadEmoji
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState('All');
    const data = [
        { type: 'true', name: 'All', ind: 1 },
        { type: 'false', name: 'Ordered', ind: 2 },
        { type: 'false', name: 'Shipped', ind: 3 },
        { type: 'false', name: 'Delivered', ind: 4 },
        { type: 'false', name: 'Cancelled', ind: 5 },
        { type: 'false', name: 'Exchange', ind: 6 },
        { type: 'false', name: 'Return', ind: 6 },
    ]
    return (
        <View style={styles.container}>
            <LabelTopHeader label='Orders' onLFPress={() => NavServiceUtils.goBack()} />
            <View style={styles.body}>
                <Text style={styles.ordersTitle} >Your Orders</Text>
                <View style={styles.row}>
                    <View style={styles.searchBoxMainContainer}>
                        <View style={styles.searchIconContainer}>
                            <Icon type='Ionicons' name="ios-search-sharp" size={18} style={styles.iconSearch} />
                        </View>
                        <View style={styles.searchInputContainer}>
                            <TextInput
                                placeholder={'Search all orders'}
                                placeholderTextColor={colors.T_TEXT}
                                style={styles.textInput}
                                editable={false}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.popupIcon}
                        onPress={() => setModalVisible(true)}><FilterSVG /></TouchableOpacity>
                </View>
                <View style={styles.noCards}>
                    <View style={styles.sadsmily}><SadSvg /></View>
                    <Text style={styles.Content}>Sorry! You haven’t </Text>
                    <Text style={styles.Content}>purchased yet </Text>
                    <TouchableOpacity style={styles.shopButton} >
                        <Text style={styles.text}>Shop Now</Text>
                    </TouchableOpacity>
                </View>

                {/* <View style={styles.flexRow} >
                    <Image style={styles.orderItem}></Image>
                    <View style={styles.orderDetails}>
                        <Text style={styles.ItemName}>Nibin Fashions</Text>
                        <Text style={styles.ItemVariant} numberOfLines={1}>Traditional Kerala Kasavu Onam </Text>
                        <Text style={styles.trackingDate}>Despatching on 25- 08-2022</Text>
                    </View>
                </View> */}
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() =>
                    setModalVisible(!modalVisible)
                }
            >
                <View style={styles.centeredView}>
                    <View style={styles.exitButton}><ExitSVG onPress={() => setModalVisible(false)} /></View>
                    <View style={styles.popupBody}>
                        <Text onPress={() => setModalVisible(!modalVisible)}
                            style={styles.popupTitle}>Order Type</Text>
                        {
                            data.map(item => (
                                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                                    <View style={styles.orderType}>
                                        <RadioButton value={item.name} color="#072255" />
                                        <Text style={styles.typeContent}>{item.name}</Text>
                                    </View>
                                </RadioButton.Group>
                            ))
                        }
                        <View style={styles.popupBorder} />
                        <View style={styles.alignButton}>
                            <TouchableOpacity style={styles.filterButton}>
                                <Text style={styles.buttonName}>Apply Filter</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight,
        backgroundColor: colors.P_BG
    },
    centeredView: {
        flex: 1,
        backgroundColor: "#000000AA",
        justifyContent: 'flex-end',
    },
    alignButton: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    body: {
        paddingVertical: 13,
        paddingHorizontal: 13,
    },
    popupBody: {
        backgroundColor: colors.P_BG,
        width: "100%",
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        height: 380
    },
    popupTitle: {
        flex: 1,
        color: colors.P_TEXT,
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 10,
    },
    popupBorder: {
        borderColor: colors.LIGHTGREY,
        borderWidth: 1,
        marginTop: 10,
    },
    orderType: {
        flexDirection: 'row',
        alignItems: "center",
    },
    typeContent: {
        color: colors.P_TEXT,
        fontSize: 14,
        fontWeight: '500'
    },
    ordersTitle: {
        color: colors.P_TEXT,
        fontSize: 14,
        fontWeight: '500'
    },
    filterButton: {
        backgroundColor: colors.S_BG,
        width: ws(150),
        height: hs(40),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginTop: 10
    },
    buttonName: {
        color: colors.S_TEXT,
        fontSize: 14,
        fontWeight: '500'
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingVertical: 15
    },
    noCards: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15
    },
    Content: {
        color: colors.P_TEXT,
        fontSize: hs(25)
    },
    sadsmily: {
        paddingVertical: 30
    },
    shopButton: {
        width: ws(230),
        height: hs(45),
        backgroundColor: colors.S_BG,
        color: colors.P_TEXT,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    text: {
        color: colors.S_TEXT,
        fontSize: hs(22),
    },
    exitButton: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingVertical: 25
    },
    searchBoxMainContainer: {
        height: hs(40),
        borderRadius: 7,
        width: ws(290),
        marginVertical: hs(15),
        flexDirection: 'row',
        backgroundColor: colors.LIGHTGREY
    },
    searchIconContainer: {
        height: hs(40),
        width: ws(25),
        marginLeft: ws(9),
        marginVertical: hs(2),
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchInputContainer: {
        width: wp('50%'),
        paddingTop: hs(3),
        height: hs(50),
    },
    iconSearch: {
        color: colors.T_TEXT,
    },
    textInput: {
        height: 35,
        color: 'black',
        fontFamily: fontsConfig.POPPINS_REGULAR,
        fontWeight: '400',
        padding: 0,
    },
    popupIcon: {
        height: hs(40),
        borderRadius: 5,
        width: ws(50),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.LIGHTGREY,
        marginVertical: hs(15),
    },
    flexRow: {
        flexDirection: 'row',
    },
    orderItem: {
        height: hs(140),
        width: ws(85),
        borderRadius: 15
    },
    ItemName: {
        color: colors.P_TEXT,
        fontSize: 15,
        fontWeight: '500',
        marginTop: 5
    },
    orderDetails: {
        paddingHorizontal: 10
    },
    ItemVariant: {
        color: colors.T_TEXT,
        fontSize: 14,
        fontWeight: '400',
        marginTop: 5
    },
    trackingDate: {
        color: colors.P_TEXT,
        fontSize: 15,
        fontWeight: '400',
        marginTop: 5
    },
    trackingDateActive: {
        color: colors.GREEN,
        fontSize: 15,
        fontWeight: '400',
        marginTop: 5
    }
})
export default OrderDispatched;