import {Button, Text, TextInput, View} from "react-native";
import React from "react";
import {RootStackParamList, RootTabParamList, useAppNavigation} from "../types/types";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationProp, useNavigation} from "@react-navigation/native";

const Reg = () => {
    const navigation = useAppNavigation()
    return <View style={{alignItems: 'center'}}>
        <Text >Registration</Text>
        <TextInput
            style={{width: 230, height: 28, fontSize: 25, borderWidth: 1}}
            value={''}
            onChangeText={()=>{}}
        />
        <TextInput
            style={{width: 230, height: 28, fontSize: 25, borderWidth: 1}}
            value={''}
            onChangeText={()=>{}}
        />
        <Button title={'step Login'} onPress={() => navigation.navigate('Home', {screen: 'Login'})}/>
        {/*//('Home', {screen: 'Login'}) это значит, что находясь в Home мы прыгаем в Login*/}
    </View>
}
const Login = () => {
    const navigation = useAppNavigation()
    return <View>
        <Text>Login</Text>
        <Button title={'step'} onPress={() => () => navigation.navigate('Home', {screen: 'Forgot'})}/>
    </View>
}
const Forgot = () => {
    const navigation = useAppNavigation()
    return <View>
        <Text>Forgot</Text>
        <Button title={'step'} onPress={() => {
        }}/>
    </View>
}

// const ButtonScreen = ()=> {
//     const navigation = useNavigation<NavigationProp<RootStackParamList>>()
//     return <View style={{flex: 1}}>
//         <Button title={'step reg'} onPress={() => {navigation.navigate('Reg')}}/>
//         <Button title={'step login'} onPress={() => {navigation.navigate('Login')}}/>
//         <Button title={'step forgot'} onPress={() => {navigation.navigate('Forgot')}}/>
//     </View>
// }


const Stack = createNativeStackNavigator<RootStackParamList>();

export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    return (
        //flex:1 значит растягивается на всю ширину экрана
        <View style={{flex: 1}}>
            <Stack.Navigator>
                {/*<Stack.Screen name={"ButtonScreen"} component={ButtonScreen}/>*/}
                <Stack.Screen name={"Reg"} component={Reg}/>
                <Stack.Screen name={"Login"} component={Login}/>
                <Stack.Screen name={"Forgot"} component={Forgot}/>
            </Stack.Navigator>


        </View>
    );
}

// export const HomeScreen = () => {
//
//     const navigation = uswAppNavigation()
//
//     return (
//         //flex:1 значит растягивается на всю ширину экрана
//         <View style={{flex: 1}}>
//             <Text>Home Screen</Text>
//             <Button title={'step details'} onPress={()=>{navigation.navigate('Details',
//                 // {id: 120, name: 'fgfgfg'}
//             )}}/>
//         </View>
//     );
// }