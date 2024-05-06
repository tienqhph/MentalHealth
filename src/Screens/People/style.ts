import {StyleSheet} from 'react-native';
import {color} from '../../const/const';

export const styleGroup = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: color.colorWhite,
  },
  txtTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#573926',
    paddingTop: 20,
    paddingBottom: 20,
  },
  txtBoldFilterchecked: {
    fontWeight: 'bold',
    color: '#ffffff',
    padding: 15,
    textAlign: 'center',
  },
  fliterChecked: {
    backgroundColor: '#fe8235',

    borderRadius: 10,
  },

  txtunxhecked: {
    color: '#969595',
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
  },
  fliterUnChecked: {
    backgroundColor: '#f4f2f1',

    borderRadius: 10,
  },
  alghtCenter: {alignItems: 'center'},
  viewComment: {marginTop: 20, flexDirection: 'row', width: '100%'},
  imganhdaidien: {width: 50, height: 50, borderRadius: 25, marginRight: 16},

  txtName: {color: '#5e412f', fontWeight: 'bold', fontSize: 18},
  pdl20: {paddingLeft: 20},
  ViewLike: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgshare: {width: 24, height: 24},
  dash: {
    height: 2,
    backgroundColor: '#ded6d1',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  likeimage: {tintColor: color.tincolor, marginRight: 10},
  commentimage: {tintColor: color.tincolor, marginRight: 10, marginLeft: 12},
  btnedit: {
    backgroundColor: '#fe8235',
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconpencil: {width: 30, height: 30, tintColor: color.colorWhite},
});
