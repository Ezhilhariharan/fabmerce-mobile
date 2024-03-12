import { ScrollView } from '@views/components/functional/Scrollview';
import React, { useEffect, useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { hs, ms, ws } from '@utilis/designs/measurements.design';
import TopSearch from '@views/components/designs/TopSearch';
import LabelBottomLineCard from '@views/components/designs/LabelBottomLineCard';
import { FlatList } from '@views/components/functional/Flatlist';
import ApparaelCardImage from '@views/components/designs/ApparaelCardImage';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import SubcategoryCard from '@views/components/designs/SubcategoryCard';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import colors from '@config/colors.config';

const SubCategoryScreen = ({ navigation, route }: any) => {
  const { data } = route.params
  const [level1, setLevel1] = useState<any>({ data: [], isLoading: true })
  const [level2, setLevel2] = useState<any>({ data: [], isLoading: true })

  useEffect(() => {
    const level1 = data.children
    const level2: any[] = []

    setLevel1({ data: level1, isLoading: false })
    data.children.map((e: any, i: any) => {
      level2.push(...e.children)
    })

    setLevel2({ data: level2, isLoading: false })
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar />
      <TopSearch onLFPress={() => NavServiceUtils.goBack()} />
      <ScrollView>
        <FlatList
          listKey={'level1'}
          data={level1.data}
          contentContainerStyle={{ paddingRight: ws(16) }}
          renderItem={({ item, index }) => {
            return (
              <SubcategoryCard
                imageSrc={{ uri: item.profile_photo }}
                onPress={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.PRODUCT_LISTING, { query: { sub_category_id: item.slug } })}
                index={index}
              />
            )
          }}
        />
        <FlatList
          listKey={'level2'}
          data={level1.data}
          contentContainerStyle={{ paddingRight: ws(16) }}
          renderItem={({ item, index }) => {
            return (
              <View key={index}>
                <LabelBottomLineCard label={item.name + " Apparel"} color={colors.P_TEXT} />
                <FlatList
                  listKey={'level21'}
                  data={item.children}
                  contentContainerStyle={{ paddingRight: ws(16) }}
                  renderItem={({ item, index }) =>
                    <ApparaelCardImage
                      onPress={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.PRODUCT_LISTING, { query: { sub_category_id: item.slug } })}
                      item={item}
                      index={index}
                    />
                  }
                  horizontal={true}
                />
              </View>
            )
          }}
        />
        <View style={{ height: hs(100) }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight,
  },
  sliderContainer: {
    marginTop: hs(5),
    height: hs(210),
    backgroundColor: colors.S_BG
  },
  exploreContainer: {
    marginTop: hs(5),
    height: hs(446)
  },
})
export default SubCategoryScreen;