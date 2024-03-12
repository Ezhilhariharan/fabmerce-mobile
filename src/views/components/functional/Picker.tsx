import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    ViewStyle,
    TouchableOpacity,
    Alert,
} from 'react-native'
import { Icon } from '@views/components/functional/Icon';
import { hs, ms, ws } from '@utilis/designs/measurements.design';
// import { useSlideAnimation } from '@utilis/hooks/slide.animation';
import colors from '@config/colors.config';
import design from '@config/design.config';
// import { openCamera, openDocumentPicker, openImageLibrary } from '@utilis/methods/common.method';
import { Loader } from './Loader';
// import { types } from 'react-native-document-picker';
import fontsConfig from '@config/fonts.config';


interface IPicker {
    label?: string;
    star?: boolean;
    iconType?: string;
    iconName?: string;
    error?: string

    placeholder?: string
    value: any;
    onChange: (props: any) => void;
    onDelete: (props: any) => void;

    // styles
    container?: ViewStyle;
    stopAnimation?: boolean;
    pickType?: string;
    isEditable?: boolean;
}

export const Picker = ({
    iconType, iconName, label, star, error, container, placeholder,
    onChange, onDelete, stopAnimation, value, pickType,
    isEditable = true
}: IPicker) => {
    const [isLoading, setIsLoading] = useState(false)
    // const position = !stopAnimation ? useSlideAnimation() : {}
    const labelColor = colors.P_COLOR

    const onSuccess = (res: any) => {
        setIsLoading(false)
        if (res)
            onChange(res)
    }

    const onError = (res: any) => {
        setIsLoading(false)
    }

    const selectType = () => {
        const common = { onSuccess, onError }
        const props: any = {
            cameraProps: { ...common },
            imageLibraryProps: { ...common },
            documentPickerProps: { ...common },
        }
        switch (pickType) {
            case "image":
                props.cameraProps.type = 'photo';
                props.imageLibraryProps.type = 'photo';
                // props.documentPickerProps.type = [types.images];
                break;
            default: null
        }
        return props
    }
    const { cameraProps, imageLibraryProps, documentPickerProps } = selectType() ?? {}


    const openPopUp = () => {
        Alert.alert(
            'Select one to upload',
            '',
            [
                {
                    text: "Pick from camera", onPress: () => {
                        // openCamera({ ...cameraProps })
                        setIsLoading(true)
                    }
                },
                {
                    text: "Pick from gallery", onPress: () => {
                        // openImageLibrary({ ...imageLibraryProps })
                        setIsLoading(true)
                    }
                },
                // {
                //     text: "Pick from files", onPress: () => {
                //         openDocumentPicker({ ...documentPickerProps })
                //         setIsLoading(true)
                //     }
                // },
                { text: "Cancel", onPress: () => null }
            ],
            {
                cancelable: true,
                onDismiss: () => null
            }
        )
    }

    return (
        <Animated.View style={[styles.container, container,]}>//position inside box
            {label ?
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {iconType && iconName && (
                        <Icon type={iconType} name={iconName} size={ms(12)} color={labelColor} style={{ marginRight: ws(6) }} />
                    )}
                    <Text style={[styles.labelText, { color: labelColor }]}>{label}</Text>
                    {star && (
                        <Icon type={"AntDesign"} name={"star"} size={ms(6)} color={colors.RED} style={{ marginLeft: ws(2) }} />
                    )}
                    <View style={{ flex: 1 }} />
                    {value?.name ? <Text onPress={() => onDelete(true)} style={[styles.labelText, { color: colors.RED }]}>{'Delete'}</Text> : null}
                </View>
                : null}
            <TouchableOpacity onPress={openPopUp} style={styles.inputContainer} activeOpacity={design.OPACITY_HIGH}>
                {isLoading ? <Loader container={{ backgroundColor: 'tarnsparent' }} /> :
                    <>
                        <Text style={[styles.valueText]}>{value?.name ? value?.name : placeholder}</Text>
                        {!value?.name ? <Text style={[styles.valueText]}>{"( Tap here to pick file )"}</Text> : null}
                    </>
                }
            </TouchableOpacity>
            {error ?
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    {iconType && iconName && (
                        <Icon type={"FontAwesome"} name={"warning"} size={ms(10)} color={colors.RED} style={{ marginRight: ws(6) }} />
                    )}
                    <Text style={[design.GENERIC_ERROR_TEXT, { textAlign: 'right' }]}>{error}</Text>
                </View>
                : null}
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: colors.P_BG,
        borderRadius: 6,
        marginVertical: hs(4),
        overflow: 'hidden',
        paddingVertical: hs(8),
        paddingHorizontal: ws(10),
    },
    inputContainer: {
        height: hs(90),
        width: "100%",
        paddingVertical: 0,
        paddingHorizontal: ws(10),
        borderRadius: 6,
        backgroundColor: colors.S_BG,
        marginVertical: hs(8),
        alignItems: 'center',
        justifyContent: 'center'
    },
    labelText: {
        fontSize: ms(12),
        fontFamily: fontsConfig.MEDIUM,
        color: colors.S_TEXT,
    },
    valueText: {
        fontSize: ms(13),
        fontFamily: fontsConfig.MEDIUM,
        color: 'white',
        marginTop: hs(3)
    },
    profileConatiner: {
        height: hs(90),
        width: hs(90),
        borderRadius: 100,
        alignSelf: 'center',
        marginVertical: hs(24),
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.S_BG,
        borderWidth: ms(2),
        borderColor: colors.S_BG,
    }
})