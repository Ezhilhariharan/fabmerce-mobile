import colors from "@config/colors.config";
import React from "react";
import { Platform, StatusBar, StyleSheet, View } from 'react-native'

export default ({ container }: any) => {
    return (
        <View style={[styles.container, container]}>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight,
        width: '100%',
        backgroundColor: colors.P_TEXT
    }
})