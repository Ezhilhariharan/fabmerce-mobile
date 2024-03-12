import React from 'react';
import ProfileImagecard from '@views/components/designs/profileImage';
import ProfileScreenDetailsSection from '@views/components/designs/rectangle';
import { ScrollView } from '@views/components/functional/Scrollview';
import { Image, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { hp, hs, ms, wp, ws } from '@utilis/designs/measurements.design';
import LabelTopHeader from '@views/components/designs/LabelTopHeader';
import NavServiceUtils from '@controllers/utils/NavService.utils';


const ProfilePage = ({ navigation }: any) => {

  return (
    <View style={styles.container}>
      <LabelTopHeader label='Profile' onLFPress />
      <ProfileImagecard />
      <ScrollView >
        <ProfileScreenDetailsSection />
        <View style={{ height: hs(100) }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight,

  }
})
export default ProfilePage;