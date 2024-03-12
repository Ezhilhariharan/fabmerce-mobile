import React, { ReactElement, useEffect, useRef } from 'react';
import { Animated, InteractionManager, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import { ScrollView } from '@views/components/functional/Scrollview';
import LinearGradient from 'react-native-linear-gradient';
import colors from '@config/colors.config';

interface ISlider {
    data: any[];
    renderItem: (props: any) => ReactElement;
    fHeight?: number;
    fWidth?: number;
    hideDot?: any;
    containerStyle?: StyleProp<ViewStyle>;
    gradientContainer?: StyleProp<ViewStyle>;

}


export const Slider = ({ data, hideDot, renderItem, fHeight = hs(180), fWidth = wp('100%'), containerStyle, gradientContainer }: ISlider) => {
    const scrollViewAnimationRef = useRef(new Animated.Value(0)).current


    return (
        <>
            <View style={[styles.container, { height: fHeight }, containerStyle]}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollViewAnimationRef } } }],
                        { useNativeDriver: false }
                    )}
                    autoSlider={{ 
                        enable: true,
                        width: fWidth, 
                        count: data.length, 
                        duration: 4000, 
                    }}
                >
                    {data?.map((item, index) => {
                        return renderItem({ item, index })
                    })}
                </ScrollView>


            </View>
            {hideDot ? null :
                <View style={[styles.gradientContainer, gradientContainer]}>
                    <View style={styles.dotContainer}>
                        {data?.map((e, i) => {
                            if (!scrollViewAnimationRef) return null
                            const pastPosition = i - 1, currentPosition = i, nextPosition = i + 1
                            const width = scrollViewAnimationRef.interpolate({
                                inputRange: [pastPosition * fWidth, currentPosition * fWidth, nextPosition * fWidth],
                                outputRange: [ws(6), ws(12), ws(6)],
                                extrapolate: 'clamp'
                            });
                            const backgroundColor = scrollViewAnimationRef.interpolate({
                                inputRange: [pastPosition * fWidth, currentPosition * fWidth, nextPosition * fWidth],
                                outputRange: [colors.SLIDERDOT_COLOR, colors.SLIDERDOT_COLOR, colors.SLIDERDOT_COLOR],
                                extrapolate: 'clamp'
                            });
                            return <Animated.View style={[styles.dot, { backgroundColor, width, }]} key={i} />
                        })}
                    </View>
                </View>
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden', marginTop: hs(5)
    },
    gradientContainer: {
        width: wp('100%'),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: hs(16),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        height: ws(6),
        marginHorizontal: ws(4),
        borderRadius: 100
    }
});