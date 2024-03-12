import colors from '@config/colors.config';
import fontsConfig from '@config/fonts.config';
import { NavKeys } from '@controllers/utils/NavKeys.utils';
import NavServiceUtils from '@controllers/utils/NavService.utils';
import FabmerceApi from '@models/api/FabmerceApi';
import { systemTransportor } from '@models/redux/system/system.transportor';
import { hs, wp, ws } from '@utilis/designs/measurements.design';
import { FlatList } from '@views/components/functional/Flatlist';
import { Icon } from '@views/components/functional/Icon';
import { Loader } from '@views/components/functional/Loader';
import { ScrollView } from '@views/components/functional/Scrollview';
import { useSpeech } from '@views/components/functional/SpeechToText';
import React, { useEffect, useState } from 'react';
import { Alert, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const SeachScreen = ({ onLFPress }: any) => {
  const { systemStore } = systemTransportor()
  const { voiceSearchData } = systemStore()
  const { onVoiceSearch, destroyRecognizing } = useSpeech()
  const [speechState, setSpeechState] = useState({ isListenting: false })
  const [searchString, setSearchString] = useState("")
  const [search, setSearch] = useState({ isLoading: false, data: [] })

  const onVoiceSearchStart = async () => {
    const isAvail = await onVoiceSearch()
    if (isAvail) {
      setSearchString('')
      setSearch({ ...search, isLoading: true, data: [] })
      setSpeechState({ ...speechState, isListenting: true })
    } else Alert.alert("Fabmerce", "Voice not available")
  }

  useEffect(() => {
    return () => {
      destroyRecognizing()
    }
  })

  // onVoice result
  useEffect(() => onVoiceSearchEnd(), [voiceSearchData?.text])
  const onVoiceSearchEnd = () => {
    if (voiceSearchData?.text) {
      setSpeechState({ ...speechState, isListenting: false })
      setSearchString(voiceSearchData.text)
    }
  }

  // onSearch
  useEffect(() => onSearch(), [searchString])
  const onSearch = () => {
    if (!searchString) return
    setSearch({ ...search, isLoading: true, data: [] })
    FabmerceApi.searchProduct({ params: { searchString } }).then((res) => {
      setSearch({ ...search, isLoading: false, data: res?.data?.data ?? [] })
    }).catch(err => console.log(err))
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.HOMESCREEN)}
          style={styles.backlogoContainer}
        >
          <Icon type='Ionicons' name="ios-arrow-back" size={25} color={colors.S_TEXT} />
        </TouchableOpacity>
        <View style={styles.searchBoxMainContainer}>
          <View style={styles.searchIconContainer}>
            <Icon type='Ionicons' name="ios-search-sharp" size={18} color={colors.T_TEXT} />
          </View>
          <View style={styles.searchInputContainer}>
            <TextInput
              value={searchString}
              onChangeText={(string) => setSearchString(string)}
              onSubmitEditing={() => NavServiceUtils.navigate(NavKeys.HOME_STACK.PRODUCT_LISTING, { query: { search: searchString } })}
              returnKeyType={'search'}
              placeholder={'Search Fabmerce.com'}
              placeholderTextColor={colors.T_TEXT}
              style={styles.textInput}
            />
          </View>
          {/* speech to text */}
          <TouchableOpacity onPress={onVoiceSearchStart} style={styles.micIconContainer}>
            <Icon type='FontAwesome' name="microphone" size={18} color={speechState.isListenting ? 'green' : colors.T_TEXT} />
          </TouchableOpacity>
        </View>
        <View style={styles.notificationContainer}>
          <Icon type='AntDesign' name="shoppingcart" size={25} color={colors.S_TEXT} />
        </View>
      </View>
      {search.isLoading ? <Loader /> :
        <FlatList
          listKey={'search'}
          data={searchString.length > 0 ? search.data : []}
          renderItem={({ item, index }) => {
            return (
              <Text
                onPress={() => {
                  NavServiceUtils.navigate(NavKeys.HOME_STACK.PRODUCT_DESCRIPTION)
                  // goto porduct details
                }}
                numberOfLines={1}
                style={{ fontSize: 16, marginVertical: hs(10), color:colors.P_TEXT, marginHorizontal: hs(16) }}
                key={index}>
                {item?.title}
              </Text>
            )
          }}
        />
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hs(80),
    width: wp('100%'),
    flexDirection: 'row',
    paddingVertical: hs(5),
    backgroundColor: colors.S_BG,
    marginTop: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight,
  },
  textInput: {
    height: 35,
    color: colors.P_TEXT,
    fontFamily: fontsConfig.POPPINS_REGULAR,
    fontWeight: '400',
    padding: 0,
    paddingHorizontal: 5,
  },
  logoContainer: {
    height: hs(30),
    width: ws(30),
    marginVertical: hs(22),
    marginHorizontal: ws(13),
    backgroundColor:colors.P_BG
  },
  backlogoContainer: {
    height: hs(30),
    width: ws(20),
    marginVertical: hs(22),
    marginHorizontal: ws(13),
  },
  imageLogo: {
    height: hs(15),
    width: ws(28),
    marginVertical: hs(8)
  },
  searchBoxMainContainer: {
    height: hs(40),
    borderRadius: 7,
    width: ws(267),
    marginVertical: hs(15),
    flexDirection: 'row',
    backgroundColor: colors.P_BG
  },
  searchIconContainer: {
    height: hs(40),
    width: ws(25),
    marginLeft: ws(9),
    marginVertical: hs(2),
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInputContainer: {
    width: wp('50%'),
    paddingTop: hs(4),
    height: hs(50)
  },
  micIconContainer: {
    height: hs(40),
    width: ws(40),
    marginVertical: hs(2),
    alignItems: 'center',
    justifyContent: 'center'
  },
  notificationContainer: {
    height: hs(50),
    width: ws(30),
    marginVertical: hs(22),
    marginLeft: ws(20)
  },
})

export default SeachScreen;