import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {color, icon} from '../const/const';
import {style} from './styleComponent';

export default function ItemFeelingComponent() {
  return (
    <ScrollView
      style={style.fldRow}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={style.BtnFeeling}>
        <View style={[style.Viewiconhappy, style.bgcolorpink]}>
          <Image source={icon.iconHappy} style={style.icon50} />
        </View>

        <Text>Happy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.BtnFeeling}>
        <View style={[style.Viewiconhappy, style.bgcolorpurple]}>
          <Image source={icon.iconCalm} style={style.icon50} />
        </View>

        <Text>Calm</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.BtnFeeling}>
        <View style={[style.Viewiconhappy, style.bgcolorgreenLight]}>
          <Image source={icon.iconmanic} style={style.icon50} />
        </View>

        <Text>Manic</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.BtnFeeling}>
        <View style={[style.Viewiconhappy, style.bgcolororange]}>
          <Image source={icon.iconangry} style={style.icon50} />
        </View>

        <Text>Angry</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
