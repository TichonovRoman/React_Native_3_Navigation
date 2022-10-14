import React from 'react';
import {Button, Text, View} from "react-native";
import {uswAppNavigation} from "../types/types";

const UsersScreen = () => {

    const navigation = uswAppNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Users Screen</Text>
            <Button title={'step home'} onPress={()=>{navigation.navigate('Home')}}/>
        </View>
    );
};

export default UsersScreen;