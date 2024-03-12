import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import design from '@config/design.config';
import colors from '@config/colors.config';
import { hp, hs, ms, wp, ws } from '@utilis/designs/measurements.design';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import { Icon } from '../functional/Icon';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from '../functional/Scrollview';
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

interface ISubsFlowCard {

}

export const HorizontalSubFlowCard = ({ }: ISubsFlowCard) => {
    // const { t } = useTranslation();

        const steps = [("CART"), ("CHECK_OUT"),("PAYMENT")]

    return (
        <ScrollView horizontal contentContainerStyle={{marginHorizontal:ws(35) }}>
            {steps.map((e, i) => {
                const backgroundColor = i == 0 ? colors.P_COLOR : colors.WHITE
                return (
                    <View style={styles.container} key={i}>
                        <View style={[styles.numberContainer, { backgroundColor }]} key={i}>
                            {/* <Text numberOfLines={2} style={design.TEXT_STYLE_12_B_B}>{i + 1}</Text> */}
                            {i != 2 ?
                                <View style={styles.line} />
                                : null}
                        </View>
                        <Text numberOfLines={1} style={design.TEXT_STYLE_10_B_S}>{e}</Text>
                    </View>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height:hs(80),
        width: ws(120),
        // alignItems: 'center',
        // justifyContent: 'center',
        marginVertical: hs(16),
        backgroundColor:'red',
        // marginHorizontal:ws(16)
    },
    numberContainer: {
        marginBottom: hs(16),
        height: hs(25),
        width: hs(25),
        left:20,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        position: 'absolute',
        left: hs(25),
        height: hs(2),
        width: ws(100),
        backgroundColor: colors.GREY
    }
});