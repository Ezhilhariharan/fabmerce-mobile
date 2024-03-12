import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, StyleProp, View, ViewStyle, } from 'react-native';

import colors from '@config/colors.config';
import design from '@config/design.config';


interface ILoader {
  container?: StyleProp<ViewStyle>
}

export const Loader = ({ container, ...rest }: ILoader & ActivityIndicatorProps) => {
  return (
    <View style={[design.CONTAINER, design.CENTER, container]}>
      <ActivityIndicator
        color={colors.P_COLOR}
        size={'large'}
        {...rest}
      />
    </View>
  );
};
