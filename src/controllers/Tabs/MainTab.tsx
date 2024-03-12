import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import { hs, ms, ws } from '@utilis/designs/measurements.design';
import colors from '@config/colors.config';

// screens
import fontsConfig from '@config/fonts.config';
import HomeScreen from '@views/screens/app/tab/HomeScreen/HomeScreen';
import ProfilePage from '@views/screens/app/tab/HomeScreen/ProfileScreen';
import CategoriesScreen from '@views/screens/app/tab/HomeScreen/CategoriesScreen';
import CouponsScreen from '@views/screens/app/tab/HomeScreen/CouponsScreen';
import { Home } from '@assets/images/svg';
import { Profile } from '@assets/images/svg';
import { Categories } from '@assets/images/svg';
import { Brand } from '@assets/images/svg';
import { Fabroom } from '@assets/images/svg';
import { HomeFocused } from '@assets/images/svg';
import { HomeNonFocused } from '@assets/images/svg';
import { accountsFocused } from '@assets/images/svg';
import { CategoriesFocused } from '@assets/images/svg';
import { BrandsFocused } from '@assets/images/svg';

const isIos = Platform.OS == 'ios'
const Tab = createBottomTabNavigator();
export default () => {
  const tabBarOptions = ({ focused, route }: any) => {
    switch (route.name) {
      case NavKeys.MAIN_TAB_SCREEN.TAB_2:
        return {
          Icon: focused? HomeFocused : HomeNonFocused,
          color: focused? '#0D427F' : 'black',
          label: "Home"
        }
      case NavKeys.MAIN_TAB_SCREEN.TAB_3:
        return {
          Icon: focused? accountsFocused : Profile,
          color: focused? '#0D427F' : 'black',
          label: "Profile"
        }
      case NavKeys.MAIN_TAB_SCREEN.TAB_6:
        return {
          Icon: focused? Fabroom : Fabroom,
          color: focused? '#0D427F' : 'black',
          label: "Fabroom"
        }
      case NavKeys.MAIN_TAB_SCREEN.TAB_4:
        return {
          Icon: focused? CategoriesFocused : Categories,
          color: focused? '#0D427F' : 'black',
          label: "Categories"
        }
      case NavKeys.MAIN_TAB_SCREEN.TAB_5:
        return {
          Icon: focused? BrandsFocused : Brand,
          color: focused? '#0D427F' : 'black',
          label: "Brands"
        }
      default:
        return {
          Icon: focused? Home : Home,
          color: focused? '#0D427F' : 'black',
          label: "Home"
        }
    }
  }

  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: colors.P_BG }}
      screenOptions={({ route, navigation }: any) => {
        return {
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarItemStyle: styles.tabBarItemStyle,
          tabBarIcon: ({ focused, size }) => {
            const { color, label, Icon }: any = tabBarOptions({ focused, route })
            return (
              <View style={styles.tabBarCustomItemStyle}>
                <Icon/>
                {label ? <Text numberOfLines={1} style={[styles.tabLabel, { color: color }]}>{label}</Text> : null}
              </View>
            )
          },
          tabBarLabel: ({ focused }) => null
        }
      }}
    >
      <Tab.Screen name={NavKeys.MAIN_TAB_SCREEN.TAB_2} component={HomeScreen} />
      <Tab.Screen name={NavKeys.MAIN_TAB_SCREEN.TAB_3} component={ProfilePage} />
      <Tab.Screen name={NavKeys.MAIN_TAB_SCREEN.TAB_6} component={CouponsScreen} />
      <Tab.Screen name={NavKeys.MAIN_TAB_SCREEN.TAB_4} component={CategoriesScreen} />
      {/* <Tab.Screen name={NavKeys.MAIN_TAB_SCREEN.TAB_5} component={() => null} /> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    flexDirection: 'row',
    height: hs(isIos ? 90 : 50),
    width: ws(375),
    backgroundColor: colors.P_BG,
  },
  tabBarItemStyle: {

  },
  tabBarCustomItemStyle: {
    height: hs(40),
    width: '100%',
    backgroundColor: colors.P_BG,
    alignItems: "center",
    justifyContent: 'space-evenly',
  },
  tabBarCustomMiddleItemStyle: {
    position: 'absolute',
    top: hs(0),
    height: hs(64),
    width: hs(64),
    backgroundColor: colors.P_BG,
    alignItems: "center",
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    overflow: 'hidden'
  },
  tabLabel: {
    fontFamily: fontsConfig.POPPINS_BOLD,
    color: colors.P_TEXT,
    fontSize: ms(12),
  }
})