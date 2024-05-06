import { View, Text } from 'react-native'
import React from 'react'
import HeadeAppComponent from '../../Components/HeadeAppComponent'
import { styleGroup } from './style'
import WellnessHubComponent from './Components/WellnessHubComponent'

export default function People() {
  return (
    <View  style = {styleGroup.container}>
      <HeadeAppComponent/>
      <WellnessHubComponent/>
      
    </View>
  )
}