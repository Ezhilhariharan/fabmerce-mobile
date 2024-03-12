import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Platform, StyleProp, ViewStyle, Image, } from 'react-native';

import { Icon } from '@views/components/functional/Icon';
import { hs, ws } from '@utilis/designs/measurements.design';
import design from '@config/design.config';
import colors from '@config/colors.config';

interface IRenderIcon {
    type: string;
    iconName: string;
    iconType: string;
    iconSize?: number;
    iconColor?: string;
    onPress?: ((args: any) => void) | undefined;
    index: number;
}

interface IRenderTitle {
    type: string;
    title: string;
    index: number;
}

export interface IHeader {
    render: {
        type: string;
        title?: string;
        iconName?: string;
        iconType?: string;
        iconSize?: number;
        iconColor?: string;
        onPress?: ((args: any) => void) | undefined
    }[]
    container?: StyleProp<ViewStyle>;
}

export const MainHeader = ({ render, container }: IHeader) => {

    const renderProfiePicture = ({ onPress, index }: IRenderIcon) => {
        return null
    }

    const renderIcon = ({ iconName, iconType, iconSize, iconColor, onPress, index }: IRenderIcon) => {
        return (
            <TouchableOpacity onPress={onPress} style={styles.iconContainer} activeOpacity={design.OPACITY_AVG} key={index}>
                {iconType && iconName && (
                    <Icon type={iconType} name={iconName} size={iconSize ?? 24} color={iconColor ?? colors.WHITE} />
                )}
            </TouchableOpacity>
        )
    }

    const renderTitle = ({ title, index }: IRenderTitle) => {
        return (
            <Text numberOfLines={1} style={[design.TEXT_STYLE_15_B, styles.titleText]} key={index}>{title}</Text>
        )
    }

    return (
        <View style={[styles.container, container]}>
            {render?.map((item: any, index: any) => {
                switch (item.type) {
                    case "ProfilePicture":
                        return renderProfiePicture({ ...item, index })
                    case "Icon":
                        return renderIcon({ ...item, index })
                    case "Title":
                        return renderTitle({ ...item, index })
                    default:
                        return null
                }
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        height: hs(80),
        paddingTop: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight,
        alignItems: 'center',

        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: colors.P_BG
    },
    iconContainer: {
        height: "100%",
        width: ws(50),
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        height: ws(30),
        width: ws(30),
        borderRadius: 100,
        overflow: 'hidden',
    },
    titleText: {
        flex: 1,
        textAlign: 'center',
    }
})