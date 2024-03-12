import { IMAGES } from '@assets/images/png';
import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import { setItem } from '@models/async/curd.async';
import AsyncKeys from '@models/async/keys.async';
import { hs, ws } from '@utilis/designs/measurements.design';
import { Button } from '@views/components/functional/Button';
import React from 'react';
import { Image, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import design from '@config/design.config';

const OnboardingScreen1 = () => {

    const onSubmit = () => {
        setItem(AsyncKeys.isOnBoarded, 'true')
        NavServiceUtils.navigate(NavKeys.HOME_STACK.LOGINMOBILESCREEN)
    }

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={IMAGES.Onboard} resizeMode="cover" style={design.IMAGE} />
            </View>
                <Text style={styles.startSchoolText}>Start Your Social</Text>
                <Text style={styles.journeyText}>Shopping Journey</Text>
            <View style={styles.mainContainer}>
                <Button
                    label='Get Started'
                    color={'#072255'}
                    onPress={onSubmit}
                    fontSize={20}
                    height={50}
                    width='80%'
                    backgroundColor='white'
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight,
        backgroundColor: colors.P_TEXT
    },
    mainContainer: {
        flex: 1,
        marginTop:hs(90),
        width: '100%',
    },
    startSchoolText: {
        color: 'white',
        fontFamily: fontsConfig.POPPINS_EXTRA_BOLD,
        fontSize: 30,
        textAlign: 'center',
        marginTop: hs(20)
    },
    journeyText: {
        color: 'white',
        fontFamily: fontsConfig.POPPINS_EXTRA_BOLD,
        fontSize: 30,
        textAlign: 'center'
    },
    image: {
        height: hs(465),
        width: ws(323),
        marginTop: hs(72),
        alignSelf: 'center'
    }
})
export default OnboardingScreen1;