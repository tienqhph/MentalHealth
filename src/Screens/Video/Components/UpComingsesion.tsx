import {View, Text, Image} from 'react-native';
import React from 'react';
import {styleVideo} from './../styleCideoScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {icon} from '../../../const/const';

export default function UpComingsesion() {
  return (
    <View style={styleVideo.container1on1}>
      <Image
        source={require('./../../../image/1.jpg')}
        style={styleVideo.image1on1}
      />

      <View style={styleVideo.viewtitle1on1}>
        <View style={styleVideo.viewtxt1on1}>
          <Text style={styleVideo.txttitle1on1}>UpComing Session</Text>

          <Text style={{color: '#9b8575', paddingTop: 10}}>
            Sahana V.Msc in Clinical Psychology
          </Text>

          <Text
            style={{
              fontWeight: 'bold',
              color: '#9b8575',
              paddingTop: 10,
              paddingBottom: 20,
            }}>
            {' '}
            7:30 PM - 8:30 PM
          </Text>

          <TouchableOpacity>
            <View style={styleVideo.flexRow}>
              <Text style={styleVideo.txtBooknow}>Join Now</Text>
              <Image
                source={icon.iconPLaycircle}
                style={{tintColor: '#fe8235'}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
