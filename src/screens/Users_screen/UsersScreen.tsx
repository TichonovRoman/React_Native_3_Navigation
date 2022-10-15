import React from 'react';
import {Button, Text, View} from "react-native";
import {useAppNavigation} from "../types/types";

const UsersScreen = () => {

    const navigation = useAppNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Users Screen</Text>
            <Button title={'step home'} onPress={()=>{navigation.navigate('Home')}}/>
        </View>
    );
};

export default UsersScreen;