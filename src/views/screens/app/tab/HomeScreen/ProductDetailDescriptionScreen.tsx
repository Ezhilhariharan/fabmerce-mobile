import { ScrollView } from '@views/components/functional/Scrollview';
import React, { useEffect, useState } from 'react';
import { Image, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { hs, ms, ws } from '@utilis/designs/measurements.design';
import TopSearch from '@views/components/designs/TopSearch';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import { ProductDescrptionCard } from '@views/components/designs/ProductDescriptionCard';
import ProductSizeCard from '@views/components/designs/ProductSizeCard';
import SoldByCard from '@views/components/designs/SoldByCard';
import ProductDetailsDescriptionCard from '@views/components/designs/ProductDetailsDescriptionCard';
import LabelCardProduct from '@views/components/designs/LabelCardForProduct';
import ProductMaterialsDescriptionCard from '@views/components/designs/ProductMaterialsDescriptionCard';
import DetailedProductDescriptionCard from '@views/components/designs/DetailedProductDescriptionCard';
import ProductListingCard from '@views/components/designs/ProductListingCard';
import ProductReviewCard from '@views/components/designs/ProductReviewCard';
import { Slider } from '@views/components/functional/Slider';
import ProductDescriptionImageCard from '@views/components/designs/ProductDetailsImageCard';
import AssuranceCard from '@views/components/designs/AssuranceCard';
import { assurance } from '@models/static/adminslice.static';
import FabmerceApi from '@models/api/FabmerceApi';
import { Icon } from '@views/components/functional/Icon';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '@config/colors.config';

const ProductDetailDescriptionScreen = ({ navigation, route }: any) => {
  // const [product, setProduct] = useState({ data: null, isLoading: true })

  // useEffect(()=>{
  //   getProduct()
  // }, [])

  // const getProduct = ({ string }: any) => {
  //   setProduct({ data: null, isLoading: true })
  //   FabmerceApi.searchProduct({ params: { searchString: string } }).then((res) => {
  //     setProduct({ data: res.data, isLoading: true })
  //   }).catch(err => console.log(err))
  // }

  return (
    <View style={styles.container}>
      <StatusBar/>
      <TopSearch onLFPress={() => NavServiceUtils.goBack()} />
      <ScrollView>
      <Slider
        data={[]}
        containerStyle={{ borderRadius: ms(15), marginHorizontal: ws(18) }}
        fHeight={hs(409)}
        fWidth={ws(375)}
        renderItem={({ item, index }) => {
          if (item.banner_url) {
            return (
              <ProductDescriptionImageCard />
            )
          } else {
            return <View />
          }
        }}
      />
      <ProductDescrptionCard />
      <View style={{ width: ws(375), height: hs(85), marginTop: hs(5) }}>
        <LabelCardProduct label='Select Size' color={colors.P_TEXT} />
        <ProductSizeCard />
      </View>
      <View style={{ width: ws(375), height: hs(133), marginTop: hs(5) }}>
        <LabelCardProduct label='Sold by' color={colors.P_TEXT} />
        <SoldByCard />
      </View>
      <View style={{ width: ws(375), height: hs(113), marginTop: hs(5) }}>
        <LabelCardProduct label='Description' color={colors.P_TEXT} />
        <DetailedProductDescriptionCard />
      </View>
      <LabelCardProduct label='Product Details' color={colors.P_TEXT}/>
      <ProductDetailsDescriptionCard />
      <LabelCardProduct label='Material & Care' color={colors.P_TEXT} />
      <ProductMaterialsDescriptionCard />
      <AssuranceCard />
      <View style={{flexDirection:'row'}}>
      <LabelCardProduct label='Ratings & Reviews' color={colors.P_TEXT}/>
      <View style={{marginLeft:ws(151)}}>
      <LabelCardProduct label='140 reviews' color={colors.P_TEXT} />
      </View>
      <Icon type='AntDesign' name="caretright" size={12} color={colors.P_TEXT} style={{marginTop:hs(32)}} />
      </View>
      <ProductReviewCard />

      <LabelCardProduct label='Related Products' />
      {/* <ProductListingCard/> */}
      <View style={{ height: hs(100) }}></View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
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
export default ProductDetailDescriptionScreen;