import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {icon} from '../../../const/const';
import {styleHome} from '../styleHome';

export default function OneandOneComponent() {
  return (
    <View>
      <View style={styleHome.container1on1}>
        <Image
          source={require('./../../../image/1.jpg')}
          style={styleHome.image1on1}
        />

        <View style={styleHome.viewtitle1on1}>
          <View style={styleHome.viewtxt1on1}>
            <Text style={styleHome.txttitle1on1}>1 on 1 Sessions</Text>

            <Text style={{color: '#573926' , paddingBottom:10}}>
              Let's open up to the things that matter the most
            </Text>

            <TouchableOpacity>
              <View style={styleHome.flexRow}>
                <Text style={styleHome.txtBooknow}>Book Now</Text>
                <Image
                  source={icon.iconCalender}
                  style={{tintColor: '#fe8235'}}
                />
              </View>
            </TouchableOpacity>
          </View>

          <Image source={require('./../../../image/ticket.png')}  style = {{width:100 , height:100}}/>
        </View>
      </View>

      <View style={styleHome.containerdelecter1on1}>
        <TouchableOpacity style={[styleHome.btndelecter , styleHome.mgr10]}>
          <View style={styleHome.btndelecter}>
            <Image source={icon.iconJournal} style={{tintColor: '#d6ccc6'}} />

            <Text style={styleHome.txtselecter}>Journal</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styleHome.btndelecter}>
          <View style={styleHome.btndelecter}>
            <Image source={icon.iconlibrary} style={{tintColor: '#d6ccc6'}} />

            <Text style={styleHome.txtselecter}>Library</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
