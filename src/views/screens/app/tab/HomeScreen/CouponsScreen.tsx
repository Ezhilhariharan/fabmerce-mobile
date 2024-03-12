import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LabelTopHeader from '@views/components/designs/LabelTopHeader';
import CouponHeader from '@views/components/designs/CouponHeader';
import { hs, ws } from '@utilis/designs/measurements.design';
import fontsConfig from '@config/fonts.config';
import CouponsCard from '@views/components/designs/CouponsCard';
import StatusBar from '@views/components/functional/StatusBar';
import colors from '@config/colors.config';

const CouponsScreen = ({ navigation, route }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <LabelTopHeader label='Coupons' />
      <ScrollView>
        <CouponHeader />
        <Text style={styles.availableText}>Available Coupons</Text>
        <CouponsCard />
        <CouponsCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Q_TEXT,
  },
  availableText: {
    height: hs(21),
    width: ws(200),
    color: colors.P_TEXT,
    fontSize: 14,
    fontFamily: fontsConfig.POPPINS_REGULAR,
    fontWeight: '400',
    marginTop: hs(11),
    marginLeft: hs(16),
    marginBottom:hs(10),
  }
})
export default CouponsScreen;