import React, { useEffect } from 'react';
import { LogBox, StatusBar, } from 'react-native';
import { Provider } from 'react-redux';
import { MainNavigator } from '@controllers/MainNavigator';
import axiosInterceptor from '@models/api/axiosInterceptor';
import store from '@models/redux/store';
import NetInfoAlert from '@utilis/plugins/NetInfo.plugin'
// import { checkPermission, onMessageStates } from '@utilis/plugins/Firebase.plugin';
import Orientation from 'react-native-orientation-locker';
import colors from '@config/colors.config';
import Geolocation from '@react-native-community/geolocation';


LogBox.ignoreLogs([
  'new NativeEventEmitter()'
])

axiosInterceptor()
export default () => {

  useEffect(() => {
    Orientation.lockToPortrait();
    // checkPermission()
    // onMessageStates(true)
    Geolocation.getCurrentPosition(info => console.log("data",info))
  }, [])

  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={colors.S_BG}
        barStyle={'light-content'}
        translucent={true}
      />
      <MainNavigator />
      <NetInfoAlert />
    </Provider>
  );
};