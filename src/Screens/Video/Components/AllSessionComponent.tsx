import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {color, icon, image} from '../../../const/const';
import {styleGroup} from '../../People/style';
import {styleVideo} from '../styleCideoScreen';

const RenderAllSessions = () => {
  return (
  <View>
    <View style={styleVideo.containerItemAllSessions}>
      <View style={styleVideo.flexRow}>
        <Image source={image.anhdaidien} style={styleVideo.imganhdaidien} />

        <View style={styleVideo.mgl_pdbt20}>
          <Text style={styleVideo.txtname}>Hoang Tien</Text>

          <Text style={styleVideo.txtTitleAllSession}>
            Msc in Clinical Psychology
          </Text>
        </View>
      </View>


      <View style={styleGroup.dash} />

  
      <View style={{marginTop: 20}}>
        <View style={styleVideo.flexrow_mgbt20}>
          <View style={styleVideo.flexRow_mgr20}>
            <Image source={icon.iconCalender} style={{tintColor: '#ded6d1'}} />
            <Text> 31st March '22</Text>
          </View>
          <View style={styleVideo.flexRow}>
            <Image source={icon.iconClock} style={{tintColor: '#ded6d1'}} />
            <Text> 7:30 PM - 8:30 PM</Text>
          </View>
        </View>

        <View style={styleVideo.Viewbtn}>
          <TouchableOpacity style={styleVideo.btn_bgOrange}>
            <Text style={styleVideo.txtbtn_bgOrange}>Reschedule </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 36}}>
            <Text style={styleVideo.txtbtn_nonbg}>Join Now </Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>




    {/* sadasdasdas */}
    <View style={styleVideo.containerItemAllSessions2}>
      <View style={styleVideo.flexRow}>
        <Image source={image.anhdaidien} style={styleVideo.imganhdaidien} />

        <View style={styleVideo.mgl_pdbt20}>
          <Text style={styleVideo.txtname}>Hoang Tien</Text>

          <Text style={styleVideo.txtTitleAllSession}>
            Msc in Clinical Psychology
          </Text>
        </View>
      </View>


      <View style={styleGroup.dash} />

  
      <View style={{marginTop: 20}}>
        <View style={styleVideo.flexrow_mgbt20}>
          <View style={styleVideo.flexRow_mgr20}>
            <Image source={icon.iconCalender} style={{tintColor: '#ded6d1'}} />
            <Text> 31st March '22</Text>
          </View>
          <View style={styleVideo.flexRow}>
            <Image source={icon.iconClock} style={{tintColor: '#ded6d1'}} />
            <Text> 7:30 PM - 8:30 PM</Text>
          </View>
        </View>

        <View style={styleVideo.Viewbtn}>
          <TouchableOpacity style={styleVideo.btn_bgOrange}>
            <Text style={styleVideo.txtbtn_bgOrange}>Re-book </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 36}}>
            <Text style={styleVideo.txtbtn_nonbg}>View Profile </Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  </View>
  );
};

export default function AllSessionComponent() {
  return (
    <View style={styleVideo.containerAllSession}>
      <View style={styleVideo.viewscoll}>
        <View style={styleVideo.flexRowTitle}>
          <Text style={styleVideo.txtSessions}>All sessions</Text>
          <TouchableOpacity>
            <Image
              source={icon.iconShowmore}
              style={styleVideo.icontop_bottom}
            />
          </TouchableOpacity>
        </View>

        <View style={styleVideo.alightIconTop_Bottom}>
          <Image
            source={icon.icontriangletop}
            style={styleVideo.icontop_bottom}
          />

          <Image
            source={icon.iconTrianglebottom}
            style={styleVideo.icontop_bottom}
          />
        </View>
      </View>

      <RenderAllSessions />
    </View>
  );
}
