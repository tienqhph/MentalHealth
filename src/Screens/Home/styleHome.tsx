import {StyleSheet} from 'react-native';
import {color} from '../../const/const';

export const styleHome = StyleSheet.create({
  containerHeaderHome: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
  },

  flexRow: {
    flexDirection: 'row', 
    alignItems:'center' ,
  },
  imganhdaidien: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'relative',
  },
  iconBell: {width: 32, height: 32},
  quantitynotifications: {
    position: 'absolute',
    backgroundColor: color.colorCam,
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    right: -5,
  },
  txtquantity: {
    color: color.colorWhite,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txtHello: {
    fontSize: 32,
    color: 'black',
    fontWeight: '400',
    paddingTop: 12,
  },
  txtName: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 28,
    paddingBottom: 18,
  },
  txtfeeling: {
    fontWeight: '400',
    color: 'black',
    marginBottom: 12,
  },
  image1on1: {
    width: '100%',
    height: 200,
    position: 'relative',
    borderRadius: 20,
  },
  container1on1: {
    marginTop: 28,

    justifyContent: 'center',
  },
  viewtitle1on1: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute', 
     alignItems:'center',
    padding: 10,
  },
  viewtxt1on1: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    position: 'relative',
    flex: 1,
    padding:10
  },
  txttitle1on1: {fontSize: 24, fontWeight: 'bold', color: '#573926' , paddingBottom:10},
  txtBooknow: {
    color: '#fe8235',
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 8,
  },
  containerdelecter1on1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    position: 'relative',
  },
  btndelecter: {
    backgroundColor: '#f4f3f1',
    flexDirection: 'row',
    flexGrow: 1,
    borderRadius: 12,

    alignItems: 'center',
    justifyContent: 'center',
  },
  mgr10: {marginRight: 10},
  mgt10: {
    marginTop: 10,
  },
  txtselecter: {padding: 20, color: '#573926', fontWeight: 'bold'},
  txtbattles:{ flex:1 , fontSize:15} , 
  imgquote:{width:50 , height:50 },
  viewBattles:{alignItems:'center' , backgroundColor:'#f8f6f6' , borderRadius:20 , padding:20},

  txtplanexpired: {fontSize: 24, fontWeight: 'bold', color: color.colorWhite , paddingBottom:10},
  txtBuyNow: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 8,
  },
});
