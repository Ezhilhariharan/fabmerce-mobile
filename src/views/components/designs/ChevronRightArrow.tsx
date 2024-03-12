import { IMAGES } from '@assets/images/png';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Icon } from '../functional/Icon';

const ChevronRightArrow = () => {
    return (
        <View >
             <Icon type='Entypo' name="chevron-right" size={16} color="black" style={{marginTop:hs(14) }} />
            {/* <Image source={IMAGES.appLogo} style={styles.image} /> */}
        </View>

    );
}

const styles = StyleSheet.create({

})

export default ChevronRightArrow;