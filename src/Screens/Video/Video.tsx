import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import UpComingsesion from './Components/UpComingsesion';
import {styleVideo} from './styleCideoScreen';
import HeadeAppComponent from '../../Components/HeadeAppComponent';
import AllSessionComponent from './Components/AllSessionComponent';

export default function Video() {
  return (
    <View style={styleVideo.container}>
      <HeadeAppComponent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <UpComingsesion />
        <AllSessionComponent />
      </ScrollView>
    </View>
  );
}
