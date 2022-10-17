import {Button, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import {RootStackParamList, RootTabParamList, useAppNavigation} from "../types/types";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {setLoginAC, setPasswordAC} from "../../store/main-reducer";

const Reg = () => {
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const goLogin = () => {
        dispatch(setLoginAC(login))
        dispatch(setPasswordAC(password))
        navigation.navigate('Home', {screen: 'Login'})
        //более глубокая вложенность
        // navigation.navigate('Home', {screen: 'Login', params: {screen: 'Forgot'}})

    }

    return <View style={{alignItems: 'center'}}>
        <Text>Registration</Text>
        <TextInput
            style={{width: 230, height: 28, fontSize: 25, backgroundColor: 'white', borderWidth: 1}}
            value={login}
            onChangeText={setLogin}
        />
        <TextInput
            style={{width: 230, height: 28, fontSize: 25, backgroundColor: 'white', borderWidth: 1}}
            value={password}
            onChangeText={setPassword}
        />
        <Button title={'Registration'} onPress={goLogin}/>
        {/*//('Home', {screen: 'Login'}) это значит, что находясь в Home мы прыгаем в Login*/}
    </View>
}
const Login = () => {
    const navigation = useAppNavigation()
    const login = useAppSelector(state=> state.main.login)
    const password = useAppSelector(state=> state.main.password)

    const [login_, setLogin] = useState('')
    const [password_, setPassword] = useState('')

    const [error, setError] = useState('')
    const goUsersInfo = () => {
        if(login != login_) {
            setError('error')
            return
        }
        if (password != password_) {
            setError('error')
            return
        }
        navigation.navigate('Users')
        setError('')
    }

    return <View>
        <Text>Login: {login} </Text>
        <Text>Password: {password}</Text>
        {error && <Text style={{color: 'red'}}>{error}</Text>}

        <TextInput
            style={{width: 230, height: 28, fontSize: 25, backgroundColor: 'white', borderWidth: 1}}
            value={login_}
            onChangeText={setLogin}
        />
        <TextInput
            style={{width: 230, height: 28, fontSize: 25, backgroundColor: 'white', borderWidth: 1}}
            value={password_}
            onChangeText={setPassword}
        />
        <Button title={'step'} onPress={goUsersInfo}/>
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