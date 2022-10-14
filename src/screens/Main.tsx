import React from 'react';
import {HomeScreen} from "./Home_screen/Home_Screens";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import DetailsScreen from "./Details_screen/DetailsScreen";
import UsersScreen from "./Users_screen/UsersScreen";
import {RootStackParamList} from "./types/types";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();
export const Main = () => {

    return (
        <Tab.Navigator initialRouteName={'Home'} >
            {/*первый указанный элемент будет загружаться главным по умолчанию*/}
            {/*но мы можем указать главный комопнет для загрузки initialRouteName={'Users'},
            если не указывать то  первый будет главный*/}
            <Tab.Screen name={"Home"} component={HomeScreen}/>
            <Tab.Screen name={"Details"} component={DetailsScreen}/>
            <Tab.Screen name={"Users"} component={UsersScreen}/>
        </Tab.Navigator>
    );
};
