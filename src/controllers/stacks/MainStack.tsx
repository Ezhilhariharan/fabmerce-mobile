import React, { useEffect, useRef, useState } from 'react';

//Nav stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import {View } from 'react-native';

//auth stack
import otpscreen from '@views/screens/auth/OtpScreen';
import SplashScreen from '@views/screens/auth/Splashscreen';
import MainTab from '@controllers/Tabs/MainTab';

//app stack
import FrequentlyAskedScreen from '@views/screens/app/tab/HomeScreen/FrequentlyAskedScreen';
import OnboardingScreen1 from '@views/screens/auth/OnboardingScreen';
import LogoutPopup from '@views/components/designs/LogoutPopup';
import loginMobileScreen from '@views/screens/auth/LoginMobileScreen';
import LoginPasswordScreen from '@views/screens/auth/LoginPasswordScreen';
import registerScreen from '@views/screens/auth/RegisterScreen';
import SearchScreen from '@views/screens/app/tab/HomeScreen/SearchScreen';
import SubCategoryScreen from '@views/screens/app/tab/HomeScreen/SubCategoryScreen';
import SearchListing from '@views/screens/app/tab/HomeScreen/SearchListing';
import ProductDetailDescriptionScreen from '@views/screens/app/tab/HomeScreen/ProductDetailDescriptionScreen';
import SortPopup from '@views/components/designs/SortCard';
import OrderTracking from '@views/screens/app/tab/HomeScreen/OrderTracking';
import OrderDispatched from '@views/screens/app/tab/HomeScreen/OrderDispatched';
import MyOrders from '@views/screens/app/tab/HomeScreen/MyOrders';
const Stack = createNativeStackNavigator();
export default () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={NavKeys.HOME_STACK.SPLASH_SCREEN}
      >
        {/* Auth stack */}
        <Stack.Screen name={NavKeys.HOME_STACK.LoginPasswordScreen} component={LoginPasswordScreen} />
        {/* <Stack.Screen name={NavKeys.HOME_STACK.OTPSCREEN} component={otpscreen} /> */}
        <Stack.Screen name={NavKeys.HOME_STACK.LOGINMOBILESCREEN} component={loginMobileScreen} />
        <Stack.Screen name={NavKeys.HOME_STACK.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={NavKeys.HOME_STACK.LOGOUT} component={LogoutPopup} />
        <Stack.Screen name={NavKeys.HOME_STACK.REGISTER_SCREEN} component={registerScreen} />
        <Stack.Screen name={NavKeys.HOME_STACK.SORT_POPUP} component={SortPopup} />
        
       
        {/* App Stack */}
        <Stack.Screen name={NavKeys.HOME_STACK.HOMESCREEN} component={MainTab} />
        <Stack.Screen name={NavKeys.HOME_STACK.SEARCH_SCREEN} component={SearchScreen} />
        <Stack.Screen name={NavKeys.HOME_STACK.FAQ} component={FrequentlyAskedScreen} />
        <Stack.Screen name={NavKeys.HOME_STACK.SUBCATEGORY_SCREEN} component={SubCategoryScreen} />
        <Stack.Screen name={NavKeys.HOME_STACK.PRODUCT_LISTING} component={SearchListing} />
        <Stack.Screen name={NavKeys.HOME_STACK.PRODUCT_DESCRIPTION} component={ProductDetailDescriptionScreen} />
        <Stack.Screen name={NavKeys.HOME_STACK.TRACKING_ORDER} component={OrderTracking} />
        <Stack.Screen name={NavKeys.HOME_STACK.ORDER_DISPATCHED} component={OrderDispatched} />
        <Stack.Screen name={NavKeys.HOME_STACK.MY_ORDERS} component={MyOrders} />
        {/* OnBoarding Stack */}
        <Stack.Screen name={NavKeys.ONBOARDING_STACK.ONBOARDING_1} component={OnboardingScreen1} />
        
      </Stack.Navigator>
    </View >
  );
}