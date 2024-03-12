import AppApi from '../../configurations/Api/AppApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndNotification} from '../../components/ToastAndNotification';

export const loginApi = async (
  body: any,
  navigate?: any,
  currentUser?: any,
  setLogin?: any,
) => {
  await AppApi.signIn({body})
    .then(res => {
      if (res?.data?.statusCode === 200) {
        const token = res?.data?.response?.authToken;
        AsyncStorage.setItem('token', token);
        setLogin();
        AppApi.getCurrentUser()
          .then(res => {
            if (res?.status === 200) {
              currentUser(res?.data?.response?.data);
            }
          })
          .catch(error => {
            console.log('getCurrentUser', error);
          });
        navigate();
      }
    })
    .catch(error => {
      ToastAndNotification(error.data.error, 'Login Info');
    });
};
