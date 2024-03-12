import { ScrollView } from '@views/components/functional/Scrollview';
import React, { useEffect, useState } from 'react';
import { Image, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { hs, ms, ws } from '@utilis/designs/measurements.design';
import FabmerceApi from '@models/api/FabmerceApi';
import { FlatList } from '@views/components/functional/Flatlist';
import { Loader } from '@views/components/functional/Loader';
import { ProductDescrptionCard } from '@views/components/designs/ProductDescriptionCard';
import ProductListingCard from '@views/components/designs/ProductListingCard';
import TopSearch from '@views/components/designs/TopSearch';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import SortFilter from '@views/components/designs/SortFilter';


const ProductListing = ({ navigation, route }: any) => {
  const { query = {} } = route.params
  const [data, setData] = useState({ data: [], isLoading: true })


  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    const suffix = Object.keys(query).map((e) => `${e}=${query[e]}`).join('&')
    console.log(">>>>", query, suffix)
    FabmerceApi.searchProduct({ params: { suffix } }).then((res) => {
      setData({ isLoading: false, data: res?.data?.data ?? [] })
      console.log("res",res)
    }).catch(err => console.log(err))
  }

  if (data.isLoading)
    return <Loader />

  return (
    <View style={styles.container}>
      <StatusBar />
      <TopSearch onLFPress={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.HOMESCREEN)} />
      <ScrollView>
        <SortFilter />
        <FlatList
          listKey={'searchlist'}
          data={data.data}
          numColumns={2}
          contentContainerStyle={{ paddingRight: ws(16) }}
          renderItem={({ item, index }) =>
            <ProductListingCard item={item} index={index} key={index} />
          }
        />
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
    backgroundColor: 'white'
  },
  exploreContainer: {
    marginTop: hs(5),
    height: hs(446)
  },
})
export default ProductListing;