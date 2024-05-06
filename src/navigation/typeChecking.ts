import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types"
import { NAME_SCREENS } from "../const/const"
import { RouteProp } from "@react-navigation/native"



export  type RootStackParamList={
    BottomTab?:undefined , 
    Home:undefined


}


export type propsStack =  NativeStackNavigationProp<RootStackParamList , NAME_SCREENS.HOME>

export type routeProps = RouteProp<RootStackParamList , NAME_SCREENS.HOME>