import {Button, Text, View} from "react-native";
import React from "react";
import {uswAppNavigation} from "../types/types";

export const HomeScreen = () => {

    const navigation = uswAppNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green'}}>
            <Text>Home Screen</Text>
            <Button title={'step details'} onPress={()=>{navigation.navigate('Details')}}/>
        </View>
    );
}