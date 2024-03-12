import React from 'react';
import { ActivityIndicator, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle, } from 'react-native';
import { hs, ms, ws } from '@utilis/designs/measurements.design';
import colors from '@config/colors.config';
import design from '@config/design.config';
import fonts from '@config/fonts.config';


interface ICardButton {
    isLoading?: boolean;
    title: string;
    onPress?: ((props: any) => void) | undefined;
    bg?: string;
    color?: string;
    viewStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    icon?: any;
}

export const CardButton = ({ isLoading, title, bg, color, onPress, viewStyle, textStyle, icon }: ICardButton) => {
    const Icon: any = icon
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={!onPress}
            activeOpacity={design.OPACITY_AVG}
            style={[styles.container, { backgroundColor: bg ?? colors.RED }, viewStyle]}
        >
            {Icon ?
                <Icon height={ms(12)} width={ms(12)} style={{ marginRight: ws(8) }} />
                : null}
            {isLoading ?
                <ActivityIndicator color={colors.P_BG} size={ms(11)} />
                :
                <Text style={[styles.title, { color: color ?? colors.RED }, textStyle]}>
                    {title}
                </Text>
            }
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: hs(24),
        minWidth: ws(89),
        borderRadius: 4,
        alignItems: "center",
        justifyContent: 'space-evenly',
        paddingHorizontal: ws(8)
    },
    title: {
        fontSize: ms(11),
        fontWeight: '400',
        fontFamily: fonts.BOOK,
        color: colors.P_BG
    }
})

/*
    Ref:
    bg={colors.CFFE1C5} color={colors.CEF6100}
    bg={colors.CBE4C7} color={colors.C608D58}
    bg={colors.CFFE5E4} color={colors.CC7302B}
    bg={colors.CC7302B} color={colors.Cffffff}
*/