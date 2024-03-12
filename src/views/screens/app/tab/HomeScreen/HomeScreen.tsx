import LocationCard from '@views/components/designs/LocationCard';
import { ScrollView } from '@views/components/functional/Scrollview';
import React, { useEffect, useState } from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { Slider } from '@views/components/functional/Slider';
import { hs, ms, ws } from '@utilis/designs/measurements.design';
import { IMAGES } from '@assets/images/png';
import TopSearch from '@views/components/designs/TopSearch';
import CategoryList from '@views/components/designs/CategoryHorizontalList';
import LabelBottomLineCard from '@views/components/designs/LabelBottomLineCard';
import TrendingBrandsCard from '@views/components/designs/TrendingBrandsCard';
import DiscountPriceCard from '@views/components/designs/DiscountPriceHorizontalCard';
import UnmissableCardLargeImage from '@views/components/designs/UnmissableCardLargeImage';
import UnmissableCardSmallImage from '@views/components/designs/UnmissableCardSmallImage';
import KidsWearCard from '@views/components/designs/KidsWear';
import FabmerceApi from '@models/api/FabmerceApi';
import { FlatList } from '@views/components/functional/Flatlist';
import SmallImageCategories from '@views/components/designs/SmallImageCategories';
import { beautyAndCosmatics, foodNutSpices, newChecklistForLifeStyle, newTrends } from '@models/static/adminslice.static';
import ExploreCard from '@views/components/designs/ExploreCard';
import NewTrendsCard from '@views/components/designs/NewTrendsCard';
import FeaturedCategoriesCard from '@views/components/designs/FeaturedCategoriesCard';
import BeautyCosmeticsSubCard from '@views/components/designs/BeautyCosmeticsSubCard';
import NewCheckListForLifestyle from '@views/components/designs/NewCheckListForLifestyle';
import SubcategoryCard from '@views/components/designs/SubcategoryCard';
import StatusBar from '@views/components/functional/StatusBar';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import colors from '@config/colors.config';

const HomeScreen = ({ navigation }: any) => {
  const [homeData, setHomeData] = useState({ data: [], isLoading: true })
  const [promotion, setPromotion] = useState({ data: [], isLoading: true })
  const [brands, setBrands] = useState<any>({ data: [], isLoading: true })
  const [featured, setFeatured] = useState<any>({ data: [], isLoading: true })
  const [unmissbale, setUnmissbale] = useState<any>({ data: [], isLoading: true })
  const [kids, setKids] = useState<any>({ data: [], isLoading: true })
  const [beauty, setBeauty] = useState<any>({ data: [], isLoading: true })
  const [electronics, setElectronics] = useState<any>({ data: [], isLoading: true })
  const [household, setHousehold] = useState<any>({ data: [], isLoading: true })
  const [foods, setFoods] = useState<any>({ data: [], isLoading: true })
  const [foodCategory, setFoodCategory] = useState<any>({ data: [], isLoading: true })
  const [checkListLifeStyle, setCheckListLifeStyle] = useState<any>({ data: [], isLoading: true })


  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    FabmerceApi.brandCategories({}).then((res) => {
      setHomeData({ data: res.data, isLoading: false })
      const featured: any[] = []
      const unmissbale: any[] = []
      const kids: any[] = []
      const beauty: any[] = []
      const foods: any[] = []
      const electronics: any[] = []
      const household: any[] = []
      const foodCategory: any[] = []

      res.data.map((item: any, index: any) => {

        if (item.name == "Food & nuts") {
          item.children.map((e: any, i: any) => {
            foodCategory.push(...foodNutSpices)
            foods.push(...e.children)
          })
        }

        if (item.name == "Beauty") {
          beauty.push(...beautyAndCosmatics)
          // item.children.map((e: any, i: any) => {
          //   beauty.push(...e.children)
          // })
        }

        if (item.name == "Household") {
          item.children.map((e: any, i: any) => {
            household.push(...e.children)
          })
        }

        if (item.name == "Electronic") {
          item.children.map((e: any, i: any) => {
            electronics.push(...e.children)
          })
        }

        if (item.name == "Kids") {
          item.children.map((e: any, i: any) => {
            kids.push(...e.children)
          })
        }

        if (item.name == "Clothin") {
          item.children.map((e: any, i: any) => {
            unmissbale.push(e)
            featured.push(...e.children)
          })
        }
      })
      setFeatured({ data: featured, isLoading: false })
      setUnmissbale({ data: unmissbale, isLoading: false })
      setKids({ data: kids, isLoading: false })
      setBeauty({ data: beauty, isLoading: false })
      setElectronics({ data: electronics, isLoading: false })
      setHousehold({ data: household, isLoading: false })
      setFoods({ data: foods, isLoading: false })
      setFoodCategory({ data: foodCategory, isLoading: false })
      setCheckListLifeStyle({ data: newChecklistForLifeStyle, isLoading: false })


      FabmerceApi.brands({}).then((res) => {
        setBrands({ data: res.data.data, isLoading: false })
      }).catch(e => console.log(e))

      FabmerceApi.promotion({}).then((res) => {
        setPromotion({ data: res.data.data, isLoading: false })
      }).catch(e => console.log(e))
    }).catch(e => console.log(e))
  }



  return (
    <View style={styles.container}>
      <StatusBar  />
      <TopSearch />
      <ScrollView>
        {/* address Card */}
        <LocationCard />
        {/* categories Card */}
        <FlatList
          listKey={'CategoryList'}
          data={homeData.data}
          contentContainerStyle={{ paddingRight: ws(16) }}
          renderItem={({ item, index }) =>
            <CategoryList item={item} index={index} key={index} />
          }
          horizontal={true}
        />
        {/* Promotion */}
        <View style={styles.sliderContainer}>
          <Slider
            data={promotion.data}
            containerStyle={{ borderRadius: ms(15), marginHorizontal: ws(18) }}
            fHeight={hs(160)}
            fWidth={ws(339)}
            renderItem={({ item, index }) => {
              if (item.banner_url) {
                return (
                  <View style={{ width: ws(339), height: hs(160), overflow: 'hidden' }} key={index}>
                    <Image source={{ uri: item.banner_url }} style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} />
                  </View>
                )
              } else {
                return <View />
              }
            }}
          />
        </View>
        {/*Explore Container */}
        <View style={styles.exploreContainer}>
          {/* Explore Text */}
          <LabelBottomLineCard label='Explore' color={colors.P_TEXT} />
          <ExploreCard onPress={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.PRODUCT_LISTING, { query: { sub_category_id: '___STATIC_KEY__' } })} />
          {/* New trends Text */}
          <LabelBottomLineCard label='New Trends' color={colors.P_TEXT} />
          <FlatList
            listKey={'CategoryList'}
            data={newTrends}
            contentContainerStyle={{ paddingRight: ws(16) }}
            renderItem={({ item, index }) => {
              return (
                <NewTrendsCard
                  onPress={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.PRODUCT_LISTING, { query: { search: item.key } })}
                  item={{ source: item.image }}
                  index={index}
                  key={index}
                />
              )
            }}
            horizontal={true}
          />
        </View>
        <View style={{ marginTop: hs(5), height: hs(445) }}>
          {/* Featured Categories text */}
          <LabelBottomLineCard label='Featured Categories' color={colors.P_TEXT} />
          <FlatList
            listKey={'featuredList'}
            data={featured.data}
            contentContainerStyle={{ paddingRight: ws(16) }}
            renderItem={({ item, index }) =>
              <FeaturedCategoriesCard
                item={item}
                index={index}
                key={index}
                onPress={({ item, index }: any) =>
                  NavServiceUtils.navigate(NavKeys.HOME_STACK.PRODUCT_LISTING, { query: { sub_category_id: item.slug } })
                }
              />
            }
            horizontal={true}
          />
          {/* Fabmerce trending text */}
          <LabelBottomLineCard label='Trending Brands' color={colors.P_TEXT} />
          <FlatList
            listKey={'brandList'}
            data={brands.data}
            contentContainerStyle={{ paddingRight: ws(16) }}
            renderItem={({ item, index }) => {
              return (
                <TrendingBrandsCard
                  item={item}
                  index={index}
                  key={index}
                  onPress={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.PRODUCT_LISTING, { query: { brand_slug: item.slug } })}
                />
              )
            }
            }
            horizontal={true}
          />
        </View>
        {/* Discount Card */}
        <FlatList
          listKey={'discountList'}
          data={[
            { type: 'Flat', name: '75%', desc: 'off' },
            { type: 'Flat', name: '75%', desc: 'off' },
            { type: 'Flat', name: '75%', desc: 'off' }
          ]}
          contentContainerStyle={{ paddingRight: ws(16) }}
          renderItem={({ item, index }) => {
            return (
              <DiscountPriceCard item={item} index={index} key={index}
              />
            )
          }}
          horizontal={true}
        />
        {/* Unmissible trends Text */}
        <LabelBottomLineCard label='Unmissable Trends' color={colors.P_TEXT} />
        <UnmissableCardLargeImage data={unmissbale} />
        <FlatList
          listKey={'unmissableList'}
          data={featured.data}
          contentContainerStyle={{ paddingRight: ws(16) }}
          renderItem={({ item, index }) => {
            return (
              <UnmissableCardSmallImage
                item={item}
                index={index}
                onPress={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.PRODUCT_LISTING, { query: { sub_category_id: item.slug } })}
                key={index}
              />
            )
          }}
          horizontal={true}
        />
        {/* Kids Wear text */}
        <LabelBottomLineCard label='Best of Kids Wear' color={colors.P_TEXT} />
        <FlatList
          listKey={'kidsList'}
          data={kids.data}
          contentContainerStyle={{ paddingRight: ws(16) }}
          renderItem={({ item, index }) =>
            <KidsWearCard item={item} index={index} key={index} />
          }
          horizontal={true}
        />
        <LabelBottomLineCard label='Beauty &  Cosmetics' color={colors.P_TEXT} />
        <SubcategoryCard imageSrc={IMAGES.beauty_large} />
        <FlatList
          listKey={'bueatyList'}
          data={beauty.data}
          contentContainerStyle={{ paddingRight: ws(16) }}
          renderItem={({ item, index }) =>
            <BeautyCosmeticsSubCard item={item} index={index} />
          }
          numColumns={2}
        />
        <LabelBottomLineCard label='Gadgets & Accessories' color={colors.P_TEXT} />
        <FlatList
          listKey={'gadgetsList'}
          data={electronics.data}
          contentContainerStyle={{ paddingRight: ws(16) }}
          renderItem={({ item, index }) => {
            return (
              <SmallImageCategories
                item={item}
                index={index}
                onPress={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.PRODUCT_LISTING, { query: { sub_category_id: item.slug } })}
                key={index}
              />
            )
          }}
          horizontal={true}
        />
        <LabelBottomLineCard label='Checklist For Lifestyle' color={colors.P_TEXT} />


        <Slider
          data={checkListLifeStyle.data}
          containerStyle={{ borderRadius: ms(15), marginHorizontal: ws(18) }}
          fHeight={hs(260)}
          fWidth={ws(339)}
          hideDot={true}
          renderItem={({ item, index }) => {
            return <NewCheckListForLifestyle item={item} index={index} key={index} />
          }}
        />
        <View style={{ marginTop: hs(5) }}>
          <LabelBottomLineCard label='House Essentials' color={colors.P_TEXT} />
          <FlatList
            listKey={'houseHoldList'}
            data={household.data}
            contentContainerStyle={{ paddingRight: ws(16) }}
            renderItem={({ item, index }) => {
              return (
                <SmallImageCategories
                  item={item}
                  index={index}
                  key={index}
                  onPress={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.PRODUCT_LISTING, { query: { sub_category_id: item.slug } })} />
              )
            }}
            horizontal={true}
          />
        </View>
        <LabelBottomLineCard label='Food,  Nuts & Spices' color={colors.P_TEXT} />
        <Slider
          data={foodCategory.data}
          containerStyle={{ borderRadius: ms(15), marginHorizontal: ws(18), marginTop: hs(15) }}
          fHeight={hs(160)}
          fWidth={ws(339)}
          hideDot={true}
          renderItem={({ item, index }) => {
            return (
              <View style={{ width: ws(339), height: hs(160), overflow: 'hidden' }} key={index}>
                <Image source={item.image} style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} />
              </View>
            )
          }}
        />
        <FlatList
          listKey={'foodList'}
          data={foods.data}
          contentContainerStyle={{ paddingRight: ws(16) }}
          renderItem={({ item, index }) => {
            return (
              <SmallImageCategories
                item={item}
                index={index}
                key={index}
                onPress={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.PRODUCT_LISTING, { query: { sub_category_id: item.slug } })}
              />
            )
          }}
          horizontal={true}
        />
        <View style={{ height: hs(100) }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.P_BG,
  },
  sliderContainer: {
    marginTop: hs(5),
    height: hs(210),
    backgroundColor: colors.P_BG
  },
  exploreContainer: {
    marginTop: hs(5),
    height: hs(446),
  },
})
export default HomeScreen;