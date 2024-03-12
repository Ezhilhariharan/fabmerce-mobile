import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import SubcategoryHorizontalList from '@views/components/designs/SubcategoryHorizontalList';
import CategoriesVerticalListCard from '@views/components/designs/CategoriesVerticalListCard';
import LabelTopHeader from '@views/components/designs/LabelTopHeader';
import StatusBar from '@views/components/functional/StatusBar';
import FabmerceApi from '@models/api/FabmerceApi';
import { hs, ws } from '@utilis/designs/measurements.design';

const CategoryScreen = ({ navigation, route }: any) => {
  const [homeData, setHomeData] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [activeCategory, setActiveCategory] = useState("")
  useEffect(() => {
    FabmerceApi.brandCategories({}).then((res) => {
      setHomeData(res.data)
      setSubCategory(res.data[0]?.children)
      setActiveCategory(res.data[0]?.name)
    })
  }, [])

  const assignSubCategory = (name: any) => {
    const filteredSubCategory: any = homeData?.filter((data: any) => data.name == name)
    setSubCategory(filteredSubCategory[0]?.children)
    setActiveCategory(filteredSubCategory[0]?.name)
  }
  return (
    <View style={styles.container}>
      <StatusBar />
      <LabelTopHeader label='Categories' />
      <ScrollView>
        <View style={styles.subCategoryCard}>
          <View style={styles.mainCategories}>
            {
              homeData?.map((data, ind: any) => (
                <CategoriesVerticalListCard item={data}
                  index={ind}
                  categoryName={assignSubCategory}
                  active={activeCategory} />
              ))
            }
          </View>
          <View style={styles.subCategories}>
            {
              subCategory?.map((data, ind: any) => (
                <SubcategoryHorizontalList item={data} index={ind} />
              ))
            }
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subCategoryCard: {
    flexDirection: 'row'
  },
  mainCategories: {
    height: "auto",
    width: ws(80),
  },
  subCategories: {
    height: "auto",
    width: ws(295),
  }
})
export default CategoryScreen;