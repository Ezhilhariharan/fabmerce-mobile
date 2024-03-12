import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  Image,
  StatusBar,
} from 'react-native';
import {request, PERMISSIONS} from 'react-native-permissions';
import React, {useState, useEffect} from 'react';
import Text from '../../components/GlobalText';
import Button from '../../components/Button';
import colors from '../../configurations/config/color.config';
import {IMAGES} from '../../assets/Images/index';

import {
  ImagePickerResponse,
  launchImageLibrary,
  launchCamera,
} from 'react-native-image-picker';
import AppApi from '../../configurations/Api/AppApi';
import {ToastAndNotification} from '../../components/ToastAndNotification';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from './Auth';

const AddingProfilePicture = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const [image, setImage] = useState<any>();

  const permissionRequest = (permission: any, permissionType?: any) => {
    request(permission).then(result => {
      if (result === 'granted') {
        if (permissionType === 'Media') {
          launchImageLibrary(
            {mediaType: 'photo'},
            (response: ImagePickerResponse) => {
              apiCall(response);
            },
          );
        } else {
          launchCamera(
            {mediaType: 'photo'},
            (response: ImagePickerResponse) => {
              apiCall(response);
            },
          );
        }
      } else {
        console.log('permission denied');
      }
    });
  };

  const apiCall = async (imageProp: any) => {
    setImage(imageProp?.assets[0]?.uri);

    const body = {imageType: 'profilePhoto'};

    await AppApi.signedUrl({body})
      .then(res => {
        if (res?.data?.statusCode === 200) {
          const url = `${res?.data?.response?.url}`;
          let uniqeCode = url?.split('profile-')[1]?.split('.png')[0];
          let convertedStr = `profile-${uniqeCode}.png`;
          uploadingInGoogleStorage(url, imageProp, convertedStr);
        }
      })
      .catch(error => {
        console.log('signedUrl-error', error.data);
      });
  };

  const uploadingInGoogleStorage = async (
    url: any,
    imageProp: any,
    imageName: any,
  ) => {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {'Content-Type': 'image/png'},
        body: {
          uri: imageProp?.assets[0]?.uri,
          type: 'image/png',
        },
      });
      if (response.ok) {
        profileImageUploadApi(imageName);
      } else {
        console.log('Image upload failed:', response.statusText);
      }
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  };

  const profileImageUploadApi = async (imageName: any) => {
    const body = {imageName: imageName};

    await AppApi.profileImageUpload({body})
      .then(res => {
        if (res?.status === 200) {
          ToastAndNotification(res?.data?.response?.data, 'Profile Image');
          navigation.navigate('PersonalDetails');
        }
      })
      .catch(error => {
        console.log('profileImageUploadApi-error', error);
      });
  };

  const askPermission = (permissionType: String) => {
    if (Platform.OS === 'ios') {
      switch (permissionType) {
        case 'Media':
          permissionRequest(PERMISSIONS.IOS.MEDIA_LIBRARY, permissionType);
          break;
        case 'Camera':
          permissionRequest(PERMISSIONS.IOS.CAMERA, permissionType);
          break;
        default:
          return null;
      }
    } else {
      switch (permissionType) {
        case 'Media':
          permissionRequest(
            PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
            permissionType,
          );
          break;
        case 'Camera':
          permissionRequest(PERMISSIONS.ANDROID.CAMERA, permissionType);
          break;
        default:
          return null;
      }
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={styles.container}>
        <Text style={styles.Heading}>AddingProfilePciture</Text>
        <Text style={styles.content}>
          Make a great first impression by adding your profile picture
        </Text>
        <View style={styles.rowAlign}>
          <Image
            source={image ? {uri: image} : IMAGES.profilepicture}
            style={styles.profilePicture}
          />
        </View>

        <Button
          title="Upload"
          MV={20}
          onPressFunc={() => askPermission('Media')}
        />
        <Button
          title="Take A New Photo"
          MV={20}
          onPressFunc={() => askPermission('Camera')}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('PersonalDetails')}>
          <Text style={styles.fotterText}>Skip For Now</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddingProfilePicture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY_COLOR,
    padding: 20,
  },
  Heading: {
    fontSize: 26,
    fontWeight: '400',
    color: colors.P_TEXT,
    marginTop: 40,
  },
  content: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.S_TEXT,
    marginVertical: 10,
  },
  profilePicture: {
    width: 220,
    height: 220,
    borderRadius: 110,
    // borderWidth: 1,
    // borderColor: "#3F3D56",
    margin: 'auto',
  },
  fotterText: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.P_TEXT,
    textAlign: 'center',
    marginTop: 100,
  },
  rowAlign: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
});
