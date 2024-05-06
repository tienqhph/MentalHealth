import {View, Text, Touchable, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styleGroup} from '../style';
import {color, icon, image} from '../../../const/const';
import {styleHome} from '../../Home/styleHome';
import {ScrollView} from 'react-native-gesture-handler';

export default function WellnessHubComponent() {
  const [textFilter, setTextFilter] = useState('trending');

  const _onPressFilter = (text: string) => {
    setTextFilter(text);
  };

  const RenderFilter = () => {
    if (textFilter == 'trending') {
      return (
        <View style={styleGroup.alghtCenter}>
          <View style={styleGroup.viewComment}>
            <Image source={image.anhdaidien} style={styleGroup.imganhdaidien} />
            <View>
              <View style={styleHome.flexRow}>
                <Text style={styleGroup.txtName}>Hoàng Tiến</Text>

                <Text style={styleGroup.pdl20}>. Just now</Text>
              </View>
              <Text style={{width: 300}}>
                Is there a therapy which can cure crossdressing & bdsm
                compulsion
              </Text>

              <View style={styleGroup.ViewLike}>
                <View style={styleGroup.flexRow}>
                  <Image source={icon.iconLike} style={styleGroup.likeimage} />
                  <Text>12</Text>
                  <Image
                    source={icon.iconChat}
                    style={styleGroup.commentimage}
                  />

                  <Text>2</Text>
                </View>
                <Image source={icon.iconShare} style={styleGroup.imgshare} />
              </View>
            </View>
          </View>
          <View style={styleGroup.dash} />
        </View>
      );
    }
  };
  return (
    <View style={{flex: 1}}>
      <Text style={styleGroup.txtTitle}>Wellness Hub</Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={
            textFilter == 'trending'
              ? styleGroup.fliterChecked
              : styleGroup.fliterUnChecked
          }
          onPress={() => _onPressFilter('trending')}>
          <Text
            style={
              textFilter == 'trending'
                ? styleGroup.txtBoldFilterchecked
                : styleGroup.txtunxhecked
            }>
            Trending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            textFilter == 'relation'
              ? styleGroup.fliterChecked
              : styleGroup.fliterUnChecked
          }
          onPress={() => _onPressFilter('relation')}>
          <Text
            style={
              textFilter == 'relation'
                ? styleGroup.txtBoldFilterchecked
                : styleGroup.txtunxhecked
            }>
            Relationship
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            textFilter == 'selfcare'
              ? styleGroup.fliterChecked
              : styleGroup.fliterUnChecked
          }
          onPress={() => _onPressFilter('selfcare')}>
          <Text
            style={
              textFilter == 'selfcare'
                ? styleGroup.txtBoldFilterchecked
                : styleGroup.txtunxhecked
            }>
            Self care{' '}
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <RenderFilter />
      </ScrollView>

      <TouchableOpacity style={styleGroup.btnedit}>
        <Image source={icon.iconpencil} style={styleGroup.iconpencil} />
      </TouchableOpacity>
    </View>
  );
}
