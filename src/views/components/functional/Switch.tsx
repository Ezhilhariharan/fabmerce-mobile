import colors from '@config/colors.config';
import { hs, ms, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native'
import design from '@config/design.config';


interface ISwitch {
    value?: boolean;
    onPress?: (state: boolean) => void | undefined;
    container?: StyleProp<ViewStyle>;
    roller?: StyleProp<ViewStyle>;
    trueTag?: string;
    falseTag?: string
}

export const Switch = ({ value = false, onPress, container, roller, trueTag, falseTag }: ISwitch) => {
    const inActive: any = { backgroundColor: colors.RED, alignItems: 'flex-start' }
    return (
        <TouchableOpacity
            onPress={() => onPress && onPress(!value)}
            style={[styles.container, !value && inActive, container]}
            activeOpacity={design.OPACITY_HIGH}>
            <View style={[styles.roller, roller]} />
            {trueTag ? <Text style={styles.label}>{trueTag}</Text> : null}
            {falseTag ? <Text style={[styles.label, { left: null, right: "20%" }]}>{falseTag}</Text> : null}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        height: hs(31.5),
        width: ws(64),
        backgroundColor: colors.RED,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    roller: {
        height: hs(28),
        width: ws(28),
        backgroundColor: colors.RED,
        borderRadius: 100,
        marginHorizontal: ws(1.5)
    },
    label: {
        position: 'absolute',
        ...design.TEXT_BOOK3,
        color: colors.RED,
        left: '20%'
    }
})