import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { NAME_SCREENS, icon } from '../const/const';
import Home from '../Screens/Home/Home';
import Video from '../Screens/Video/Video';
import Chat from '../Screens/Chat/Chat';
import People from '../Screens/People/People';
import ItemBottomTabBar from '../Components/ItemBottomTabBar';


const Tab = createBottomTabNavigator()

const Stack = createStackNavigator()
export default function MainNavigation() {
  return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name={NAME_SCREENS.BOTTOMTAB} component={BottomTabNavigator}/>
        </Stack.Navigator>
  )
}



export const BottomTabNavigator = ()=>(
    <Tab.Navigator screenOptions={{
        headerShown:false , 
        tabBarShowLabel:false ,
        
        tabBarStyle:{
            width:'100%' , height:50
        }
        
    }}>
        <Tab.Screen  name={NAME_SCREENS.HOME} component={Home}  options={{
            tabBarIcon : ({focused}) =><ItemBottomTabBar foucused={focused} icon={icon.iconHome} />
        }}/>
        <Tab.Screen  name={NAME_SCREENS.VIDEO} component={Video} options={{
            tabBarIcon : ({focused}) =><ItemBottomTabBar foucused={focused} icon={icon.iconVideo} />
        }}/>
        <Tab.Screen  name={NAME_SCREENS.CHAT} component={Chat} options={{
            tabBarIcon : ({focused}) =><ItemBottomTabBar foucused={focused} icon={icon.iconChat} />
        }}/>
        <Tab.Screen  name={NAME_SCREENS.PEOPLE} component={People} options={{
            tabBarIcon : ({focused}) =><ItemBottomTabBar foucused={focused} icon={icon.iconPeople} />
        }}/>
    </Tab.Navigator>
)