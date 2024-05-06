import {View, Text, Image} from 'react-native';
import React from 'react';
import {color, icon, image} from '../../../const/const';
import {styleHome} from '../styleHome';
import ItemFeelingComponent from '../../../Components/ItemFeelingComponent';
import HeadeAppComponent from '../../../Components/HeadeAppComponent';

export default function HeaderComponent() {
  return (
    <View>
    
      <Text style={styleHome.txtHello}>Good Afternoon ,</Text>
      <Text style = {styleHome.txtName}>Sarina!</Text>

      <Text style = {styleHome.txtfeeling}>How are you feeling today ?</Text>


      <ItemFeelingComponent/>
    </View>
  );
}
