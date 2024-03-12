import { IMAGES } from '@assets/images/png';
import { hs, ms, wp, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import design from '@config/design.config';
import { Icon } from '../functional/Icon';

const HorizontalLabelCard = () => {
    return (
        <View style={styles.Container}>
            <View style={{ height: hs(26) }}>
                <Text style={styles.label} numberOfLines={1}>TopDeals</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.subLabel}>{'View all'}</Text>
                <Icon type={"Entypo"} name={"chevron-right"} size={ms(16)} style={{ color: 'black' }} />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    Container: {
        flexDirection: 'row',
        marginHorizontal: ws(8),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    label: {
        ...design.TEXT_STYLE_14_B,
        flex: 1,
    },
    subLabel: {
        textVerticalAlign: 'center',
        ...design.TEXT_STYLE_11_B
    }
})

export default HorizontalLabelCard;