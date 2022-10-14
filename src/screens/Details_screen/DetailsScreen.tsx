import React from 'react';
import {Button, Text, View} from "react-native";
import {uswAppNavigation} from "../types/types";

const DetailsScreen = () => {

    const navigation = uswAppNavigation()

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button title={'step users'} onPress={()=>{navigation.navigate('Users')}}/>
        </View>
    );
};

export default DetailsScreen;