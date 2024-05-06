import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styleHome } from '../styleHome'
import { icon } from '../../../const/const'

export default function BuyMoreComponent() {
  return (
    <View style = {styleHome.mgt10}>
      <View style ={[styleHome.flexRow , styleHome.viewBattles]}>
        <Text style = {styleHome.txtbattles}>
            "It is better to conquer yourself than to win a thounsand battles"
        </Text>

        <Image source={require('./../../../image/quote.png')} style = {styleHome.imgquote}/>
      </View>

      <View style={styleHome.container1on1}>
        <Image
          source={require('./../../../image/2.jpg')}
          style={styleHome.image1on1}
        />

        <View style={styleHome.viewtitle1on1}>
          <View style={styleHome.viewtxt1on1}>
            <Text style={styleHome.txtplanexpired}>Plan Expired</Text>

            <Text style={{color: '#ffffff' , paddingBottom:10}}>   
            Get back chat  access and  session credits 
            </Text>

            <TouchableOpacity>
              <View style={styleHome.flexRow}>
                <Text style={styleHome.txtBuyNow}>Buy More</Text>
                <Image
                  source={icon.iconNext}
                  style = {{width:20 , height:20}}
                
                />
              </View>
            </TouchableOpacity>
          </View>

          <Image source={require('./../../../image/lotus-flower.png')} />
        </View>
      </View>
    </View>
  )
}