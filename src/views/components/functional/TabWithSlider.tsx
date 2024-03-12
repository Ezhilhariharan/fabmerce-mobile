import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { TabView, TabBar, SceneRendererProps } from 'react-native-tab-view';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import design from '@config/design.config';
import colors from '@config/colors.config';


interface ITab { key: string, title: string, index: number }
interface ITabWithSlider {
    tabs: ITab[];
    renderScene: (props: SceneRendererProps & { route: ITab }) => React.ReactNode
    initialTab?: number
}

export const TabWithSlider = ({ tabs, renderScene, initialTab = 0 }: ITabWithSlider) => {
    const [routes] = useState(tabs);
    const [index, setIndex] = useState(initialTab);

    useEffect(() => {
        setIndex(initialTab)
    }, [initialTab])

    const renderTabBar = (props: any) => {
        return (
            <View style={{ height: hs(45), width: '100%', backgroundColor: 'transparent' }}>
                <TabBar
                    {...props}
                    indicatorStyle={{ backgroundColor: colors.RED, height: hs(4), borderRadius: 100, alignSelf: 'center' }}
                    style={{ backgroundColor: colors.TRANSPARENT, marginHorizontal: ws(10), }}
                    renderTabBarItem={({ route, focused, color, navigationState, onPress, ...rest }: any) => {
                        const isActive = route.index == navigationState.index
                        return (
                            <TouchableOpacity
                                onPress={onPress} style={{ height: hs(45), flex: 1, alignItems: "center", justifyContent: "center", }}
                                key={route.key}
                                activeOpacity={design.OPACITY_AVG}
                            >
                                <Text style={[styles.label, isActive && styles.activeLabel]}>{route.title} {route.count ? `(${route.count})` : ""} </Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    };


    return (
        <TabView
            navigationState={{ routes, index }}
            renderTabBar={renderTabBar}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: wp('100%') }}
        />
    );
};

const styles = StyleSheet.create({
    label: {
        ...design.TEXT_BOOK13
    },
    activeLabel: {
        color: colors.RED,
        fontWeight: '700'
    }
})