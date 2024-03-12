import React, { useEffect } from 'react';
import { DevSettings, Image, View } from 'react-native';
import design from '@config/design.config';
import { IMAGES } from '@assets/images/png';
import { hs, ws } from '@utilis/designs/measurements.design';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import { getItem, getParsedItem } from '@models/async/curd.async';
import AsyncKeys from '@models/async/keys.async';
import { systemTransportor } from '@models/redux/system/system.transportor';

export default ({ navigation }: any) => {
    const { setSystemStore } = systemTransportor()

    useEffect(() => {
        onInit()
    }, [])

    const onInit = async () => {
        const isOnBoarded = await getItem(AsyncKeys.isOnBoarded)
        const isLoggedIn = await getParsedItem(AsyncKeys.user)
        const byPassUser = await getItem(AsyncKeys.byPassUser)
        setSystemStore({ isOnBoarded, isLoggedIn, byPassUser })

        setTimeout(() =>
            NavServiceUtils.navigateAndReset(
                isLoggedIn ?
                    NavKeys.HOME_STACK.HOMESCREEN
                    : byPassUser ?
                        NavKeys.HOME_STACK.HOMESCREEN
                        : isOnBoarded ?
                            NavKeys.HOME_STACK.LOGINMOBILESCREEN
                            : NavKeys.ONBOARDING_STACK.ONBOARDING_1

            )
            , 3000)
    }

    return (
        <View style={design.CONTAINER_CENTER}>
            <View style={{ height: hs(104.48), width: ws(230) }}>
                <Image
                    source={IMAGES.splashImage} style={design.IMAGE}
                />
            </View>
        </View>
    );
}