import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { hs, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import {StyleSheet, Text,TouchableOpacity, View } from 'react-native';

const NotificationCard = ({ onLFPress }: any) => {
    return (
        <View style={styles.container}>
            {/* push notification */}
            <View style={styles.MainContainer}>
                <View style={styles.NotificationContainer}>
                    <Text style={styles.NotificationText}>Push Notification</Text>
                </View>
                <TouchableOpacity style={styles.toggle}>
                    <View style={[styles.innerToggle, { backgroundColor: '#F4F4F5', },]}></View>
                    <View style={[styles.circleToggle, { marginLeft: 0, backgroundColor: colors.P_TEXT, },]}></View>
                </TouchableOpacity>
            </View>
            {/* in app notification */}
            <View style={styles.MainContainer}>
                <View style={styles.NotificationContainer}>
                    <Text style={styles.NotificationText}>In-App Notification</Text>
                </View>
                <TouchableOpacity style={styles.toggle}>
                    <View style={[styles.innerToggle, { backgroundColor: '#F4F4F5', },]}></View>
                    <View style={[styles.circleToggle, { marginLeft: 0, backgroundColor: colors.P_TEXT, },]}></View>
                </TouchableOpacity>
            </View>
            {/* whatsApp notification */}
            <View style={styles.MainContainer}>
                <View style={styles.NotificationContainer}>
                    <Text style={styles.NotificationText}>WhatsApp Notification</Text>
                </View>
                <TouchableOpacity style={styles.toggle}>
                    <View style={[styles.innerToggle, { backgroundColor: '#F4F4F5', },]}></View>
                    <View style={[styles.circleToggle, { marginLeft: 0, backgroundColor: colors.P_TEXT, },]}></View>
                </TouchableOpacity>
            </View>
            {/* SMS notification */}
            <View style={styles.MainContainer}>
                <View style={styles.NotificationContainer}>
                    <Text style={styles.NotificationText}>SMS Notification</Text>
                </View>
                <TouchableOpacity style={styles.toggle}>
                    <View style={[styles.innerToggle, { backgroundColor: '#F4F4F5', },]}></View>
                    <View style={[styles.circleToggle, { marginLeft: 0, backgroundColor: colors.P_TEXT, },]}></View>
                </TouchableOpacity>
            </View>
            {/* Email notification */}
            <View style={styles.MainContainer}>
                <View style={styles.NotificationContainer}>
                    <Text style={styles.NotificationText}>Email Notification</Text>
                </View>
                <TouchableOpacity style={styles.toggle}>
                    <View style={[styles.innerToggle, { backgroundColor: '#F4F4F5', },]}></View>
                    <View style={[styles.circleToggle, { marginLeft: 0, backgroundColor: colors.P_TEXT, },]}></View>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    NotificationText: {
        fontSize: 14,
        color: '#000000',
        fontFamily:fontsConfig.POPPINS_REGULAR,
        fontWeight:'400'
    },
    toggle: {
        height: 25,
        marginLeft: ws(168),
    },
    innerToggle: {
        height: 16,
        width: 43,
        backgroundColor: 'F4F4F5',
        borderRadius: 15,
    },
    NotificationContainer: {
        width: ws(119),
        height: hs(22),
        marginLeft: ws(17),
    },
    MainContainer: {
        flexDirection: 'row',
        marginTop: hs(30),
        width: '100%',
    },
    circleToggle: {
        position: 'absolute',
        top: -2,
        height: 20,
        width: 20,
        backgroundColor: '#217CCC',
        marginLeft: 21,
        borderRadius: 15,
    },
})

export default NotificationCard;