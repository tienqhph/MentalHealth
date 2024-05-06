import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from './styleComponent'


type iconType = {
    foucused:boolean , 
    icon:any
}
export default function ItemBottomTabBar({foucused , icon}:iconType) {
  return (
    <View style = {style.containerItemBottomTab}>

        <View style = {foucused? style.viewFocusbottomTab:null}/>
        <Image source={icon} style = {foucused?style.iconFocusBottomTab:style.iconUnFocus}/>
            
        
    </View>
  )
}