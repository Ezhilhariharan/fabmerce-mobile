import { hs, ws } from '@utilis/designs/measurements.design';
import React, { useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Icon } from '../functional/Icon';

export default function SortPopup({ visible }: any) {
    const [user, setUser] = useState<any>('');
    
    return (
        <View style={styles.modalColor} >
            {/* popup container */}
            <View style={{ position: 'absolute', top: hs(660), alignSelf: 'center' }}>
                <Icon type='EvilIcons' name="close-o" size={25} color="white" />
            </View>
            <View style={styles.popupContainer}>
                {['Price (Highest First)', 'Price (Lowest First)', 'Releavance'].map((e, i) => {
                    return (
                        <TouchableOpacity
                            onPress={() => setUser({ ...user, gender: e })}
                            style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal:hs(10) }}
                            key={i}
                            activeOpacity={1}>
                            <View style={styles.radioOuter}>
                                {user.gender === e ? (
                                    <View style={styles.radioInner} />
                                ) : null}
                            </View>
                            <Text style={styles.radiotext}>{e}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    popupContainer: {
        height: hs(200),
        width: ws(375),
        position: 'absolute',
        alignSelf: 'center',
        top: hs(700),
        backgroundColor: 'white',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    radioOuter: {
        height: 20,
        width: 20,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioInner: {
        height: 10,
        width: 10,
        borderRadius: 100,
        borderWidth: 1,
        backgroundColor: 'black',
    },
    radiotext: {
        color: '#000000',
        fontFamily: 'DINPro-Medium',
        fontSize: 16,
        marginHorizontal:hs(5)
    },
    modalColor: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end'
    },
});
