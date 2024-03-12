import React, { useEffect, useState } from 'react';
import { ScrollView } from '@views/components/functional/Scrollview';
import { View, StyleSheet, Platform, StatusBar, Text, TouchableOpacity, Button } from 'react-native';
import LabelTopHeader from '@views/components/designs/LabelTopHeader';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import colors from '@config/colors.config';
import { hs, ms, ws } from '@utilis/designs/measurements.design';
import fontsConfig from '@config/fonts.config';
import { Image } from 'react-native';
import FabmerceApi from '@models/api/FabmerceApi';
import ChevronRightArrow from '../../../../components/designs/ChevronRightArrow';
import { Return, Document, Star } from "@assets/images/svg";

const OrderDispatched = ({ route, navigation }: any) => {
    const ReturnSVG = Return
    const DocumentSVG = Document
    const StarSVG = Star
    const data = [
        { title: 'Order Placed', letter: 'A', isCurrent: true, index: 1 },
        { title: 'Shipped', letter: 'B', isCurrent: true, index: 2 },
        { title: 'Out Of Delivery', letter: 'C', isCurrent: true, index: 3 },
        { title: 'Delivered', letter: 'D', isCurrent: true, index: 4 },
    ];
    const { orderId } = route.params;
    console.log("orderID", orderId)
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        FabmerceApi.trackingOrders(orderId).then((res) => {
            console.log("orderTracking ==>", res)
        }).catch(e => console.log("orderTracking ==>error", e))
    }
    let lastData = data.slice(-1)
    return (
        <View style={styles.container}>
            <LabelTopHeader label='Order Details' onLFPress={() => NavServiceUtils.goBack()} />
            <View style={styles.body}>
                <ScrollView >
                    <View style={styles.orderItem}>
                        <Image style={styles.itemImage} />
                        <View style={styles.itemDetails}>
                            <Text style={styles.name}>Teemaja - Tshirts</Text>
                            <Text numberOfLines={1} style={styles.description}>Cotton Round Neck Onam Festivel ...</Text>
                            <Text style={styles.amount}>{'\u20B9'}249.00</Text>
                            <TouchableOpacity style={styles.buyButton}>
                                <Text style={styles.buttonTitle}>Buy it again</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.borderLine} />
                    <View style={styles.orderProgress}>
                        <View>
                            {data.map((item) => (
                                <View style={styles.barBlock}>
                                    <View style={styles.progressRow}>
                                        <View style={item.isCurrent ? styles.itemWrapActive : styles.itemWrap}>
                                            <View style={item.isCurrent ? styles.activeBGcolor : null} />
                                        </View>
                                        <View style={styles.progressRowContent}>
                                            <Text style={[styles.progressRowTitle, item.isCurrent ? styles.active : styles.unactive]}>{item.title}</Text>
                                            <Text>(Inprogress)</Text>
                                        </View>
                                    </View>
                                    {lastData[0]?.index == item.index ? null : <View style={styles.verticalLine}></View>}
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={styles.itemBox}>
                        <View style={styles.flexRow}>
                            <ReturnSVG style={styles.icon} />
                            <Text style={styles.label}>Return item</Text>
                        </View>
                        <ChevronRightArrow />
                    </View>
                    <Text style={styles.productRiview}>Write a product review</Text>
                    <View style={styles.borderLine} />
                    <View style={styles.review}>
                        <View style={styles.rating} >
                            <StarSVG style={styles.star} />
                            <StarSVG style={styles.star} />
                            <StarSVG style={styles.star} />
                            <StarSVG style={styles.star} />
                            <StarSVG style={styles.star} />
                        </View>
                        <View style={styles.redirect}>
                            <View style={styles.redirectContent}>
                                <Text style={styles.redirectText}>Write a Review</Text>
                            </View>
                            <ChevronRightArrow />
                        </View>
                    </View>
                    <View style={styles.borderLine} />
                    <View style={styles.itemBox}>
                        <View style={styles.flexRow}>
                            <DocumentSVG style={styles.icon} />
                            <Text style={styles.label}>Download Invoice</Text>
                        </View>
                        <ChevronRightArrow />
                    </View>
                    <Text style={styles.shippingDetails}>Shipping Details</Text>
                    <View style={styles.borderLine} />
                    <View style={styles.addressContent}>
                        <Text style={styles.holderName}>Rithika Singh</Text>
                        <Text style={styles.address}>2/465,ABC Nagar st,</Text>
                        <Text style={styles.address}>Guduvanchery</Text>
                        <Text style={styles.address}>Chennai TamilNadu 603202</Text>
                        <Text style={styles.number}>MobileNumber : 9090899888</Text>
                    </View>
                    <Text style={styles.shippingDetails}>Pricing Details</Text>
                    <View style={styles.borderLine} />
                    <View style={styles.row}>
                        <Text style={styles.contentHeading}>Payment Method</Text>                        
                        <Text style={styles.holderName}>Cash</Text>
                    </View>
                    <View style={styles.borderLine} />
                    <View style={styles.row}>
                        <Text style={styles.address}>Total MRP</Text>
                        <Text style={styles.address}>₹ 3414.00</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.address}>Discount MRP</Text>
                        <Text style={styles.address}>₹ 701.00</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.address}>Delivery Fee</Text>
                        <Text style={styles.address}>Free</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.address}>Total Amount</Text>
                        <Text style={styles.address}>₹ 2713.00</Text>
                    </View>
                    <TouchableOpacity style={styles.paymentButton}>
                        <Text style={styles.payment}>Amount Payable</Text>
                        <Text style={styles.payment}>₹ 2713.00</Text>
                    </TouchableOpacity>
                    <View style={styles.bottomSpace}></View>
                </ScrollView>
            </View >
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight,

    },
    title: {
        backgroundColor: "white",
        color: colors.P_TEXT,
        fontWeight: '500',
        fontSize: ms(20),
    },
    borderLine: {
        width: "100%",
        borderWidth: 0.5,
        borderColor: '#999999',
    },
    body: {
        paddingHorizontal: 15,
        paddingVertical: 25,
        backgroundColor: colors.P_BG
    },
    redirect: {
        flexDirection: "row",
    },
    redirectContent: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 3,
    },
    redirectText: {
        fontSize: ms(15),
        color: colors.S_BG,
        paddingHorizontal: 6,
    },
    rightArrow: {
        borederColor: "green",
        borderWidth: 1,
        width: "10%",
        height: "100%",
        alignItems: "center",
    },
    shippingDetails: {
        fontSize: 18,
        color: colors.P_TEXT,
        paddingVertical: 7
    },
    buyButton: {
        borderColor: "#072255",
        borderWidth: 1,
        width: 90,
        height: 26,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 14
    },
    buttonTitle: {
        color: "#072255"
    },
    text: {
        color: colors.RED,
        fontWeight: '500',
        fontSize: ms(18),
    },
    productRiview: {
        color: colors.P_TEXT,
        fontWeight: '400',
        fontSize: ms(16),
        paddingVertical: 5
    },
    icon: {
        marginTop: 1,
    },
    label: {
        color: colors.P_TEXT,
        fontSize: 17,
        fontWeight: "400",
        paddingHorizontal: 8,
    },
    contentHeading: {
        fontWeight: "400",
        fontSize: ms(21),
        color: colors.T_TEXT,
        paddingVertical: 6,
    },
    holderName: {
        fontWeight: "500",
        fontSize: ms(20),
        color: colors.P_TEXT,
        paddingVertical: 7
    },
    address: {
        fontWeight: "400",
        fontSize: ms(16),
        color: colors.T_TEXT,
        paddingVertical: 2
    },
    number: {
        fontWeight: "400",
        fontSize: ms(16),
        color: colors.T_TEXT,
        paddingVertical: 8
    },
    addressContent: {
        paddingVertical: 8
    },
    center: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    orderItem: {
        width: '100%',
        borderRadius: 15,
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 2,
        flexDirection: "row",
    },

    itemImage: {
        height: 140,
        width: 100,
        borderColor: colors.T_TEXT,
        borderWidth: 1,
        borderRadius: 10,
    },
    itemDetails: {
        width: "70%",
        paddingHorizontal: 10,
    },
    sizeBox: {
        height: 20,
        width: 63,
        textAlign: "center",
        alignItems: "center",
        color: colors.P_TEXT,
        fontSize: ms(15),
        backgroundColor: "#F4F4F5",
        marginRight: 10,
    },
    box: {
        flexDirection: "row",
        paddingVertical: 3
    },
    name: {
        fontWeight: "600",
        fontSize: ms(20),
        color: colors.P_TEXT,
        paddingVertical: 3
    },
    description: {
        fontWeight: "400",
        fontSize: ms(16),
        color: colors.T_TEXT,
        paddingVertical: 3
    },
    stock: {
        fontWeight: "500",
        fontSize: ms(15),
        color: "#159400",
        paddingVertical: 3
    },
    amount: {
        fontWeight: "500",
        fontSize: ms(20),
        color: colors.P_TEXT,
        marginVertical: 10
    },
    itemsBottomLine: {
        width: "100%",
        borderWidth: 1,
        borderColor: colors.DOTINACTIVE_COLOR,
        marginVertical: 5
    },
    progressBarRow: {
        flexDirection: "row",
    },
    progressRow: {
        flexDirection: "row",
        position: "relative",
    },
    progressRowContent: {
        position: "absolute",
        left: 23,
        top: -2,
    },
    itemBox: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    rating: {
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    review: {
        width: "100%",
        height: 40,
        flexDirection: "row",
        justifyContent: 'space-between',
        // paddingVertical: 5
    },
    star: {
        height: 30,
        width: 30
    },
    flexRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },
    row: {
        flexDirection: "row",
        paddingVertical: 3,
        justifyContent: 'space-between'
    },
    bottomSpace: {
        marginBottom: 30,
    },
    paymentButton: {
        backgroundColor: "#F4F4F5",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent: 'space-between',
        borderRadius: 8,
        marginTop: 5
    },
    payment: {
        color: colors.P_TEXT,
        fontWeight: "500",
        fontSize: ms(20),
    },
    progressRowTitle: {
        color: colors.T_TEXT,
        fontWeight: "500",
        fontSize: 16,
    },
    barBlock: {
        paddingHorizontal: 4.5
    },
    unactive: {
        color: colors.T_TEXT,
    },
    active: {
        color: colors.GREEN2,
    },
    verticalLine: {
        backgroundColor: colors.DOTINACTIVE_COLOR,
        width: 2,
        height: 60,
        marginLeft: 5,
    },
    itemWrap: {
        width: 13,
        height: 13,
        borderRadius: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.DOTINACTIVE_COLOR,
    },
    itemWrapActive: {
        width: 13,
        height: 13,
        borderRadius: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.DOTACTIVE_COLOR,
    },
    orderProgress: {
        paddingVertical: 35,
        justifyContent: 'space-between',
        flexDirection: "row",
    },
    progressBarRight: {
        alignItems: 'flex-end',
    },
    activeBGcolor: {
        position: "absolute",
        width: 22,
        height: 22,
        borderRadius: 50,
        backgroundColor: "rgba(21, 148, 0, 0.4)",
    },
    left: {
        marginBottom: 15,
        fontWeight: "500",
        fontSize: ms(18),
        color: colors.T_TEXT,
        marginRight: 10,
    },
    right: {
        marginBottom: 15,
        fontWeight: "500",
        fontSize: ms(18),
        color: colors.P_TEXT,
    },
})
export default OrderDispatched;