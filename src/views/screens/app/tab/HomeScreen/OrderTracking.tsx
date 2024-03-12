import React, { useEffect, useState } from 'react';
import { ScrollView } from '@views/components/functional/Scrollview';
import { View, StyleSheet, Platform, StatusBar, Text, TouchableOpacity } from 'react-native';
import LabelTopHeader from '@views/components/designs/LabelTopHeader';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import colors from '@config/colors.config';
import { hs, ms, ws } from '@utilis/designs/measurements.design';
import fontsConfig from '@config/fonts.config';
import { CloseCircle } from "@assets/images/svg";
import { Image } from 'react-native';
import FabmerceApi from '@models/api/FabmerceApi';
import moment from "moment";

const OrderTracking = ({ route, navigation }: any) => {
    const SVGIcon = CloseCircle
    const [orderInfo, setOrderInfo] = useState<any>({})
    const data = [
        { title: 'Order Placed', isCurrent: true, index: 1 },
        { title: 'Shipped', isCurrent: false, index: 2 },
        { title: 'Out Of Delivery', isCurrent: false, index: 3 },
        { title: 'Delivered', isCurrent: false, index: 4 },
    ];
    const { orderId } = route.params;
    console.log("orderID", orderId)
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        FabmerceApi.orderStatues(orderId).then((res) => {
            console.log("orderStatues ==>", res)
        }).catch(e => console.log("orderStatues ==>error", e))
        FabmerceApi.trackingOrders(orderId).then((res) => {
            setOrderInfo(res?.data?.data)
        }).catch(e => console.log("orderTracking ==>error", e))
    }
    let lastData = data.slice(-1)
    let orderDate = orderInfo?.order_confirmed_at && moment(orderInfo?.order_confirmed_at).format('Do MMM YYYY')
    let deliveryDate = orderInfo?.order_delivered_at && moment(orderInfo?.order_delivered_at).format('Do MMM YYYY')
    return (
        <View style={styles.container}>
            <LabelTopHeader label='Order Details' onLFPress={() => NavServiceUtils.goBack()} />
            <View style={styles.body}>
                <ScrollView >
                    <Text style={styles.title}>Order Tracking</Text>
                    <View style={styles.bottomLine} />
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
                        <View style={styles.progressBarRow}>

                            <View style={styles.progressBarRight}>
                                <Text style={styles.left}>Order Date:</Text>
                                <Text style={styles.left}>Delivery:</Text>
                                <Text style={styles.left}>Order No:</Text>
                            </View>
                            <View style={styles.progressBarRight}>
                                <Text style={styles.right}> {orderDate && orderDate}</Text>
                                <Text style={styles.right}> {deliveryDate && deliveryDate}</Text>
                                <Text style={styles.right}> {orderInfo?.source_id}</Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.cancel}>
                        <Text style={styles.icon}><SVGIcon /> </Text>
                        <Text style={styles.text}>Cancel Order</Text>
                    </View>
                    <Text style={styles.contentHeading}>Order Items</Text>
                    {
                        orderInfo?.line_items?.length > 0 ?
                            orderInfo?.line_items?.map((data: any) => (
                                <View style={styles.shadowCard}>
                                    <View style={styles.orderItem}>
                                        <Image style={styles.itemImage} source={{ uri: data?.product_image }} />
                                        <View style={styles.itemDetails}>
                                            <Text numberOfLines={1} style={styles.name}>{data?.product_name}</Text>
                                            <Text numberOfLines={1} style={styles.description}>{data?.product_description}</Text>
                                            <View style={styles.box}>
                                                <Text style={styles.sizeBox}>Size: 40</Text>
                                                <Text style={styles.sizeBox}>Qty: {data?.quantity}</Text>
                                            </View>
                                            <Text style={styles.stock}>In Stock</Text>
                                            <Text style={styles.amount}>{'\u20B9'} {data?.total_price}</Text>
                                            <View style={styles.itemsBottomLine}></View>
                                        </View>
                                    </View>
                                </View>
                            ))
                            :
                            <View style={styles.flexDirection}><Text style={styles.holderName}>No Item Available</Text></View>
                    }
                    <View style={styles.addressContent}>
                        <Text style={styles.contentHeading}>Shipping Address</Text>
                        <Text style={styles.holderName}>{orderInfo?.shipping_address?.contact_firstname}  {orderInfo?.shipping_address?.contact_lastname}</Text>
                        <Text style={styles.address}>{orderInfo?.shipping_address?.address_line_1}</Text>
                        <Text style={styles.address}>{orderInfo?.shipping_address?.address_line_2}</Text>
                        <Text style={styles.address}>{orderInfo?.shipping_address?.city} {orderInfo?.shipping_address?.province} {orderInfo?.shipping_address?.postal_index_code}</Text>
                        <Text style={styles.number}>MobileNumber : {orderInfo?.shipping_address?.contact_number}</Text>
                    </View>
                    <View style={styles.addressContent}>
                        <Text style={styles.contentHeading}>Billing Address</Text>
                        <Text style={styles.holderName}>{orderInfo?.billing_address?.contact_firstname}  {orderInfo?.billing_address?.contact_lastname}
                        </Text>
                        <Text style={styles.address}>{orderInfo?.billing_address?.address_line_1}</Text>
                        <Text style={styles.address}>{orderInfo?.billing_address?.address_line_2}</Text>
                        <Text style={styles.address}>{orderInfo?.billing_address?.city} {orderInfo?.billing_address?.province} {orderInfo?.billing_address?.postal_index_code}</Text>
                        <Text style={styles.number}>MobileNumber : {orderInfo?.billing_address?.contact_number}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.contentHeading}>Payment Method</Text>
                        <Text style={styles.holderName}>Cash</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.address}>Total MRP</Text>
                        <Text style={styles.address}>₹ {orderInfo?.sub_total_price}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.address}>Discount MRP</Text>
                        <Text style={styles.address}>₹ {orderInfo?.discount_amount}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.address}>Delivery Fee</Text>
                        <Text style={styles.address}>{orderInfo?.total_shipping_price}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.address}>Total Amount</Text>
                        <Text style={styles.address}>₹ {orderInfo?.total_price}</Text>
                    </View>
                    <TouchableOpacity style={styles.paymentButton}>
                        <Text style={styles.payment}>Amount Payable</Text>
                        <Text style={styles.payment}>₹ {orderInfo?.total_price}</Text>
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
    flexDirection: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    bottomLine: {
        width: "100%",
        borderWidth: 1,
        borderColor: '#999999',
        marginTop: hs(10),
        fontFamily: fontsConfig.POPPINS_EXTRA_BOLD,
    },
    body: {
        paddingHorizontal: 15,
        paddingVertical: 25,
        backgroundColor: colors.P_BG
    },
    cancel: {
        height: hs(70),
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
    },
    text: {
        color: colors.RED,
        fontWeight: '500',
        fontSize: ms(18),
    },
    icon: {
        marginTop: 4
    },
    contentHeading: {
        fontWeight: "400",
        fontSize: ms(21),
        color: colors.T_TEXT,
        paddingVertical: 6,
    },
    holderName: {
        fontWeight: "400",
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
    shadowCard: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    orderItem: {
        width: '98%',
        borderRadius: 15,
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 15,
        shadowColor: colors.BLACK,
        elevation: 5,
        flexDirection: "row",
    },
    itemImage: {
        height: 140,
        width: 100,
        // borderColor: colors.T_TEXT,
        // borderWidth: 1,
        borderRadius: 10,
        resizeMode: 'contain'
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
        fontSize: ms(17),
        color: colors.P_TEXT,
        marginVertical: 3
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
    row: {
        flexDirection: "row",
        paddingVertical: 3,
        justifyContent: 'space-between'
    },
    bottomSpace: {
        marginBottom: 30,
    },
    paymentButton: {
        backgroundColor: colors.S_BG,
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent: 'space-between',
        borderRadius: 8,
        marginTop: 5
    },
    payment: {
        color: colors.S_TEXT,
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
        paddingVertical: 25,
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
export default OrderTracking;