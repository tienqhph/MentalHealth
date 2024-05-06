import { View, Text, Image } from 'react-native'
import React from 'react'
import { styleHome } from '../Screens/Home/styleHome'
import { icon, image } from '../const/const'

export default function HeadeAppComponent() {
  return (
    <View style={styleHome.containerHeaderHome}>
        <Image source={image.anhdaidien} style={styleHome.imganhdaidien} />
        <View style={{}}>
          <Image source={icon.iconBell} style={styleHome.iconBell} />
          <View style={styleHome.quantitynotifications}>
            <Text style={styleHome.txtquantity}>3</Text>
          </View>
        </View>
      </View>
  )
}