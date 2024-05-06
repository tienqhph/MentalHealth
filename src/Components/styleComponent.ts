import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  viewFocusbottomTab: {
    width: 16,
    height: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#fe8235',
    
  },
  containerItemBottomTab: {
    justifyContent:'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  iconFocusBottomTab: {tintColor: '#fe8235', width: 25, height: 25 ,marginBottom:10},

  iconUnFocus: {
    tintColor: 'gray',
    width: 25,
    height: 25, marginBottom:10, 
  },


  bgcolorpink:{ backgroundColor:'#ef5da8'},
  bgcolorpurple:{backgroundColor:'#aeaff7'},
  bgcolorgreenLight:{backgroundColor:'#a0e3e2'},
  bgcolororange:{backgroundColor:'#f09e54'},
  fldRow:{flexDirection:'row'  },
  BtnFeeling:{justifyContent:'center' , alignItems:'center' , marginRight:20 , borderRadius:10} , 
  Viewiconhappy:{ width:80 , height:80   ,alignItems:'center' , justifyContent:'center' , borderRadius:10 , marginBottom:10} , 
  icon50:{ width:50 , height:50},
});
