import { hs, ms, ws } from '@utilis/designs/measurements.design';
import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle, } from 'react-native';
import design from '@config/design.config';
import colors from '@config/colors.config';
// import { ArrowDown, ArrowUp } from '@assets/images/svg';
import { Switch } from './Switch';
import { Spacer } from './Spacer';


interface ITitleTile {
  name: string;
  onPress?: (props: any) => void;
  container?: StyleProp<ViewStyle>;
  isOpened?: boolean;
  isActive?: boolean;
  onPressSwitch?: (props: any) => void;
}

export const TitleTile = ({ name, onPress, container, isOpened, isActive, onPressSwitch }: ITitleTile) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.tabContainer, container]}
      activeOpacity={design.OPACITY_HIGH}
    >
      <Text style={[design.TEXT_BOOK12, { color: colors.RED }]}>{name}</Text>
      <Spacer/>
      {onPressSwitch?
        <Switch
          value={isActive}
          onPress={onPressSwitch}
          container={{ height: hs(16), width: ws(32), marginHorizontal: ws(16) }}
          roller={{ height: hs(14), width: ws(14) }}
        />
      : null}
      {/* {!isOpened ?
        <ArrowDown height={ms(16)} width={ms(16)} />
        :
        <ArrowUp height={ms(16)} width={ms(16)} />
      } */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: hs(40),
    width: ws(328),
    borderRadius: ms(4),
    alignSelf: 'center',
    paddingLeft: ws(16),
    paddingRight: ws(24),
    paddingVertical: hs(8),
    marginBottom: hs(8),
    backgroundColor: colors.RED,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})