import React, { ReactElement } from 'react';
import { ActivityIndicator, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle, } from 'react-native';
import { hs, ms, ws } from '@utilis/designs/measurements.design';
import colors from '@config/colors.config';
import design from '@config/design.config';
import fontsConfig from '@config/fonts.config';


interface IButton {
    isLoading?: boolean;
    label: string;
    onPress?: ((props: any) => void) | undefined;
    renderLTContent?: () => ReactElement;
    renderRTContent?: () => ReactElement;
    backgroundColor?: string;
    color?: string;
    width?: any;
    height?: any;
    fontSize?: any;
    fontWeight?:any;
    fontFamily?:any;
    style?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
}

export const Button = ({ isLoading,fontSize, label, height, width, fontFamily, fontWeight,renderLTContent, renderRTContent, backgroundColor, color, onPress, style, textStyle }: IButton) => {
    return (
        <TouchableOpacity
            disabled={!onPress}
            onPress={onPress}
            activeOpacity={design.OPACITY_AVG}
            style={[styles.container, { backgroundColor, height, width }, style]}
        >
            {renderLTContent && renderLTContent()}
            {isLoading ?
                <ActivityIndicator color={colors.P_BG} size={ms(30)} />
                :
                <Text style={[design.TEXT_STYLE_2, {fontSize,color, fontWeight, fontFamily }, textStyle]}>{label}</Text>
            }
            {renderRTContent && renderRTContent()}
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 10,
        alignSelf: 'center',
        paddingHorizontal:hs(32),
        alignItems: "center",
        fontFamily:fontsConfig.POPPINS_BLACK,
        justifyContent: "center"
    }
})