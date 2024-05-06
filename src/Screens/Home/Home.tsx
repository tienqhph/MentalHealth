import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from './Components/HeaderComponent'
import { ScrollView } from 'react-native-gesture-handler'
import OneandOneComponent from './Components/OneandOneComponent'
import { color } from '../../const/const'
import BuyMoreComponent from './Components/BuyMoreComponent'
import HeadeAppComponent from '../../Components/HeadeAppComponent'


export default function Home() {
  return (
    <View style={{padding:20 , backgroundColor:color.colorWhite , flex:1}} >
      <HeadeAppComponent  />

      <ScrollView showsVerticalScrollIndicator={false}  contentContainerStyle= {{marginBottom:50}}>
      <HeaderComponent/>
      <OneandOneComponent/>
      <BuyMoreComponent/>
      </ScrollView>

    </View>
  )
}