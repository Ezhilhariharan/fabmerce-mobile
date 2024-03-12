import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput as NativeTextInput,
    TextInputProps,
    View,
    Animated,
    ViewStyle,
} from 'react-native'

import { Icon } from '@views/components/functional/Icon';
import { hs, ms, wp, ws } from '@utilis/designs/measurements.design';
// import { useSlideAnimation } from '@utilis/hooks/animations/slide.animation';
import colors from '@config/colors.config';
import fonts from '@config/fonts.config';
import design from '@config/design.config';

interface ITextInput {
    label?: string;
    star?: boolean;
    width?: any;
    height?: any;
    paddingVertical?:any;
    iconType?: string;
    iconName?: string;
    error?: string
    isEditable?: boolean;
    showEye?: boolean;
    
    info?: string
    infoIconType?: string;
    infoIconName?: string;

    // styles
    container?: ViewStyle;
    textInput?: ViewStyle;
    stopAnimation?: boolean;
}

export const TextInput = ({ 
    iconType, iconName, label, star, error, paddingVertical, value, secureTextEntry, showEye=true, onChangeText, height, width,
    container, textInput, stopAnimation, isEditable=true, info, infoIconType, infoIconName, ...rest 
}: TextInputProps & ITextInput) => {
    const [isFieldVisible, setIsFieldVisible] = useState(false)
    // const position = !stopAnimation ? useSlideAnimation() : {}
    const labelColor = value ? colors.P_TEXT : colors.P_TEXT
    return (
        <Animated.View style={[styles.container, container,]}>
            {label ?
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {iconType && iconName && (
                        <Icon type={iconType} name={iconName} size={ms(12)} color={labelColor} style={{ marginRight: ws(6) }} />
                    )}
                    <Text style={[styles.labelText, { color: labelColor }]}>{label}</Text>
                    {star && (
                        <Icon type={"AntDesign"} name={"star"} size={ms(6)} color={colors.RED} style={{ marginLeft: ws(2) }} />
                    )}
                </View>
                : null}
            <View style={{ justifyContent: 'center' }}>
                <NativeTextInput
                    placeholderTextColor={'grey'}
                    value={value}
                    onChangeText={onChangeText}
                    style={[styles.textInput, textInput, {height,paddingVertical, width }]}
                    secureTextEntry={secureTextEntry ? !isFieldVisible : false}
                    editable={isEditable}
                    {...rest}
                />
                {secureTextEntry && showEye && (
                    <Icon
                        onPress={() => setIsFieldVisible(!isFieldVisible)}
                        type={"Ionicons"}
                        name={!isFieldVisible ? "ios-eye" : "ios-eye-off"}
                        size={ms(22)} color={colors.P_TEXT}
                        style={{ position: 'absolute', right: ws(25), }}
                    />
                )}
            </View>
            {info ?
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    {infoIconType && infoIconName && (
                        <Icon type={infoIconType} name={infoIconName} size={ms(10)} color={colors.T_TEXT} style={{ marginRight: ws(6) }} />
                    )}
                    <Text style={[design.GENERIC_INFO_TEXT, { textAlign: 'right' }]}>{info}</Text>
                </View>
            : null}
            {error ?
                <View style={{width:'100%', marginVertical:hs(2),paddingHorizontal:ws(8) }}>
                    {iconType && iconName && (
                        <Icon type={"FontAwesome"} name={"warning"} size={ms(10)} color={colors.RED} style={{ marginRight: ws(6) }} />
                    )}
                    <Text style={[design.TEXT_STYLE_09_R]}>{error}</Text>
                </View>
            : null}
        </Animated.View>

    )
};

const styles = StyleSheet.create({
    container: {
        height:hs(70),
        width: "100%",
        paddingHorizontal:ws(32),
    },
    textInput: {
        fontSize: ms(13),
        color: 'black',
        paddingVertical: 0,
        justifyContent: "center",
        alignSelf:'center',
        paddingHorizontal: ws(15),
        borderRadius: 10,
        borderWidth:1,
        borderColor:'rgba(0, 0, 0, 0.12)',
    },
    labelText: {
        fontSize: ms(16),
        color: colors.P_TEXT
    }
})