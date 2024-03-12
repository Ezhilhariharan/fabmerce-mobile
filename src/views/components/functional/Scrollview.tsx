import { hs } from '@utilis/designs/measurements.design';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { ViewProps } from 'react-native';
import { FlatList, FlatListProps, ScrollViewProps } from 'react-native';


interface IScrollViewInterface {
  children?: any;
  autoSlider?: { enable: boolean, width: number, count: number, duration: number, }
}

export const ScrollView = (
  { children, autoSlider = { enable: false, width: 0, count: 0, duration: 0, }, ...rest }: ScrollViewProps & ViewProps & IScrollViewInterface
) => {
  const flatListRef = React.useRef<any>()
  const index = React.useRef<any>(0)

  useEffect(() => {
    const { enable, width, count, duration } = autoSlider
    if (enable && width && count) {
      setInterval(autoScrollTo, duration)
    }
  }, [autoSlider])

  const autoScrollTo = () => {
    const { enable, width, count, duration } = autoSlider
    const newIndex = index.current
    if (newIndex < count) {
      flatListRef?.current?.scrollToOffset({ animated: true, offset: width * newIndex })
      index.current = newIndex + 1
    } else {
      index.current = 0
    }
  }

  return (
    <FlatList
      ref={flatListRef}
      data={[1]}
      renderItem={() => children}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: hs(80), backgroundColor: 'white' }}
      {...rest}
    />
  );
};
