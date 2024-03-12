import React from 'react';
import { GestureResponderEvent, StyleProp, TextStyle } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


interface ICategoryBasedServiceList {
    type: string;
    name: string;
    size?: number;
    color?: string
    style?: StyleProp<TextStyle> | undefined
    onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const selectIconComponent = (type: string) => {
    switch (type) {
        case "FontAwesome":
            return FontAwesome
        case "FontAwesome5":
            return FontAwesome5
        case "Ionicons":
            return Ionicons
        case "Feather":
            return Feather
        case "Entypo":
            return Entypo
        case "Fontisto":
            return Fontisto
        case "MaterialIcons":
            return MaterialIcons
        case "SimpleLineIcons":
            return SimpleLineIcons    
        case "AntDesign":
            return AntDesign
        case "EvilIcons":
            return EvilIcons
        case "MaterialCommunityIcons":
            return MaterialCommunityIcons
        default: return false
    }
}

export const Icon = ({ type, name, size, color, style, onPress }: ICategoryBasedServiceList) => {
    const IconComponent = selectIconComponent(type)
    if (!IconComponent) return null
    return (
        <IconComponent style={style} name={name} size={size} color={color} onPress={onPress} />
    );
};