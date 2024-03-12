import React from 'react';
import { StyleProp, View, ViewStyle, } from 'react-native';

interface ISpacer {
  style?: StyleProp<ViewStyle>
}

export const Spacer = ({ style }: ISpacer) => {
  return (
    <View style={[{ flex: 1, flexGrow: 1 }, style]} />
  );
};
