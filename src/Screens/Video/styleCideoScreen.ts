import {StyleSheet} from 'react-native';
import {color} from '../../const/const';

export const styleVideo = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:'#fbfbfb',
  },
  containerHeaderHome: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
  },

  flexRow: {
    flexDirection: 'row',

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
    padding: 10,
  },
  viewtxt1on1: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    position: 'relative',
    flex: 1,
    padding: 10,
  },
  txttitle1on1: {fontSize: 24, fontWeight: 'bold', color: '#573926'},
  txtBooknow: {
    color: '#fe8235',
    fontWeight: 'bold',
    fontSize: 20,
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
  txtbattles: {flex: 1, fontSize: 15},
  imgquote: {width: 50, height: 50},
  viewBattles: {
    alignItems: 'center',
    backgroundColor: '#f8f6f6',
    borderRadius: 20,
    padding: 20,
  },

  txtplanexpired: {fontSize: 24, fontWeight: 'bold', color: color.colorWhite},
  txtBuyNow: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 8,
  },
  containerAllSession: {padding: 10, marginTop: 20, marginBottom: 20  },
  viewscoll: {flexDirection: 'row', justifyContent: 'space-between'},

  flexRowTitle: {flexDirection: 'row', alignItems: 'center'},
  txtSessions: {fontWeight: '700', fontSize: 18, paddingRight: 10},
  icontop_bottom: {width: 15, height: 10},
  alightIconTop_Bottom: {alignItems: 'center', justifyContent: 'space-around'},
  containerItemAllSessions: {
    marginTop: 20,
    
    backgroundColor: '#fef3e7',
    padding: 20,
    borderRadius: 20,
  },
  mgl_pdbt20: {paddingLeft: 12, marginBottom: 20},
  txtname: {color: '#5f422f', fontWeight: 'bold', fontSize: 16},
  txtTitleAllSession: {color: '#5f422f', fontWeight: '400', fontSize: 16},

  flexrow_mgbt20: {flexDirection: 'row', marginBottom: 20},

  flexRow_mgr20: {flexDirection: 'row', marginRight: 25},

  Viewbtn:{flexDirection:'row' , justifyContent:'flex-start' , alignItems:'center'},
  btn_bgOrange:{backgroundColor:color.colorCam , borderRadius:12}  , 
  txtbtn_bgOrange:{padding:16 , color:color.colorWhite , fontWeight:'bold' , fontSize:16} , 
  txtbtn_nonbg:{fontSize:16, color:color.colorCam , fontWeight:'bold' } , 
  containerItemAllSessions2:{
    marginTop: 20,
    
    backgroundColor: '#f8f6f5',
    padding: 20,
    borderRadius: 20,
  }
});
